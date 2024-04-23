import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./Components/Auth/ProtectRoute";
import Loader from "./Components/Layout/Loader";

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chat = lazy(() => import("./Pages/Chat"));
const Group = lazy(() => import("./Pages/Group"));
const Notfound = lazy(() => import("./Pages/Notfound"));

const AdminLogin = lazy(()=>import("./Pages/Admin/AdminLogin"));
const Dashboard = lazy(()=>import("./Pages/Admin/Dashboard"));


const UserManagement = lazy(()=>import("./Pages/Admin/UserManagement"));
const ChatManagement = lazy (()=>import("./Pages/Admin/ChatManagement"));
const MessageManagement = lazy (()=>import("./Pages/Admin/MessageManagement"));



let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/group" element={<Group />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          <Route path="/admin" element={<AdminLogin/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/users" element={<UserManagement/>}/>
          <Route path="/admin/chats" element={<ChatManagement/>}/>
          <Route path="/admin/messages" element={<MessageManagement/>}/>



          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
