import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import MyPage from "./../page/MyPage";
import Main from "../page/Main";
import Detail from "./../page/Detail";
import Board from "./../page/Board";
import PostDetail from "./../page/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/board" element={<Board />} />
        <Route path="/postdetail" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
