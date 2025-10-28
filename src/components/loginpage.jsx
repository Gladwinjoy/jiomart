import React from 'react'

function Loginpage() {
  return (
    <div>
        <div className='box'>
             <div className='heading'><center>Login</center></div>
            <div className='subheading'><center>Please enter your details to Login</center></div>
             <div className='formm'>
                <form onSubmit="C:\Users\gladw\OneDrive\Desktop\Techwingsys\frontend\Reactproject\app\src\components\header.jsx" method = "post">
                    <label style={{fontSize:"15px",fontFamily:"cursive",fontWeight:"bold"}}>Name</label><br></br>
                    <input type = "text" id = "name" style={{width:"220px",height:"25px",borderRadius:"5px",boxShadow:"1px",marginTop:"5px"}}></input><br></br>
                     <label style={{fontSize:"15px",fontFamily:"cursive",fontWeight:"bold"}}>Email Address</label><br></br>
                    <input type = "text" id = "email" style={{width:"220px",height:"25px",borderRadius:"5px",boxShadow:"1px",marginTop:"5px"}}></input><br></br>
                     <label style={{fontSize:"15px",fontFamily:"cursive",fontWeight:"bold"}}>Password</label><br></br>
                    <input type = "text" id = "password" style={{width:"220px",height:"25px",borderRadius:"5px",boxShadow:"1px",marginTop:"5px"}}></input><br></br>
                    <input type = "submit" value = "Sign in" style={{marginTop:"30px",marginLeft:"90px",height:"25px",borderRadius:"5px"}}></input>
                    <button style={{marginLeft:"-20px",height:"50px",marginTop:"30px",width:"300px"}}><div className='googlelogo'></div>
                    <div className='gamil'><h4 style={{marginLeft:"55px",marginTop:"-28px"}}>Continue with Google</h4></div></button>
                </form>
        </div>
    </div>
</div>

  )
}

export default Loginpage