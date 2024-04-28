import CustomerView from "../pages/CustomerView";
import CustomerProfile from "../pages/CustomerProfile";
import BroadCast from "../pages/BroadCast";

// import Footerland from "./landingpage/footer";

export default [
  { path: "/customerview", element: <CustomerView /> },
  { path: "/profile", element: <CustomerProfile /> },
  { path: "/broadcast", element: <BroadCast /> },
];
