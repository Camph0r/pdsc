import React from 'react';


function FeaturesCard(props) {
    return <section className='tabs-content'>
        <article id={props.count}>
            <div className="row">
                <div className="col-md-6">
    <img src={props.img} alt="Features" />
                </div>
                <div className="col-md-6">
                    <h4>{props.title}</h4>
                    <p>{props.content} </p>
                </div>
            </div>
        </article>
       
    </section>
    

}

export default FeaturesCard;