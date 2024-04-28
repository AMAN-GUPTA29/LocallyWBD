import React from "react";
import avatar from '../customerRequestComponent/images/avatar.jpg'
export default ({ name, tag, description }) => {
    return (
        <div>
        <section id="about" className="section mt-3">
            <div className="container mt-5">
                <div className="row text-center text-md-left">
                    <div className="col-md-3">
                        <img src={avatar} alt="" className="img-thumbnail mb-4" />
                    </div>
                    <div className="pl-md-4 col-md-9">
                        <h6 className="title">{name}</h6>
                        <p className="subtitle">{tag}</p>
                        <p>{description}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium
                            qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non.
                            Laborum repellendus consequatur ullam voluptatum asperiores.
                        </p>
                        <button className="btn btn-primary rounded mt-3">Check Reviews</button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}