import AdminLogin from "../pages/AdminLogin";
import AdminRegister from "../pages/AdminRegister";
import AdminLandingPage from "../pages/AdminLandingPage";  //problem
import AdminBroadcast from "../pages/AdminBroadcast";   //problem
import AdminCustomerList from "../pages/AdminCustomerList";
import AdminSellerList from "../pages/AdminSellerList";
import AdminRequests from "../pages/AdminRequests";
import AdminHistory from "../pages/AdminHistory";
import AdminProfile from "../pages/AdminProfile";
import AdminTransaction from "../pages/AdminTransaction";

// import Nav from './nav';
// import Photos from './photos';

export default [
    { path: "/adminLogin", element: <AdminLogin /> },
    { path: "/adminRegister", element: <AdminRegister /> },
    { path: "/adminland", element: <AdminLandingPage /> },
    { path: "/adminbroadcast", element: <AdminBroadcast /> },
    { path: "/admin/customerlist", element: <AdminCustomerList /> },
    { path: "/admin/sellerlist", element: <AdminSellerList /> },
    { path: "/admin/history", element: <AdminHistory /> },
    { path: "/admin/transactions", element: <AdminTransaction /> },
    { path: "/requests", element: <AdminRequests /> },
    { path: "/admin/profile", element: <AdminProfile /> }
    // { path: "/nav", element: <Nav /> },
    // { path: "/photos", element: <Photos /> },
];