import React from 'react';
import FeaturesCard from './featuresCard';
import feature from './featuresarray';


function CreateCard(feature){
return <FeaturesCard count={feature.count}  img={feature.img} title={feature.title} content={feature.content}
/>
}


function Features(){
return  <section className="section why-us" id="section2">
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="section-heading">
        <h2>Who we are and what we do</h2>
      </div>
    </div>
    <div className="col-md-12">
      <div id='tabs'>
        <ul>
          <li><a href='#tabs-1'>Non profit organisation</a></li>
          <li><a href='#tabs-2'>Technology Trainer</a></li>
          <li><a href='#tabs-3'>Quality Learning platform</a></li>
   
        </ul>
        {feature.map(CreateCard)}
        </div>

    </div>
  </div>
</div>

</section>

}

export default Features;