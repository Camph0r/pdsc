import React from "react";
function Contact(){

    return   <section class="section contact" id="section6">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Let’s Keep In Touch</h2>
          </div>
        </div>
        <div class="col-md-6">
                            
<form action="https://formspree.io/f/mjvlkjbe" method="POST">
            <div class="row">
              <div class="col-md-6">
                  <fieldset>
                    <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required=""/>
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input name="email" type="text" class="form-control" id="email" placeholder="Your Email" required=""/>
                  </fieldset>
                </div>
		<div class="col-md-6">
                  <fieldset>
                    <input name="number" type="text" class="form-control" id="number" placeholder="Phone Number" required=""/>
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input name="join" type="text" class="form-control" id="join" placeholder="Why join us?" required=""/>
                  </fieldset>
                </div>
              <div class="col-md-12">
                <fieldset>
                  <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
                </fieldset>
              </div>
              <div class="col-md-12">
                <fieldset>
                  <button type="submit" id="form-submit" class="button">Send Message Now</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <div id="map">
           <iframe title= "Map" src="https://maps.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7066.329710702196!2d85.31832183796249!3d27.681299219534612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x951b3c8ac733e3ec!2sIOE%2C%20Pulchowk%20Campus!5e0!3m2!1sen!2snp!4v1628866973382!5m2!1sen!2snp" width="100%" height="422px" frameborder="0" style={{border:0}} allowfullscreen/>
	   </div>
        </div></div></div></section>
}

export default Contact;