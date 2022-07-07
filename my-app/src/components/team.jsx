import React from "react";
import TeamCard from "./teamcard";
import teamarr from "./teamarr"

function executiveCard(executive){
        return <TeamCard  img={executive.img} name={executive.name} post={executive.post} year={executive.year} campus={executive.campus} edu={executive.edu} />
}


function Team(){

 


return <section className="section contact" data-section="section6"><div>
<div style={{textAlign: "center"}} id="direct_contact_section" className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        <h4>Reach out directly to our I.O.E Pulchowk Campus Leads</h4>
         <div className="content3">
            <p className= "heading">The Executive Team</p>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
{teamarr.map(executiveCard)}
</div>

            </div></div>
            </div></section>
}
export default Team;