// import SellerHome from './SellerHome';
import SellerHome from "../pages/Sellerhome"
// import Navbar from './UI/Navbar';
import SellerMyrequests from "../pages/SellerMyrequests"
import SellerBroadcast from "../pages/SellerBroadCast"
import SellerChat from "../pages/SellerChat"
import SellerLoginForm from "../pages/SellerLoginForm"
import SellerRegistrationForm from "../pages/SellerRegistrationForm"

export default [
    { path: "/seller/login", element: <SellerLoginForm /> },
    { path: "/seller/register", element: <SellerRegistrationForm /> },
    { path: "/sellerview", element: <SellerHome /> },
    { path: "/seller/chat", element: <SellerChat /> },
    { path: "/seller/request", element: <SellerMyrequests /> },
    { path: "/seller/broadcast", element: <SellerBroadcast /> },
]