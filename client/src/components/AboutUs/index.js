import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () =>
  <div className="row">
    <div className="col-md-3">
    <Link to={'/'}>
            <button className="btn btn-primary m-2" type="button">Go Back</button>
          </Link>
    </div>
      <div className="col-md-6">
          <h1>About Us</h1>
          <iframe 
          title="about us"
          src="https://docs.google.com/presentation/d/e/2PACX-1vSH9ZIad69iZwcGWEXKQlXh5wMwK7AS0UpxFvJnNRnqce4dJWJrU4LOmVSGcWB4n4Fa3bXo-yUxkWt_/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
          </iframe>

      </div> 
    <div className="col-md-3"> 
    </div>
  </div>    

export default AboutUsPage;