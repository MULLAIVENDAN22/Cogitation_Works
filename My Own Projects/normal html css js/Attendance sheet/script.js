const signIn = document.querySelector(".signIn");
const history = document.querySelector(".history");
const signOut = document.querySelector(".signOut");

let get = localStorage.getItem("Cogitation_Works") ? true : false;
console.log(get);

const success = document.querySelector(".success");

signIn.addEventListener("click", (e) => {
  if (get && JSON.parse(localStorage.getItem("Cogitation_Works")).active) {
    success.innerHTML = ` <h5 class="fw-semibold text-danger mt-1 me-1">Please Sign Out to Sign In</h5> `;
    success.classList.toggle("d-none");
    setTimeout(() => {
      success.classList.toggle("d-none");
    }, 2500);
    return;
  } else {
    success.innerHTML = ` <div>
                  <img
                    style="height: 50px; width: 55px; border-radius: 50%"
                    class="img-fluid"
                    src="https://static.vecteezy.com/system/resources/previews/023/893/562/original/check-tick-mark-on-wavy-edge-green-circle-sticker-star-burst-shape-tag-with-approved-icon-premium-official-account-verify-icon-stamp-illustration-isolated-on-white-background-vector.jpg"
                    alt=""
                  />
                </div>
                <h5 class="fw-semibold mt-1 me-4">Successfull sign In</h5>`;
    success.classList.toggle("d-none");
    setTimeout(() => {
      success.classList.toggle("d-none");
      changing("In");
    }, 2500);
  }
});

signOut.addEventListener("click", (e) => {
  if (!get) {
    success.innerHTML = ` <h5 class="fw-semibold text-danger text-center mt-1 me-1">New User detected, Please Sign In</h5> `;
    success.classList.toggle("d-none");
    setTimeout(() => {
      success.classList.toggle("d-none");
    }, 2500);
    return;
  }
  if (get && !JSON.parse(localStorage.getItem("Cogitation_Works")).active) {
    success.innerHTML = ` <h5 class="fw-semibold text-danger mt-1 me-1">Please Sign In to Sign Out</h5> `;
    success.classList.toggle("d-none");
    setTimeout(() => {
      success.classList.toggle("d-none");
    }, 2500);
    return;
  } else {
    success.innerHTML = ` <div>
                  <img
                    style="height: 50px; width: 55px; border-radius: 50%"
                    class="img-fluid"
                    src="https://static.vecteezy.com/system/resources/previews/023/893/562/original/check-tick-mark-on-wavy-edge-green-circle-sticker-star-burst-shape-tag-with-approved-icon-premium-official-account-verify-icon-stamp-illustration-isolated-on-white-background-vector.jpg"
                    alt=""
                  />
                </div>
                <h5 class="fw-semibold mt-1 me-4">Successfull sign Out</h5>`;
    success.classList.toggle("d-none");
  }
  setTimeout(() => {
    success.classList.toggle("d-none");
    changing("Out");
  }, 2500);
});

const deviceId = document.querySelector(".deviceId");

let Cogitation_Works;

const using = {
  action: "",
  latitude: "User denied",
  longitude: "User denied",
  time: "",
};

async function changing(action) {
  let finalId;
  if (get) {
    Cogitation_Works = await JSON.parse(
      localStorage.getItem("Cogitation_Works")
    );
    finalId = Cogitation_Works.id;
  } else {
    Cogitation_Works = {
      id: "",
      history: [],
      active: false,
    };
    finalId = generateId();

    Cogitation_Works.id = finalId;
  }

  function generateId() {
    const pattern = /^[A-Za-z]{4}[0-9]{6}$/;
    let letters = "";
    for (let i = 0; i < 4; i++) {
      const charCode = Math.floor(Math.random() * 26) + 65;
      letters += String.fromCharCode(charCode);
    }

    let numbers = "";
    for (let i = 0; i < 6; i++) {
      numbers += Math.floor(Math.random() * 10);
    }
    console.log(letters + numbers);

    return pattern.test(letters + numbers) ? letters + numbers : generateId();
  }

  const options = {
    timeZone: "Asia/Dubai", // GST corresponds to Gulf Standard Time
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const date = new Date().toLocaleString("en-US", options);

  using.action = action;

  using.time = date;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        using.latitude = position.coords.latitude;
        using.longitude = position.coords.longitude;
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
      },
      function (error) {
        console.warn("Error Code = " + error.code + " - " + error.message);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  Cogitation_Works.history.push(using);
  deviceId.innerHTML = `Your Device Id : ${finalId}`;
  deviceId.classList.remove("d-none");

  Cogitation_Works.active = action == "In" ? true : false;
  get = true;
  window.localStorage.setItem(
    "Cogitation_Works",
    JSON.stringify(Cogitation_Works)
  );
}

history.addEventListener("click", async () => {
  const formatted = await JSON.stringify(
    JSON.parse(window.localStorage.getItem("Cogitation_Works")).history,
    null,
    2
  );

  const newWindow = window.open("", "_blank");
  newWindow.document.write("<pre>" + formatted + "</pre>");
});
