import React from 'react';
import '../styles/thankslinks.css';

export default function ThanksLinks() {
  return (
    <div className="flex-container">
      <div className="flex-child half">
                  <h1>Thanks</h1>
                  <p>Enfo is a Nordic IT service company enabling its customers’
                      data-driven business transformation. We are over 900 niched experts
                      working for a more intelligent world, with technology empowering
                      people, businesses and societies.</p>
      </div>
      <div className="flex-child half">
          <div>
              <h3>Links</h3>
              <p><a href="#">Contact us</a></p>
              <p><a href="#">Work at Enfo</a></p>
              <p><a href="#">What we do</a></p>
          </div>
          <div>
              <h3>Social</h3>
              <a href="#"><img src="https://enfo-test-resources.s3.eu-west-2.amazonaws.com/images/icons_facebook.svg" alt="icon facebook"/></a>
              <a href="#"><img src="https://enfo-test-resources.s3.eu-west-2.amazonaws.com/images/icons_twitter.svg" alt="icon twitter"/></a>
              <a href="#"><img src="https://enfo-test-resources.s3.eu-west-2.amazonaws.com/images/icons_linkedin.svg" alt="icon linkedin"/></a>
          </div>
      </div>
  </div>
  )
}
