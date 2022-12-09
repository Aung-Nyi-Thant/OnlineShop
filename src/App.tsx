import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import './App.css';
import ToDoUI from "./features/todos/ToDoUI";
import SignPage from "./pages/SignPage"
import DownloadPage from "./pages/DownloadPage"
import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Login_page_ from './pages/Login_Page';
import {Personal_page} from "./pages/Personal_page";
import FoodShop from "./pages/Shop_page"
import { Login } from './features/Login/LoginApi';
import FoodDetailsPage from './pages/FoodDetail';
import ChoseFood from './pages/ChoceFood';
import BuyTheFood from './pages/FoodBuyPage';
import BuyingTheFood from './pages/BuyingPage';
import GoodBye from './pages/GoodByePage';
import adminFoodStore from './pages/adminFoodstore';
import AdmStore from './pages/adminFoodstore';
import Message from './pages/MessagePage';
import MessageListPage from './pages/MessagePage';
import Message_detail from './pages/Message_detail';
import Shop_Page from './pages/shopPage_1'
import Comtand from './pages/Comtand';
import SendMessage from './pages/SendMessage';
import ForgotPage from './pages/ForgotPage';
import AccountComfig from './pages/accountcomfig';
import AccountMessage from './pages/SendMessageAccount';
import eaditAccount from './pages/eaditAccount';
import EaditAcc from './pages/eaditAccount';
import Reaload from './pages/reload';
import Calculator from './pages/Calculator';
import newPage from './pages/NewPage';
import NewPage from './pages/NewPage';

function App() {
  return (
    <div className="App">
        
     {/* <Counter />*/}
     <Router>

         <Routes>
             <Route path="/:Username/home" element={<HomePage/>}>

             </Route>
             <Route path="/:Username/message/comtand" element={<Comtand/>}>
             </Route>
             <Route path="/forgot" element={<ForgotPage/>}>

             </Route>
             <Route path="/forgot/:Id" element={<AccountComfig/>}>
             </Route>
             <Route path="/New" element={<NewPage/>}>

             </Route>
             <Route path="/forgot/:Id/message" element={<AccountMessage/>}>

             </Route>
             <Route path="/:D/:R/:Username/reaload" element={<Reaload/>}>

             </Route>
             <Route path="/forgot/:Id/message/eadit" element={<EaditAcc/>}>

             </Route>
             <Route path="/:Username/message/comtand/sendMessage/:ID_" element={<SendMessage/>}>

             </Route>
             <Route path="/:Username/movie-list" element={<MovieListPage/>}>

             </Route>
             <Route path="/:Username/Profile" element={<Personal_page/>}>

             </Route>
             <Route path="/:Username/shop/:Foodid" element={<ChoseFood/>}>
             </Route>
             <Route path="/:Username/shop/:Foodid/buy/:count" element={<BuyTheFood/>}>

             </Route>
             <Route path="/:Username/shop/:Foodid/buying/:count/:cost" element={<BuyingTheFood/>}>

             </Route>
             <Route path="/:Username/shop/:Foodid/buying/:cost/Bye" element={<GoodBye/>}>

             </Route>
             <Route path="/admin/:Username/shop" element={<AdmStore/>}>

             </Route>
             <Route path = "/" element = {<Login_page_/>}>
             </Route>
             <Route path = "/:Username/profile" element = {<Personal_page/>}>
                 
             </Route>
             <Route path = "/sign" element = {<SignPage/>}>
                 
             </Route>
             <Route path = "/Claculator" element = {<Calculator/>}>
                 
                 </Route>
             <Route path = "/:Username/download" element = {<DownloadPage/>}>
                 
             </Route>
             <Route path = "/:Username/message" element = {<Message/>}>
                 
             </Route>
             <Route path = "/:Username/shop" element = {<Shop_Page/>}>
                 
             </Route>
             <Route path = "/:Username/shop/food-details/:foodID" element = {<FoodDetailsPage/>}>
                 
             </Route>
             <Route path = "/:Username/adminShop" element = {<MessageListPage/>}>
                 
                 </Route>
                 <Route path = "/:Username/message/detail/:MID" element = {<Message_detail/>}>
                 
                 </Route>
                 <Route path = "/Foods1" element = {<Shop_Page/>}>
                 
                 </Route>
             {/*<Route path="/login" element={<LoginPage/>}>

             </Route>*/}
             {/*<Route path="/movie-list" element={
                 <PrivateRoute
                     redirectTo={"/login?redirectTo=/movie-list"}
                     isAuth={useAuthentication()}>
                     <MovieList />
                 </PrivateRoute>}>

             </Route>

             <Route
                 path="/movie-detail/:movieId"
                 element={
                     <PrivateRoute
                         redirectTo={"/login?redirectTo=/movie-detail/:movieId"}
                         isAuth={useAuthentication()}>
                         <MovieDetailPage />
                     </PrivateRoute>
                 }
             />
             <Route path="/logout" element={<LogoutPage/>}>

             </Route>
*/}


         </Routes>
     </Router>


      {/*  <ToDoUI/>*/}
    </div>
  );
}

export default App;
