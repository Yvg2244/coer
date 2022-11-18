import Background from "./components/Background";
import Blogs from "./components/Blogs";
import GuideForm from "./components/GuideForm";
import Guideinfo from "./components/Guideinfo";
import ModeCard from "./components/ModeCard";
import Navbar from "./components/Navbar";
import RouteForm from "./components/RouteForm";
import Tourist from "./components/Tourist";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App ">
    <Navbar></Navbar>
    <Background>
    </Background>
    
    <UserProfile></UserProfile>
  

    <ModeCard></ModeCard>
    </div>
  );
}

export default App;
