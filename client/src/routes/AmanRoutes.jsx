import LandingPage from "../pages/LandingPage";
import AuthenticationContainer from "../pages/consumerlogin";

let AmanRoutes = [
    { path: "/", element: <LandingPage/> },
    { path: "/consumerlogin", element: <AuthenticationContainer/>}
]

export default AmanRoutes; 