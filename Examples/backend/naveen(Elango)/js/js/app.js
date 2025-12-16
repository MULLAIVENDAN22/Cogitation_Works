const db = require('./database');
const express = require('express');
const session = require('express-session');

const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { render } = require('ejs');

const app = express();
app.use(session({
  secret: 'my=project',
  resave: false,
  saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(express.static('admin'));
app.use(express.static('merchant'));
app.use(express.static('public'));


app.get('/',function(req,res){
  res.sendFile(__dirname+'/public/dashboard.html');
});

app.post('/u_register',function(req,res){
  var name=req.body.name;
  var dob=req.body.dob;
  var address=req.body.address;
  var email=req.body.email;
  var phone=req.body.phone;
  var password=req.body.password;
  const query = 'INSERT INTO user_tb(name,dob,address,email,phone,u_password) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [name, dob, address, email, phone,password];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('error inserting:', err);
      res.status(500).send('Error inserting item');
    } else {
      res.redirect('/login');
    }
  });
});

app.get('/login',function(req,res){
  res.render(__dirname+'/public/login')
});

app.get('/signup',function(req,res){
  res.render(__dirname+'/public/signup')
});

app.post('/auth',function(req,res){
  var email=req.body.email;
  var password=req.body.password;
  db.query('SELECT * FROM user_tb WHERE email = ? AND u_password = ?', [email, password], function(error, results, fields) {
    // If there is an issue with the query, output the error
    if (error) throw error;
    // If the account exists
    if (results.length > 0) {
      req.session.userId = results[0].id;
      req.session.username = results[0].name;
      if (!req.session.userId) {
        return res.redirect('/login');
      }
      else
      // Redirect to home page
      res.render(__dirname+'/public/home', { session: req.session });
    } else {
      res.send('Incorrect Username and/or Password!');
    }			
    res.end();
  });
});

app.get('/home',function(req,res){
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  res.render(__dirname+'/public/home',{session:req.session})
})

app.get('/logout', function(req, res){
  req.session.destroy(err => {
    if (err) throw err;
    res.redirect('/');
  });
});



app.get('/buy',function(req,res){
  var sql="select * from item_tb where id=?";
			var id=req.query.id;
			db.query(sql,[id],function(err,result){
				if(err)console.log("error");
				else{
					res.render(__dirname+"/public/single_product",{result});
				}
			});
});

app.get('/add_item',function(req,res){
  if (!req.session.userId) {
    return res.redirect('/login'); // Ensure user is authenticated
  }
  res.render(__dirname+"/merchant/add_item",
    {session: req.session
    });
});


// Setup multer for item image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  }
});

const upload = multer({ storage: storage });

// Endpoint to insert item
app.post('/insert', upload.single('item_image'), (req, res) => {
  const { item_name, item_description, item_amount } = req.body;
  const item_image = req.file ? req.file.filename : null; // Check if file exists
  const merchant_id = req.session.userId;

  if (!item_image) {
    return res.status(400).send('No file uploaded');
  }

  const sql = "INSERT INTO item_tb (item_name, item_description, item_image, item_amount, merchant_id) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [item_name, item_description, item_image, item_amount, merchant_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error inserting data.' });
    }
    res.status(201).json({ message: 'Item inserted successfully!', id: result.insertId });
  });
});

// Setup multer for merchant ID proof uploads
const uploads = multer({
  dest: './admin/uploads/',
  limits: { fileSize: 5 * 1024 * 1024 }, // Optional: Limit file size
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/; // Allow only image file types
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: File type not supported!');
    }
  }
});

// Endpoint to create a merchant
app.post('/create-merchant', uploads.single('idProof'), (req, res) => {
  const { name, dob, address, email, phone, password } = req.body;
  const idProof = req.file ? req.file.filename : null; // Check if file exists

  if (!idProof) {
    return res.status(400).send('No ID proof uploaded');
  }

  const query = 'INSERT INTO merchant_tb (name, dob, address, email, phone, m_password, original_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [name, dob, address, email, phone, password, idProof];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error inserting:', err);
      return res.status(500).send('Error inserting merchant');
    }
    res.redirect('/manage_merchant');
  });
});


app.get('/manage_item',function(req,res){
  const merchant_id=req.session.userId;
  const sql='select * from item_tb where merchant_id=?';
  db.query(sql,[merchant_id],function(err,result){
    if(err)console.log(err);
    else{
      res.render(__dirname+'/merchant/manage_item',{result,session:req.session});
    }
  })
})

