import React from "react";
import pdsc from "./video/pdsc_intro.mp4";


function Hero() {
  return <div id="section1"><section className="section main-banner" id="top" >
    <video autoPlay muted loop id="bg-video" >
      <source src={pdsc} type="video/mp4" />
    </video>
    <div className="video-overlay header-text" >
      <div className="caption">

        <h2><em>Plan, Design<br />Solve & Create</em></h2>
        <div className="main-button">
          <div className="scroll-to-section"><a href="#section2">Discover more</a><br /><a href="#section3">Apply Now</a></div>
        </div>
      </div>
    </div>
  </section>

    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="features-post">
              <div className="features-content">
                <div className="content-show">
                  <h4><i className="fa fa-pencil"></i>All Courses</h4>
                </div>
                <div className="content-hide">
                  <p>As we assure plan , design, solve and create in our name. We are offering various courses, bootcamps and workshops free</p>
                  <p className="hidden-sm">We just not help peoples on Python, JavaScript, Django, Data Science, Machine Learning, Designing, but also on other related topics..</p>
                  <div className="scroll-to-section"><a href="#section2">More Info.</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="features-post second-features">
              <div className="features-content">
                <div className="content-show">
                  <h4><i className="fa fa-graduation-cap"></i>tutorials</h4>
                </div>
                <div className="content-hide">
                  <p>Soon we are going to post out tutorials on different topics for now you can checkout our youtube tutorials</p>
                  <p className="hidden-sm">we will be publishing and making tutorails in every common factors as possible.</p>
                  <div className="scroll-to-section"><a href="#section5">Details</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="features-post third-features">
              <div className="features-content">
                <div className="content-show">
                  <h4><i className="fa fa-book"></i>Motivations</h4>
                </div>
                <div className="content-hide">
                  <p>Success is the sum of small efforts repeated. Try using your effort..we are here to support you.</p>
                  <p className="hidden-sm">Stay motivated, stay Learning. We are being expert soon</p>
                  <div className="scroll-to-section"><a href="#section5">Read More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

}
export default Hero;
