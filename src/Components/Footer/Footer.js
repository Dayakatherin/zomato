import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>

            <footer>
        <div className='post'>
        <h1>Zomato</h1>
        <button className='india'><img src="india.png"/> <h5>India <i id="caretright10" class="fa fa-angle-down" aria-hidden="true"></i></h5></button>
        <button className='english'>  <i id="caretright11" class="fa fa-globe" aria-hidden="true"></i><h5>English <i id="caretright12" class="fa fa-angle-down" aria-hidden="true"></i></h5></button>
        </div>
          
        

      <div class="footer__row__2">
        <div class="column__1">
            <h4 style={{fontSize:"11px"}}>ABOUT ZOMATO</h4>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div class="column__2">
        <h4 style={{fontSize:"11px"}}>ZOMAVERSE</h4>
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div class="column__3">
        <h4 style={{fontSize:"11px"}}>FOR RESTAURANTS</h4>
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>

            <br></br>
          <h4 style={{fontSize:"11px"}}>FOR ENTERPRISES</h4>
          <p>Account</p>
        </div>
        <div class="column__4">
        <h4 style={{fontSize:"11px"}}>LEARN MORE</h4>
          <p>Privacy</p>
          <p>Security</p>
          <p>Terms</p>
          <p>Sitemap</p>
        </div>

        <div class="column__4">
        <h4 style={{fontSize:"11px"}}>SOCIAL LINKS</h4>
        <img style={{width:"100px"}}src="googleplay.jpeg"/>  <br></br>
        <img  style={{width:"100px"}}src="appstore.jpeg"/>
        </div>
      </div>
<hr></hr>
      <div className="paragraph">
      <p style={{fontSize:"10px"}}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-<br></br>2022 © Zomato™ Ltd. All rights reserved.</p>
      </div>
     
    </footer>
    </div>
  )
}

export default Footer