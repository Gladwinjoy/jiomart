import React from 'react'

function Footer() {
  return (
    <div className='fcontainer'>
     <div className='allcategories'>
        <center><h3>ALL Categories</h3></center>
        <center>
            <div style={{marginLeft:"-70px",marginTop:"10px"}}><span>Grocery</span><br></br></div>
           <div style={{marginLeft:"-48px",marginTop:"10px"}}><span>Electronics</span><br></br></div>
           <div style={{marginLeft:"-67px",marginTop:"10px"}}><span>Fashion</span><br></br></div>
           <div style={{marginLeft:"-2px",marginTop:"10px"}}><span> Home & life style</span><br></br></div>
           <div style={{marginLeft:"-16px",marginTop:"10px"}}> <span>Premium Fruits</span><br></br></div>
           <div style={{marginLeft:"-79px",marginTop:"10px"}}><span> Books</span><br></br></div>
           <div style={{marginLeft:"-60px",marginTop:"10px"}}><span> Furniture</span><br></br></div>
        </center>
     </div>
     <div className='popularcategories'>
        <center><h3>Popular Categories</h3></center>
            <div style={{marginLeft:"30px",marginTop:"10px"}}><span>Biscuits, Drinks &</span><br></br></div>
              <div style={{marginLeft:"30px",marginTop:"-5px"}}><span>Packaged Foods</span><br></br></div>
          <div style={{marginLeft:"30px",marginTop:"10px"}}><span>Fruits & Vegetables</span><br></br></div>
           <div style={{marginLeft:"30px",marginTop:"10px"}}><span>Cooking Essentials</span><br></br></div>
           <div style={{marginLeft:"30px",marginTop:"10px"}}><span>Dairy & Bakery</span><br></br></div>
           <div style={{marginLeft:"30px",marginTop:"10px"}}><span> Personal Care</span><br></br></div>
           <div style={{marginLeft:"30px",marginTop:"10px"}}> <span>Beauty</span><br></br></div>
           <div style={{marginLeft:"30px",marginTop:"10px"}}><span>Home</span><br></br></div>
           <div style={{marginLeft:"30px",marginTop:"10px"}}><span>Mom & Baby Care</span><br></br></div>
            <div style={{marginLeft:"30px",marginTop:"10px"}}><span>School, Office &</span><br></br></div>
            <div style={{marginLeft:"30px",marginTop:"10px"}}><span>Stationery</span><br></br></div>
     </div>
     <div className='customeraccount'>
        <center><h3>Customer Account</h3></center>
          <div style={{marginLeft:"30px",marginTop:"10px"}}> <span>My Account</span><br></br></div>
           <div style={{marginLeft:"30px",marginTop:"10px"}}><span>My Orders</span><br></br></div>
           <div style={{marginLeft:"30px",marginTop:"10px"}}><span>Wishlist</span><br></br></div>
            <div style={{marginLeft:"30px",marginTop:"10px"}}><span>Delivery Addresses</span><br></br></div>
            <div style={{marginLeft:"30px",marginTop:"10px"}}><span>JioMart Wallet</span><br></br></div>
     </div>
     <div className='help'>
        <h3 style={{marginLeft:"30px"}}>Help & Support</h3>
              <div style={{marginLeft:"40px",marginTop:"10px"}}><span>About Us</span><br></br></div>
           <div style={{marginLeft:"40px",marginTop:"10px"}}> <span>FAQ</span><br></br></div>
           <div style={{marginLeft:"40px",marginTop:"10px"}}><span> Terms & Conditions</span><br></br></div>
           <div style={{marginLeft:"40px",marginTop:"10px"}}><span>E-waste Policy</span><br></br></div>
             <div style={{marginLeft:"40px",marginTop:"10px"}}><span>Cancellation & Return</span><br></br></div>
              <div style={{marginLeft:"40px",marginTop:"10px"}}> <span>Policy</span><br></br></div>
           <div style={{marginLeft:"40px",marginTop:"10px"}}><span>Shipping & Delivery</span><br></br></div>
           <div style={{marginLeft:"40px",marginTop:"10px"}}><span>Policy</span><br></br></div>
             <div style={{marginLeft:"40px",marginTop:"10px"}}><span>AC Installation by resQ</span><br></br></div>
     </div>
     <div className='contact'>
        <center><h3 style={{marginLeft:"-205px",fontSize:"23px"}}>Contact Us</h3></center>
        <div className='whatsapp'>Contact Us
WhatsApp us:<b> 7000370003</b><br></br>
Call us: <b>1800 8901222</b><br></br>
8:00 AM to 8:00 PM, 365 days</div>
        <div className='discription'>
         Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the website.
        </div>
        
        <div className='download'>
            <center><div style={{width:"290px",marginLeft:"-46px",fontSize:"20px"}}><h3>Download the app</h3></div></center>
            <button className='app'>Google Play</button>
             <button className='appstore'>App Store</button>
        </div>
     </div>
    </div>
  )
}

export default Footer