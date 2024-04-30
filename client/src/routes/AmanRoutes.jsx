import LandingPage from "../pages/LandingPage";
import AuthenticationContainer from "../pages/consumerlogin";
import ConsumerChat from "../pages/ConsumerChat";

let AmanRoutes = [
    { path: "/", element: <LandingPage/> },
    { path: "/consumerlogin", element: <AuthenticationContainer/>},
    { path: "/customer/chat/:_id", element: <ConsumerChat/>},

]

export default AmanRoutes; 