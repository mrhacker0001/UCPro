import { Route, Routes } from "react-router";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import News from "./News/News";
import HelpCentre from "./HelpCentre/HelpCentre";
import Apps from "./Apps/Apps";
import FreeFire from "./Apps/FreeFire";
import Pubg from "./Apps/Pubg";
import Instagram from "./Apps/Instagram";
import Telegram from "./Apps/Telegram";
import TikTok from "./Apps/TikTok";
import DreamLeagueSoccer from "./Apps/DreamLeagueSoccer";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/HelpCentre" element={<HelpCentre />} />
        <Route path="/Apps" element={<Apps />} />
        <Route path="/Apps/FreeFire" element={<FreeFire />} />
        <Route path="/Apps/Pubg" element={<Pubg />} />
        <Route path="/Apps/Instagram" element={<Instagram />} />
        <Route path="/Apps/Telegram" element={<Telegram />} />
        <Route path="/Apps/TikTok" element={<TikTok />} />
        <Route path="/Apps/DreamLeagueSoccer" element={<DreamLeagueSoccer />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
