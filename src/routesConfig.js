import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Siderbar from "./components/siderbar/Siderbar";
import Video from "./components/video/Video";


const routesConfig = [
    {
        path:"/",
        component:Home,
        exact:true
    }, 
    {
        path:"/user",
        component:User,
        exact:true
    }, 
    {
        path:"/siderbar",
        component:Siderbar,
        exact:true
    },
    {
        path:"/video",
        component:Video,
        exact:true
    }
]

export default routesConfig