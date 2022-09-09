import { Routes,Route,Navigate } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import NotfoundScreen from './Screens/NotfoundScreen/NotFoundScreen'
import ContactAdminScreen from  './Screens/ContactAdminScreen'
import PostScreen from "./Screens/PostScreen/PostScreen";
import UpdateScreen from "./Screens/UpdateScreen.js/UpdateScreen";
import SinglePostScreen from "./Screens/SinglePostScreen";
import CreatePostScreen from "./Screens/CreatePostScreen";




const Router = ()=>{
    return (
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/register" element={<RegisterScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/contact" element={<ContactAdminScreen/>}/>
            <Route path="/posts" element={<PostScreen/>}/>
            <Route path="/createposts" element={<CreatePostScreen/>}/>
            <Route path="/notfound" element={<NotfoundScreen/>}/>
            <Route path="/posts/:id/edit" element={<UpdateScreen/>}/>
            <Route path="/posts/:id" element={<SinglePostScreen/>}/>
            <Route path="*" element={<Navigate to='/notfound'/>}/>
        </Routes>
    )
}

export default Router