app.get('/item', (req, res) => {
  const sql = 'SELECT * FROM item_tb';
  db.query(sql, (err, result) => {
      if (err) {
          console.error(err);
          return res.status(500).send('Error retrieving items.');
      }
      res.render(__dirname+'/public/shop', {result,session:req.session});
  });
});

app.get('/a_login',function(req,res){
  res.sendFile(__dirname+'/admin/login.html')
});


// Authentication route
app.post('/a_auth', function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  db.query('SELECT * FROM admin_tb WHERE email = ? AND a_password = ?', [email, password], function(error, results) {
    // Handle query error
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the account exists
    if (results.length > 0) {
      req.session.userId = results[0].id;
      req.session.username = results[0].name;

      // Redirect to admin page
      return res.redirect('/admin'); // Redirect to the admin route
    } else {
      return res.status(401).send('Incorrect Username and/or Password!');
    }
  });
});

// Admin route to get dashboard data
app.get('/admin', function(req, res) {
  if (!req.session.userId) {
    return res.redirect('/login'); // Ensure user is authenticated
  }

  const userCountQuery = "SELECT COUNT(name) AS user_count FROM user_tb";
  db.query(userCountQuery, function(err, userCountResult) {
    if (err) {
      console.error('Error fetching user count:', err);
      return res.status(500).send('Internal Server Error');
    }

    const merchantCountQuery = "SELECT COUNT(name) AS merchant_count FROM merchant_tb";
    db.query(merchantCountQuery, function(err, merchantCountResult) {
      if (err) {
        console.error('Error fetching merchant count:', err);
        return res.status(500).send('Internal Server Error');
      }

      // Render the dashboard with results and session data
      res.render(__dirname + "/admin/dashboard", {
        result: userCountResult,
        result1: merchantCountResult,
        session: req.session
      });
    });
  });
});



app.get('/create_merchant',function(req,res){
  if (!req.session.userId) {
    return res.redirect('/login'); // Ensure user is authenticated
  }
  res.render(__dirname+"/admin/merchant_create",
    {session: req.session
    });
});


app.get('/manage_merchant',function(req,res){
  var sql="select * from merchant_tb";
  db.query(sql,function(err,result){
    if(err)throw err;
    else{
      res.render(__dirname+"/admin/manage_merchant",{result,
        session: req.session});
    }
  });
});

app.get('/manage_user',function(req,res){
  var sql="select * from user_tb";
  db.query(sql,function(err,result){
    if(err)throw err;
    else{
      res.render(__dirname+"/admin/manage_user",
        {result,
          session:req.session
        });
    }
  });
});

app.get('/allbooking',function(req,res){
  var sql="SELECT b.id AS booking_id,b.start_date,b.end_date,b.event_address,b.event_amount,u.name AS user_name,i.item_name,m.name AS merchant_name,b.status FROM booking_tb b JOIN user_tb u ON b.user_id = u.id JOIN item_tb i ON b.item_id = i.id JOIN merchant_tb m ON i.merchant_id = m.id";
  db.query(sql,function(err,result){
    if(err)throw err;
    else{
      res.render(__dirname+"/admin/allbooking",{result,
        session: req.session});
    }
  });
});



app.get('/m_login', function(req, res) {
  res.sendFile(__dirname + '/merchant/login.html');
});

// Authentication route
app.post('/m_authentication', function(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  // Use parameterized queries to prevent SQL injection
  db.query('SELECT * FROM merchant_tb WHERE email = ? AND m_password = ?', [email, password], function(error, results) {
    // Handle query error
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the account exists
    if (results.length > 0) {
      req.session.userId = results[0].id;
      req.session.username = results[0].name;

      // Redirect to merchant dashboard
      return res.redirect('/merchant');
    } else {
      return res.status(401).send('Incorrect Username and/or Password!');
    }
  });
});

// Merchant route to get dashboard data
app.get('/merchant', function(req, res) {
  if (!req.session.userId) {
    return res.redirect('/'); // Ensure user is authenticated
  }

  const merchantId = req.session.userId; // Get the logged-in merchant ID

  const pendingQuery = 'SELECT COUNT(b.id) AS pending_bookings_count FROM booking_tb b JOIN item_tb i ON b.item_id = i.id WHERE b.status = "pending" AND i.merchant_id = ?';
  db.query(pendingQuery, [merchantId], function(err, pendingResult) {
    if (err) {
      console.error('Error fetching pending bookings count:', err);
      return res.status(500).send('Internal Server Error');
    }

    const confirmQuery = 'SELECT COUNT(b.id) AS confirm_bookings_count FROM booking_tb b JOIN item_tb i ON b.item_id = i.id WHERE b.status = "confirm" AND i.merchant_id = ?'; // Changed 'confirm' to 'confirmed'
    db.query(confirmQuery, [merchantId], function(err, confirmResult) {
      if (err) {
        console.error('Error fetching confirmed bookings count:', err);
        return res.status(500).send('Internal Server Error');
      }

      // Render the dashboard with results and session data
      res.render(__dirname + "/merchant/dashboard", {
        pendingBookingsCount: pendingResult[0].pending_bookings_count,
        confirmedBookingsCount: confirmResult[0].confirm_bookings_count,
        session: req.session
      });
    });
  });
});

