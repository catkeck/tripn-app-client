import React from 'react';

const Contact = () => {

  return (
    <div id="login-box">
      <h1>Contact Us</h1>
      <form action="mailto:caitlin.keck@gmail.com" method="post" enctype="text/plain">
        <input type="text" name="username" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="comment" placeholder="comment" />
        <input type="submit" value="Send"/>
        <input type="reset" value="Reset"/>
      </form>
    </div>
  )
}

export default Contact