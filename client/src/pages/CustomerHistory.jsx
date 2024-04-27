import React from "react";
import '../components/customerRequestComponent/css/history.css'
import Footer from "../components/customerviewComponent/Footer";
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import _Historybody from "../components/historyComponent/_Historybody";

const dummydata =['rakesh','john', 'aman','akansh']
export default () => {
    let i = -1
    const cardArray = dummydata.map((name) => { 
        i += 1
        console.log(name);
        return <_Historybody key={i} message={name} />
    });

    return(
        <div>
            <NavPostLog />
            <header className="headerr">
            <h2 className="mx-5 text-white h_2">Your History</h2>
        </header>

        <h1>Old Requests</h1>
            <br />
            {cardArray}
            <Footer />
        </div>
    )
}