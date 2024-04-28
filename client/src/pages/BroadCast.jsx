import React from "react";
import Message from "../components/customerviewComponent/_Message";
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import Footer from "../components/customerviewComponent/Footer";
import Fotterfinal from "../components/landingpageComponent/footer";

const dummydata = [
  "festival discounts for sellers",
  "New Broadcast 123",
  "hello",
  "alert ! new services added",
];

export default () => {
  let iter = -1;
  const cardArray = dummydata.map((msg) => {
    iter += 1;
    return <Message key={iter} message={msg} />;
  });

  return (
    <>
      <NavPostLog />
      <br />
      {cardArray}
      <Fotterfinal />
    </>
  );
};
