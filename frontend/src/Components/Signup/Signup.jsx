import React, { useState } from "react";
import color from '../../Styles/colour.module.css';
import fonts from '../../Styles/fonts.module.css';
import styles from './signup.module.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handleCreateAccount = async()=>{
    const SERVER_URI = process.env.REACT_APP_SERVER_URI;
    const data = {
      email: email,
      password: password
    }

    const res = await fetch(`${SERVER_URI}/register`,{
      method:"POST",
      mode:"cors",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(data),
    })

    console.log(res)

  }

  return (
    <>
      <div className={`${color.white_b} ${styles.container}`}>
        <div className={`${fonts.heading}`}>Create Account</div>
        <div className={`${color.grey_f}`}>Have an Account ? <a href="#" className={`${color.blue_f}`}> Sign In </a></div>
        
        <div style={{width: "80%"}}>
          <div className={`${styles.form_element}`}>
            <label for="email" className={`${color.grey_f} ${fonts.form_label}`}>Email</label>
            <input
             type="text" 
             placeholder="Enter Email Address"
              id="email"
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}}
              ></input>
          </div>
        
          <div className={`${styles.form_element}`}>
            <label for="password" className={`${color.grey_f} ${fonts.form_label}`}>Password</label>
            <input type="text"
             placeholder="Create Password"
              id="password"
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}}
              ></input>
          </div>

          <button 
          type="submit" 
          className={`${styles.button} ${color.blue_b}`}
          onClick={handleCreateAccount}
          >Create Account</button>
        </div>
        <div className={`${color.grey_f}`} style={{fontSize: "small"}}>By Creating account, you agree to our <a href="#" className={`${color.blue_f}`}>Terms of Service</a></div>
        <hr className={`${styles.hline}`}/>
        <div className={`${color.grey_f}`} style={{fontSize: "small"}}>or Create an account using :</div>
        {/* Google Sign In options available here */}
      </div>
    </>
  );
}

export default Signup;