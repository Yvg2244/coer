import Background from "./components/Background";
import GuideForm from "./components/GuideForm";
import Guideinfo from "./components/Guideinfo";
import ModeCard from "./components/ModeCard";
import Navbar from "./components/Navbar";
import RouteForm from "./components/RouteForm";
import Tourist from "./components/Tourist";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    {/* <Background>
    </Background>
    <RouteForm/>
    <GuideForm></GuideForm>
    <Guideinfo/>
    <Tourist></Tourist> */}

    <ModeCard></ModeCard>
    </div>
  );
}

export default App;
