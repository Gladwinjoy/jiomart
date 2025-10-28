import React, { useState } from 'react'
import Main from './main'
import Maintwo from './maintwo'
import './maintwo.css'
import { useNavigate } from 'react-router-dom'
import Asingin from './singin'
import './singin.css'
import Electronicsbestseller from './electronicsbestseller'
import './electronicsbestseller.css'
import Fashionfinds from './fashionfinds'
import './fashionfind.css'
import Footer from './footer'
import './footer.css'

function Header() {
  const [singin,setsingin] = useState("")
  const navigate = useNavigate();
  const hsubmit = (a) => {
    a.preventDefault();
    navigate("/Asingin");
  }
  return (
    <div className='header'>
      <div className='innermainhead'>
        <div className='searchbar'>
          <form action={{}} method='get'>
      <input type='text' placeholder='Search In JioMart' className='search'></input>
      <div className='shopicon'></div>
      <div className='profileicon'></div>
      <div className='button'>
          <button type="button"style={{textDecoration: "none",background: "none",fontSize: "20px",color:"white",outline:"none",border:"none"}} onClick={hsubmit}>Sign In</button>
        </div>
          </form>
        </div>
        <h2 style={{ color : "white",marginLeft : "60px",marginTop : "-40px",fontSize : "28px"}}>JioMart</h2>
      </div>
        <div className='innerhead'>
          <h2 style={{fontSize : "14px",marginLeft : "140px",color : 'white',marginTop : "5px"}}>Scheduled delivery to :<select id = "places" name = "places" style={{marginLeft : "5px",marginTop : "-200px"}}>
            <option>Kochi</option>
            <option>Thrissur</option>
            <option>Malappuram</option>
          </select></h2>
        </div>
        <div className='offers'>





          
        </div>
        <div className='phoneheader'></div>
        <Main/>
        <Maintwo/>
         <Electronicsbestseller/>
         <Fashionfinds/>
         <Footer/>
    </div>
  )
}

export default Header