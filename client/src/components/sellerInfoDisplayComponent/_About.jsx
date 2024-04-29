import React from "react";
import avatar from "../customerRequestComponent/images/avatar.jpg";

export default ({ name, tag, description }) => {
    return (
        <div>
            <section id="about" className="section mt-3">
                <div className="container mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        {/* Image */}
                        <div className="flex justify-center mb-4 md:mb-0">
                            <div className="rounded-full overflow-hidden w-40 h-40 md:w-56 md:h-56">
                                <img src={avatar} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        {/* Text */}
                        <div className="text-center md:text-left md:pl-8 mb-4 md:mb-0"> {/* Decreased bottom margin */}
                            <h1 className="text-xl font-bold mb-2">{name}</h1>
                            <h4 className="text-gray-600 mb-2">{tag}</h4>
                            <p className="text-gray-800 mb-2">{description}</p> {/* Decreased bottom margin */}
                            <p className="text-gray-800 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p> {/* Decreased bottom margin */}
                            <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Check Reviews</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
