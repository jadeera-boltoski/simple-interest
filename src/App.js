
import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';



function App() {
    // create 4 states--for store  values that enterd in each textbox in frontend
    const[principle,setpriciple]=useState("")
    const[rate,setrate]=useState("")
    const[year,setyear]=useState("")
    // assigning interest state as zero
    const[interest,setinterest]=useState(0)

    // this below console is used tocheck the state get that value from checkbox
    // console.log(principle,rate,year);


  // define function that used in form onsubmit event
  // arrow function

    const calculateInterest=(e)=>{
      // to prevent automatic refresh of page
      e.preventDefault()
      // this  console is used to check whether the form onsubmit event work or not
         console.log(principle,rate,year);

      // if there is no content in textboxes it must alert about is for that we write code
      if(!principle||!rate||!year)
      {
        alert('please fill the form completely')
      }
      else{
        setinterest(principle*rate*year/100)
      }

    }
    
    const resetForm=()=>{
      setpriciple("")
      setrate("")
      setyear("")
      setinterest(0)
    }


  return (
    <>
      {/* empty fragment is parent div.remaining div will be child */}
      <div className="app">

        <div className='container'>

          {/* heading */}
          <div className='heading-text'>
            <h3 className='title'> SIMPLE INTEREST CALCULATOR</h3 >
            <p className='title-para'>calculate your simple interest easily</p>
          </div>


          {/* card */}
          <div className='amount-card'>
            <div className='card-text'>
              <h3 className='total-amount'>₹{interest}</h3>
              <p className='total-para'>TOTAL SIMPLE INTEREST</p>

            </div>

          </div>

          <form onSubmit={calculateInterest} >
            {/* to hold the text field */}
            <div className='text-fields'>

              {/* principle amount */}
              <div className='input'>

                {/* react material ul text field */}
                <TextField onChange={e=>setpriciple(e.target.value)} value={principle||""}
                  className='outlined-basic' id="outlined-basic" label="Principle Amount" variant="outlined" />

              </div>

              {/* interest */}
              <div className='input'>
                <TextField onChange={e=>setrate(e.target.value)}  value={rate||""}
                className='outlined-basic' id="outlined-basic" label="Rate Of Interest(p.a)%" variant="outlined" />
              </div>

              {/* year */}
              <div className='input'>
                <TextField onChange={e=>setyear(e.target.value)}  value={year||""}
                className='outlined-basic' id="outlined-basic" label="Time Period(yr)" variant="outlined" />
              </div>



            </div>

            {/* button */}
            <div className='btn-group'>
              {/* single line ilu two button -using react material*/}
              <Stack direction="row" spacing={2}>
                <Button className='btn' type='submit' style={{backgroundColor:'darkgray'}} variant="contained">Calculate</Button>
                <Button className='btn' onClick={resetForm} variant="outlined">Reset</Button>
              </Stack>
            </div>
          </form>

        </div>

      </div>
    </>
  );
}

export default App;
