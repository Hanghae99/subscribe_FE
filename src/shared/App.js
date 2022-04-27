import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import MyPage from "./../page/MyPage";
import Main from "../page/Main";
import Detail from "./../page/Detail";
import Board from "./../page/Board";
import PostDetail from "./../page/PostDetail";

// social login
import { KakaoLogin, GoogleLogin, NaverLogin, Naver } from '../components/component';

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
        <Route path="/user/kakao/callback" element={<KakaoLogin />} />
        <Route path="/user/google/callback" element={<GoogleLogin />} />
        <Route path="/user/naver/Login" element={<Naver />} />
        <Route path="/user/naver/callback" element={<NaverLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
