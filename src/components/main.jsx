import React from 'react'

function Main() {
  return (
    <div>
        <div className='offerproducts'>
           <button style={{border:"none",outline:"none",marginLeft:"150px",height:"50px",background:"none",marginTop:"-10px"}}><div className='iphonelogo'></div>
           <div className='iphone'><h5 style={{marginTop:"-30px",marginLeft:"45px",border:"none",outline:"none"}}>IPhone</h5></div></button>
           <button style={{marginLeft:"55px",height:"50px",width:"100px",border:"none",background:"none",outline:"none"}}><div className='groceries'></div>
           <div className='text'><h5 style={{marginTop:"-35px",marginLeft:"10px"}}>Groceries</h5></div></button>
          <button style={{border:"none",outline:"none",marginLeft:"60px",width:"100px",height:"55px",marginTop:"-30px",background:"none"}}>
           <div className='eletext'><h5 style={{marginTop:"10px",marginLeft:"1px"}}>Electronics</h5></div><div className='electronics'></div></button>
           <div className='home'><button style={{border:"none",width:"200px",height:"50px",marginTop:"1px",background:"none",outline:"none"}}> <div className='homelogo'></div>
           <div className='hometext'><h5 style={{marginTop:"25px"}}>Home and lifestyle</h5></div></button></div>
           <div className='fashion'><button style={{height:"50px",width:"130px",border:"none",background:"none"}}><div className='fashionlogo'></div>
           <div className='fashiontext'><h5>Fashion</h5></div></button></div>
           <div className='global'><button style={{height:"50px",width:"160px",border:"none",background:"none"}}><div className='globallogo'></div>
           <div className='globaltext'><h5>Global Store</h5></div></button></div>
            <div className='offer'><button style={{height:"50px",width:"160px",border:"none",background:"none"}}><div className='offerlogo'></div>
           <div className='offertext'><h5>Global Store</h5></div></button></div>
           <div className='flat'>
            <button className='flatbutton'>

            <div className='couponcode'> 
              <div className='coupon'><h2 style={{color:"white",fontSize:"36px",marginTop:"4px",marginLeft:"-12px"}}>Coupon Code</h2></div>
              <div className='xau'><h2 style={{color:"yellow",fontSize:"36px",marginTop:"4px",marginLeft:"-12px"}}>XAU435</h2></div>
            </div>
            <div className='noworever'>
             <h1 style={{fontWeight:"bolder",marginTop:"-5px",marginLeft:"-35px"}}>NOW</h1>
             <h1 style={{marginTop:"-46px",marginLeft:"-35px",fontSize:"40PX"}}>OR</h1>
             <h1 style={{marginTop:"-39px",marginLeft:"-35px"}}>NEVER</h1>
             <div className='arrow'></div>
            </div>
            <div className='fifty'>
              <div className='txt'>Flat</div>
              <div className='rupee'>₹</div>
              <div className='five'>50</div>
              <div className='off'>Off</div>
              <div className='miniorder'>Min. Order Value ₹199</div>
            </div>
            <div className='shopnow'>
              <button className='btnshopnow'>Shop Now</button>
            </div>
            </button>
            </div>
            </div>
          
        </div>
  )
}

export default Main