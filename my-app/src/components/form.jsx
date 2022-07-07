import React from "react";

function Pform(){
    return  <section class="section coming-soon" id="section3">
    <div class="section-heading">
      <h2>Join our Enthusiastic Team</h2>
    </div>
    <div class="continer centerIt">
      <div>
        <h4 >Wanna be a part of it?<em style={{color:"#1979d6"}}> Apply when application is open</em></h4>
      </div>
    </div>
      <div class="container">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="right-content">
            <div class="top-content">
              <h6>Register and be a part of<em > the journey</em> where you learn leadership & other skills</h6>
            </div>
            <form action="https://script.google.com/macros/s/AKfycbwCYTBtQBYHfG8u0Mq1sUyl5M6mBoM9_XhmVNMRlATRtt6KpYmf844UXYY1M7T2KqrZ/exec" method="POST">
              <div class="row">
                <div class="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                  <fieldset>
                    <input name="Name" type="text" class="form-control" id="name" placeholder="Your Name" required=""/>
                  </fieldset>
                  <fieldset>
                    <input name="Email" type="text" class="form-control" id="email" placeholder="Your Email" required=""/>
                  </fieldset>
                  <fieldset>
                    <input name="Phone Number" type="text" class="form-control" id="phone-number" placeholder="Your Phone Number"
                      required=""/>
                  </fieldset>
                </div>
                <div class="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                  <fieldset>
                    <select id="choice1" name="Department Choice 1" >
                      <option value="choice_first"> Department Choice First</option>
                      <option value="Human Resource Team" >Human Resource Team</option>
                      <option value="Creative Team" >Creative Team</option>
                      <option value="Event Management Team">Event Management Team</option>
                      <option value="Software Team" >Software Team</option>
                      <option value="Hardware Team" >Hardware Team</option>
                      <option value="Social Media and Marketing Team" >Social Media and Marketing Team</option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <select id="choice2" name="Department Choice 2">
                      <option value="choice_second"  >Department Choice Second</option>
                      <option value="Human Resource Team"  >Human Resource Team</option>
                      <option value="Creative Team"  >Creative Team</option>
                      <option value="Event Management Team"  >Event Management Team</option>
                      <option value="Software Team"  >Software Team</option>
                      <option value="Hardware Team"  >Hardware Team</option>
                      <option value="Social Media and Marketing Team"  >Social Media and Marketing Team</option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <select id="choice3" name="Department Choice 3"
                     >
                      <option value=""  >Department Choice Third</option>
                      <option value="Human Resource Team"  >Human Resource Team</option>
                      <option value="Creative Team"  >Creative Team</option>
                      <option value="Event Management Team"  >Event Management Team</option>
                      <option value="Software Team"  >Software Team</option>
                      <option value="Hardware Team"  >Hardware Team</option>
                      <option value="Social Media and Marketing Team"  >Social Media and Marketing Team</option>
                    </select>
                  </fieldset>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                  <fieldset>
                    <input name="College" type="text" class="form-control" id="college" placeholder="College Name" required=""/>
                  </fieldset>
                </div>
                <div class="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                  <fieldset>
                    <select id="year" name="Year"
                     required="">
                      <option value=""  >Choose your Year</option>
          <option value="1st Year"  >1st Year</option>
                      <option value="2nd year"  >2nd Year</option>
            
                    </select>
                  </fieldset>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                  <fieldset>
                    <input name="Why Join Us?" type="text" class="form-control" id="why-join-us" placeholder="Why Join Us?" required=""/>
                </fieldset>
                </div>
                <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                  <fieldset class = "form__submit__contents">
              <strong > Application for the year 2022-2023 has been closed</strong>
                           <button type="submit" id="form-submit" class="button">SUBMIT</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div> </div></section>

}

export default Pform;