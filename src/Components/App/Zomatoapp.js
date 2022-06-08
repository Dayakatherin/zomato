import React from 'react'
import './Zomatoapp.css'
function Zomatoapp() {
  return (
<div>
    < div className="zomatoapp">

         <div className="left-card">
           <img src="mob.jpg"></img>
         </div>
         <div className="right-card">
             <h1>Get the Zomato app</h1>
             <br></br>
             <p>We will send you a link, open it on your phone to download<br></br>the app</p><br></br>
             <input type="radio" id="html" name="fav_language" value="HTML"/>
              <label for="html">Email</label>
              <input type="radio" id="css" name="fav_language" value="CSS"/>
              <label for="css">Phone</label><br></br>
            <br></br>
            <button class="button button1">Email</button>
            <button class="button button2">Share app link</button>
            <br></br>
            <p>Download app form</p>
            <br></br>
            <img style={{width:"100px"}}src="googleplay.jpeg"/>   <img  style={{width:"100px"}}src="appstore.jpeg"/>
         </div>
    </div>
</div>
  )
}

export default Zomatoapp