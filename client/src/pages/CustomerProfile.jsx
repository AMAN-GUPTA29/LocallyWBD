import React from "react";
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import Footer from "../components/customerviewComponent/Footer";
import ProfileCard from "../components/profileComponent/_ProfileDataCard";
import TransactionCard from "../components/profileComponent/_TransactionDataCard";
import Fotterfinal from "../components/landingpageComponent/footer";

const dummyData = {
  name: "Consumer1",
  address: "IIIT Sricity",
  pincode: 517617,
};

export default () => {
  return (
    <div>
      <NavPostLog />
      <ProfileCard data={dummyData} />
      <TransactionCard />
      <Fotterfinal />
    </div>
  );
};
