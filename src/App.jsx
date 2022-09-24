import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Home from './pages/Home'
import CityList from './pages/CityList'
import News from './pages/News'
import Index from './pages/Index'
import HouseList from "./pages/HouseList";
import Profile from "./pages/Profile";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home"  element={<Home />}>
            <Route path="/home" element={<Index />}></Route>
            <Route path="list" element={<HouseList />}></Route>   
            <Route path="news" element={<News />}></Route>   
            <Route path="profile" element={<Profile />}></Route>
            <Route path="" element={<Navigate to="index"/>} />     
          </Route>
          <Route path="/citylist" element={<CityList />}></Route>
          <Route path="/" element={<Navigate to="/home"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
