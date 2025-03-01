import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

// Components
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";

// Pages
import About from "./Pages/About";
import Carted from "./Pages/Carted";
import Liked from "./Pages/Liked";
import UserAction from "./Pages/UserAction";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/user-action" element={<UserAction />}>
          <Route path="profile" element={<Profile />} />
          <Route path="carted" element={<Carted />} />
          <Route path="liked" element={<Liked />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
