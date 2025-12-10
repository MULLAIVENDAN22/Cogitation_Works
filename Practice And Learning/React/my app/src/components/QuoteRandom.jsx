import React, { useState } from 'react'
// import '../custom css/QuoteRandom.css'
import { use } from 'react'
const QuoteRandom = () => {
    
  const [quote,setQuote] = useState({quote:"Click for an Random Quote",author:""})
  const [count,setCount] = useState(0)

  async function handle() {
    const response = await fetch("https://quoteslate.vercel.app/api/quotes/random")
    const data = await response.json()
    console.log(data);
    
    setCount(count+1)
    setQuote(data)
  }

  return (
    <div className='text-center text-light '>
        <h2 className='fs-4 my-4 fw-semibold'>
            {quote.quote}
        </h2>
        <h5 className='mb-5 fw-medium'>- {quote.author}</h5>
        <h6>Your Count is {count}</h6>
        <div className='mt-5 d-flex justify-content-center'>
            <button
            type="button"
            className="btn btn-primary fw-semibold"
            onClick={handle}
            style={{ width: "150px", height: "45px" }}
          >
            Generate
          </button>
        </div>
    </div>
  )
}

export default QuoteRandom