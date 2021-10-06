import React from 'react';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="container">
      <img src="https://enfo-test-resources.s3.eu-west-2.amazonaws.com/images/logo.svg" alt="Enfo logo"/>
      <ul>
          <li><a href="#">Company</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Insights</a></li>
          <li><a href="#">Cases</a></li>
          <li><a href="#">News and Events</a></li>
          <li><a href="#">Investors</a></li>
      </ul>
      <div class="lang">en<img src="https://enfo-test-resources.s3.eu-west-2.amazonaws.com/images/triangle.svg" alt="icon triangle"/></div>
      <div class="search"><img src="https://enfo-test-resources.s3.eu-west-2.amazonaws.com/images/icons_search.svg" alt="icon search"/></div>
      <div class="menu">Menu<img src="https://enfo-test-resources.s3.eu-west-2.amazonaws.com/images/icons_hamburger.svg" alt="icon menu"/></div>
    </header>
  )
}
