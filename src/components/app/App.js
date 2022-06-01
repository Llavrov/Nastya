import './App.css';
import FirstScreen from "../../animation-pages/firstScreen";
import ModelPage from "../model-page/model-page";
import PhotoBorder from "../photo-border/photo-border";
import SelfInfo from "../self-info/self-info";
import PersonalStylish from "../personal-stylish/personal-stylish";
import WorkProcess from "../work-process/work-process";
import PhotoStylish from "../photo-stylish/photo-stylish";
import Gallery from "../gallery/gallery";
import Footer from "../footer/footer";

function App() {

  return (
    <div>
        {/*<div className='style-button'>Заказать стиль...</div>*/}
      <FirstScreen>
          <ModelPage></ModelPage>
          <PhotoBorder></PhotoBorder>
          <SelfInfo></SelfInfo>
          <PersonalStylish></PersonalStylish>
          <WorkProcess></WorkProcess>
          <PhotoStylish></PhotoStylish>
          <Gallery></Gallery>
          <Footer></Footer>
      </FirstScreen>
    </div>
  );
}

export default App;
