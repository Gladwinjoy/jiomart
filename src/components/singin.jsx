import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "./header";
import './header.css'

function Asingin() {
  const [phone,setPhone] = useState("")
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(phone.trim() === ""){
    alert(`Pleace enter your number`);
    }
  else{
       alert(`Sigin successfully`);
  

    // console.log('signin:',{ phone });
    navigate("/header");
  }
}
  return (
    <div> 
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='head'><center>Almost there!</center></div>
            <div className='subhead'><center>Simply sign in to place your order</center></div>
            <div className='form'>
                    <label style={{marginLeft:"-25px",fontWeight:"bold"}}>Mobile number</label><br></br>
                    <input type = "number" id = "phone" value={phone} className="custominput"placeholder='+91' 
                     onChange={(e) => setPhone(e.target.value)} />
                    <br></br>
                   <button type='submit' className='btn'>Sign In</button><br></br>
                   </div>
                    </form>
                    <p style={{marginLeft:"20px",fontSize:"13px",width:"350px",marginTop:"-20px"}}>By signing in,you agree to ur Terms and Conditions of Use and privacy policy</p>
            </div>
           <div className="phonesigin">
            <form onSubmit={handleSubmit}>
            <div className="close"></div>
            <div className="almost">Almost there!</div>
            <div className="simplysigin">Simply sign in place your order</div>
            <div className="pform">
            <label style={{marginLeft:"2px"}}>Mobile Number</label><br></br>
            <input type="number" style={{width:"380px",height:"35px",}} placeholder="+91 - " className="inputphone"
            onChange={(e) => setPhone(e.target.value)}></input>
            </div>
            <div className="siginbtn"><button type="submit" className="psiginbtn">Sign In</button></div>
            </form>
            <div className="bysigin">By signing in,you agree to ur Terms and Conditions of Use and privacy policy</div>
           </div>
        </div>
  )
}

export default Asingin