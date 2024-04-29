import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import SellerInfoDisplay from "../pages/SellerInfoDisplay";
import Customerrequest from "../pages/Customerrequest";
import CustomerHistory from "../pages/CustomerHistory";
// import RegisterCustomer from "./cust_reg_detail";
// import RegisterSeller from "./sell_reg_detail";

export default [
    { path: "/about", element: <About /> },
    { path: "/contact", element: <ContactUs /> },
    {path : "/customerView/display", element: <SellerInfoDisplay />},
    { path: "/customerrequest", element: <Customerrequest /> },
    { path: "/history", element: <CustomerHistory /> },
    // {path :"/consumerlogin/welcome" , element:<RegisterCustomer/>},
    // {path :"seller/register/welcome" , element:<RegisterSeller/>}    
]
