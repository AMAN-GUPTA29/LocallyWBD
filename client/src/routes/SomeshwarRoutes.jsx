import AdminLogin from "../pages/AdminLogin";
import AdminRegister from "../pages/AdminRegister";
import AdminLandingPage from "../pages/AdminLandingPage";  //problem
import AdminBroadcast from "../pages/AdminBroadcast";   //problem
import AdminCustomerList from "../pages/AdminCustomerList";
import AdminSellerList from "../pages/AdminSellerList";
import AdminRequests from "../pages/AdminRequests";

// import Nav from './nav';
// import Photos from './photos';

export default [
    { path: "/adminLogin", element: <AdminLogin /> },
    { path: "/adminRegister", element: <AdminRegister /> },
    { path: "/adminland", element: <AdminLandingPage /> },
    { path: "/adminbroadcast", element: <AdminBroadcast /> },
    { path: "/admin/customerlist", element: <AdminCustomerList /> },
    { path: "/admin/sellerlist", element: <AdminSellerList /> },
    { path: "/requests", element: <AdminRequests /> }
    // { path: "/nav", element: <Nav /> },
    // { path: "/photos", element: <Photos /> },
];