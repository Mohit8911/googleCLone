import React from 'react'
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from './search';
import "./home.css";

const Home = () => {
    return (
      <div className="home">
        <div className="header">
          <div className="header-left">
            <p>About</p>
            <p>Store</p>
          </div>

          <div className="header-right">
            <p>Gmail</p>
            <p>Images</p>
            <AppsIcon />
            <AccountCircleIcon />
          </div>
        </div>
        <div className="body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google-icon" />
                <div className="input">
                    <Search/>
                </div>
        </div>
      </div>
    );
}
 
export default Home;