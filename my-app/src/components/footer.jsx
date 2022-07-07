import React from "react";
var getYear=  new Date().getFullYear();

function Footer(){
    return <footer>
    <div className="container">
      
    
      <ul className="social-menu p-3">
        <li><a href="https://facebook.com/pdsc.nepal"><i className="fab fa-facebook"></i></a></li>
        <li><a href="https://github.com/pdscorg"><i className="fab fa-github"></i></a></li>
        <li><a href="https://twitter.com/NepalPdsc"><i className="fab fa-twitter"></i></a></li>
        <li><a href="https://instagram.com/pdsc.nepal"><i className="fab fa-instagram"></i> </a></li>
        <li><a href="https://www.youtube.com/channel/UCtBAL5IGsN6Hyk_deE2BQOw"><i className="fab fa-youtube"></i> </a></li>
    </ul>
      
      <div className="row">
        <div className="col-md-12">
          <p><i className="fa fa-copyright"></i> {getYear}-All rights reserved | PDSC Nepal  
          
          </p>
        </div>
      </div>
    </div>
  </footer>
}


export default Footer;