import React from 'react';
import './style2.css';
 
function Dashboard(props) {
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }
 
  return (
    <div className="bar">
      <img src="https://d2h53m62qt2m27.cloudfront.net/collection_pages/VB/Wanderlust-Hero.jpg" no-repeat />
      <div className="block">
      Welcome User!<br /><br />
          <container>
            <input type="button" onClick={handleLogout} value="Logout" />
          </container>
    </div>
    </div>
  );
}
 
export default Dashboard;
