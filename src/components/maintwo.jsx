import React from 'react'

function Maintwo() {
  return (
  <div className='mainc'>
    <div className='fashionsteals'>

      <button className='fashionbutton' style={{outline:"none"}}>
        <div className='fashiontxt'>
          <span style={{marginLeft:"-46px",fontSize:"25px",color:"white"}}>Fashion Steals
            </span><br></br><span style={{color:"white",fontSize:"13px"}}>T-Shirts | Kurtis | Shoes | Handbag</span><br></br><br></br>
            <span style={{marginTop:"30px",color:"white",marginLeft:"-159px",fontSize:"20px"}}>Min.</span><br></br>
            <span style={{marginTop:"30px",marginLeft:"-80px",fontSize:"24px",color:"white"}}>50-90% off</span><br></br>
            <button className='btn1'><center>Shop Now</center></button>
        </div>
      <div className='fashionimg'></div>
      </button>

    </div>
    <div className='dealonkitchen'>
     

      <button className='dealbutton' style={{outline:"none"}}>
        <div className='kitchentxt'>
          <span style={{marginLeft:"-15px",fontSize:"25px",color:"white"}}>Deals On Kitchen</span><br></br>
          <span style={{color:"white",fontSize:"13px",marginLeft:"-40px"}}>Kinfe | cutlery | Bowl | Plate</span><br></br><br></br>
          <span style={{marginTop:"30px",color:"white",marginLeft:"-150px",fontSize:"20px"}}>Up To</span><br></br>
         <span style={{marginTop:"30px",fontSize:"24px",color:"white",marginLeft:"-118px"}}>80% off</span><br></br>
          <button className='kitbtn'><center>Shop Now</center></button>
         
        </div>
        <div className='kitchenbtn'></div>
      </button>

    </div>
    <div className='health'>

      <button className='healthbutton' style={{outline:"none"}}>
        <div className='healthtxt'>
        <span style={{marginLeft:"-25px",fontSize:"25px",color:"white"}}>Health & Wellness Essentials</span><br></br>
        <span style={{color:"white",fontSize:"13px",marginLeft:"-180px"}}>Handwash | Soap | Facewash </span><br></br><br></br>
        <span style={{marginTop:"30px",fontSize:"24px",color:"white",marginLeft:"-290px"}}>From</span><br></br>
        <span style={{marginTop:"-30px",fontSize:"24px",color:"white",marginLeft:"-290px"}}>₹129</span><br></br>
         <button className='hltbtn'><center>Shop Now</center></button>
        </div>
      <div className='healthbtn'></div>
      </button>
      
    </div>
  </div>
  )
}

export default Maintwo