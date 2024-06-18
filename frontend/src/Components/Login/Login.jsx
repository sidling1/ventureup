import React, { useState } from "react";
import color from '../../Styles/colour.module.css';
import fonts from '../../Styles/fonts.module.css';
import styles from './login.module.css';
import {Link, useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginAccount = async()=>{
    const SERVER_URI = process.env.REACT_APP_SERVER_URI;
    const data = {
      email: email,
      password: password
    }

    const res = await fetch(`${SERVER_URI}/login`,{
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    })

    console.log(res)
    if(res.status === 200){
      console.log("Account Successfully Logged In, go to /home page")
      console.log()
      navigate('/home')
    }else if(res.status === 400){
      console.log("Error Occured, Account Not Created.")
    }

  }

  return (
    <>
      <div className={`${color.white_b} ${styles.container}`}>
        <div className={`${fonts.heading}`}>Sign In</div>
        <div className={`${color.grey_f}`}>New to ventureup ? <Link to="/signup" className={`${color.blue_f}`}> Create an Account </Link></div>
        
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
          onClick={handleLoginAccount}
          >Sign In</button>
        </div>
        <div className={`${color.grey_f}`} style={{fontSize: "small"}}><a href="#" className={`${color.blue_f}`}>Forgot your Password ?</a></div>
        <hr className={`${styles.hline}`}/>
        <div className={`${color.grey_f}`} style={{fontSize: "small"}}>or Sign in using :</div>
        {/* Google Sign In options available here */}
      </div>
    </>
  );
}

export default Login;