app.get('/pending_orders',function(req,res){
  if (!req.session.userId) {
    return res.redirect('/'); // Ensure user is authenticated
  }
  const merchantId = req.session.userId;
  const sql="SELECT b.id AS booking_id,b.start_date,b.end_date,b.event_address,b.event_amount,u.name AS user_name,i.item_image,i.item_name,m.name AS merchant_name,b.status FROM booking_tb b JOIN user_tb u ON b.user_id = u.id JOIN item_tb i ON b.item_id = i.id JOIN merchant_tb m ON i.merchant_id = m.id WHERE b.status='pending' AND merchant_id=?";
  db.query(sql, [merchantId], function(err, result) {
    if (err) {
      console.error('Error fetching pending bookings count:', err);
      return res.status(500).send('Internal Server Error');
    }
    else{
      res.render(__dirname+"/merchant/pending_orders",
        {result,
          session:req.session
        });
    }
  });
})

app.get('/confirm_orders',function(req,res){
  if (!req.session.userId) {
    return res.redirect('/'); // Ensure user is authenticated
  }
  const merchantId = req.session.userId;
  const sql="SELECT b.id AS booking_id,b.start_date,b.end_date,b.event_address,b.event_amount,u.name AS user_name,u.phone,i.item_image,i.item_name,m.name AS merchant_name,b.status FROM booking_tb b JOIN user_tb u ON b.user_id = u.id JOIN item_tb i ON b.item_id = i.id JOIN merchant_tb m ON i.merchant_id = m.id WHERE b.status='confirm' AND merchant_id=?";
  db.query(sql, [merchantId], function(err, result) {
    if (err) {
      console.error('Error fetching pending bookings count:', err);
      return res.status(500).send('Internal Server Error');
    }
    else{
      res.render(__dirname+"/merchant/confirm_orders",
        {result,
          session:req.session
        });
    }
  });
})

app.get('/m_histroy',function(req,res){
  if (!req.session.userId) {
    return res.redirect('/'); // Ensure user is authenticated
  }
  const merchantId = req.session.userId;
  const sql = "SELECT b.id AS booking_id, b.start_date, b.end_date, b.event_address, b.event_amount, u.name AS user_name, i.item_image, i.item_name, m.name AS merchant_name, b.status, i.item_description FROM booking_tb b JOIN user_tb u ON b.user_id = u.id JOIN item_tb i ON b.item_id = i.id JOIN merchant_tb m ON i.merchant_id = m.id WHERE merchant_id=?";
  db.query(sql, [merchantId], function(err, result) {
    if (err) {
      console.error('Error fetching pending bookings count:', err);
      return res.status(500).send('Internal Server Error');
    }
    else{
      res.render(__dirname+"/merchant/m_histroy",
        {result,
          session:req.session
        });
    }
  });
})

app.post('/book', function(req, res) {
  if (!req.session.userId) {
    return res.redirect('/'); 
  }
  
  const userId = req.session.userId;  
  const start = new Date(req.body.startDate);
  const end = new Date(req.body.endDate);
  const event_address = req.body.eventAddress;
  const item_id = req.body.eventId;
  const status = "pending";
  
  // Calculate the number of days between start and end dates
  const timeDifference = end - start; // difference in milliseconds
  const event_amount_day = Math.ceil(timeDifference / (1000 * 3600 * 24)); // convert to days
  
  // Assuming req.body.eventAmount is the daily amount
  const totalAmount = event_amount_day * req.body.eventAmount;
  
  const sql = "INSERT INTO booking_tb (start_date, end_date, event_address, event_amount, user_id, item_id, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [start, end, event_address, totalAmount, userId, item_id, status];
  
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('error inserting:', err);
      res.status(500).send('Error inserting item');
    } else {
      console.log("Booking Confirm");
      res.status(200).send('Booking successful');
    }
  });
});


