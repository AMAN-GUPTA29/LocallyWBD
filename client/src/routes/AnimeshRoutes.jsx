import CustomerView from "../pages/CustomerView";
import CustomerProfile from "../pages/CustomerProfile";
import BroadCast from "../pages/BroadCast";
import CustomerRatingSeller from "../pages/CustomerRatingSeller";

// import Footerland from "./landingpage/footer";

export default [
  { path: "/customerview", element: <CustomerView /> },
  { path: "/profile", element: <CustomerProfile /> },
  { path: "/broadcast", element: <BroadCast /> },
  { path: "/give/review", element: <CustomerRatingSeller /> },
];
