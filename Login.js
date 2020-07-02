import React, { useState } from 'react';
import './style1.css';
 
 function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

 
  
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/Home');
  }
  return (
    <div className="flex">
      <img src="https://d2h53m62qt2m27.cloudfront.net/collection_pages/VB/Wanderlust-Hero.jpg" no-repeat />
      <div className="content">
      <div className="log">Login Form</div><br/><br/>
      <div>
        <label for='username' >Username</label><br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
        <label for='password'>password</label><br />
        <input type="password" {...password} autoComplete="new-password" />
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>  
    </div>
  );
  }
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;