app.get('/confirm_booking',function(req,res){
  if (!req.session.userId) {
    return res.redirect('/'); 
  }
  const val=req.query.id;
  const sql='update booking_tb SET status="confirm" WHERE id=?';
  db.query(sql,[val],function(err,result){
    if(err)console.log(err);
    else{
      res.redirect('/confirm_orders');
    }
  })
})

app.get('/reject_booking',function(req,res){
  if (!req.session.userId) {
    return res.redirect('/'); 
  }
  const val=req.query.id;
  const sql='update booking_tb SET status="reject" WHERE id=?';
  db.query(sql,[val],function(err,result){
    if(err)console.log(err);
    else{
      res.redirect('/m_histroy');
    }
  })
})

app.get('/u_profile', function(req, res) {
  const user_id = req.session.userId;
  if (!user_id) {
      return res.redirect('/'); 
  }

  const sql = 'SELECT * FROM user_tb WHERE id = ?';
  db.query(sql, [user_id], function(err, result) {
      if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
      }
      if (result.length === 0) {
          return res.status(404).send('User not found');
      }

      // Assuming result is an array and you want the first user
      res.render(__dirname + '/public/u_profile', { user: result[0], session: req.session });
  });
});

app.get('/m_profile', function(req, res) {
  const user_id = req.session.userId;
  if (!user_id) {
      return res.redirect('/'); 
  }

  const sql = 'SELECT * FROM merchant_tb WHERE id = ?';
  db.query(sql, [user_id], function(err, result) {
      if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
      }
      if (result.length === 0) {
          return res.status(404).send('Merchant not found');
      }

      // Assuming result is an array and you want the first user
      res.render(__dirname + '/merchant/m_profile', { user: result[0], session: req.session });
  });
});

app.get('/profile', function(req, res) {
  const user_id = req.session.userId;
  if (!user_id) {
      return res.redirect('/'); 
  }

  const sql = 'SELECT * FROM admin_tb WHERE id = ?';
  db.query(sql, [user_id], function(err, result) {
      if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
      }
      if (result.length === 0) {
          return res.status(404).send('Admin not found');
      }

      // Assuming result is an array and you want the first user
      res.render(__dirname + '/admin/a_profile', { user: result[0], session: req.session });
  });
});

app.get('/user_orders', function(req, res) {
  if (!req.session.userId) {
    return res.redirect('/'); // Ensure user is authenticated
  }

  const userid = req.session.userId;

  const sql = `
    SELECT b.id AS booking_id, b.start_date, b.end_date, b.event_address, b.event_amount,
           u.name AS user_name, u.phone, i.item_image, i.item_name, m.name AS merchant_name, b.status
    FROM booking_tb b
    JOIN user_tb u ON b.user_id = u.id
    JOIN item_tb i ON b.item_id = i.id
    JOIN merchant_tb m ON i.merchant_id = m.id
    WHERE (b.status = 'confirm' OR b.status = 'pending') AND u.id = ?`;

  db.query(sql, [userid], function(err, result) {
    if (err) {
      console.error('Error fetching user orders:', err);
      return res.status(500).send('Internal Server Error');
    } else {
      res.render(__dirname + "/public/user_order", {
        result,
        session: req.session
      });
    }
  });
});

app.get('/all_user_orders', function(req, res) {
  if (!req.session.userId) {
    return res.redirect('/'); // Ensure user is authenticated
  }

  const userid = req.session.userId;

  const sql = `
    SELECT b.id AS booking_id, b.start_date, b.end_date, b.event_address, b.event_amount,
           u.name AS user_name, u.phone, i.item_image, i.item_name, m.name AS merchant_name, b.status
    FROM booking_tb b
    JOIN user_tb u ON b.user_id = u.id
    JOIN item_tb i ON b.item_id = i.id
    JOIN merchant_tb m ON i.merchant_id = m.id
    WHERE (b.status = 'reject' OR b.status = 'completed' OR b.status = 'cancel') AND u.id = ?`;

  db.query(sql, [userid], function(err, result) {
    if (err) {
      console.error('Error fetching user orders:', err);
      return res.status(500).send('Internal Server Error');
    } else {
      res.render(__dirname + "/public/all_user_order", {
        result,
        session: req.session
      });
    }
  });
});

app.get('/delete_item',function(req,res){
  if (!req.session.userId) {
    return res.redirect('/'); // Ensure user is authenticated
  }
  const booking_id = req.query.booking_id;
  const sql="update booking_tb SET status='cancel' WHERE id=?"
  db.query(sql, [booking_id], function(err, result) {
    if (err) {
      console.error('Error fetching user orders:', err);
      return res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/all_user_orders')
    }
  });

})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});