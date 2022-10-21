import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './pages/Login';
import Rezhe from './pages/Rezhe';
import List from './pages/List';
import MainMenu from './pages/MainMenu';
import ControlPanel from './pages/ControlPanel';
import Mission from './pages/Mission';
import EdittingRezhe from './pages/EdittingRezhe';
import MissionDetail from './pages/MissionDetail';
import GordanEhtiatList from './pages/GordanEhtiatList';
import ModiriatAfzaesheShift from './pages/ModiriatAfzaesheShift';
import ModiriatKahesheShift from './pages/ModiriatKahesheShift';
import MoafiateRade from './pages/MoafiateRade';
import MoafiatPezeshki from './pages/MoafiatPezeshki';
import MoafiateDastur from './pages/MoafiateDastur';
import VirayesheGhadePaivaran from './pages/VirayesheGhadePaivaran';
import NewMission from './pages/NewMission';
import VirayesheVizhegieMission from './pages/VirayesheVizhegieMission';
import HozurGhiab from './pages/HozurGhiab';
import EjadBarname from './pages/EjadBarname';
import Gozareshat from './pages/Gozareshat';
import VirayesheKarbar from './pages/VirayesheKarbar';
import VirayesheSayereAfrad from './pages/VirayesheSayereAfrad';
import MoafiathaeControlPanel from './pages/MoafiathaeControlPanel';
import AnvaeMoafiatPezeshki from './pages/AnvaeMoafiatPezeshki';
import MoafiatSanavat from './pages/MoafiatSanavat';
import OzviathaeFaghedeSharayet from './pages/OzviathaeFaghedeSharayet';
// import SlideInfo from './pages/SlideInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/list' element={<List />} />
        <Route path='/mainmanu' element={<MainMenu />} />
        <Route path='/controlpanel' element={<ControlPanel />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/rezhe' element={<Rezhe />} />
        <Route
          path='/ozviathaefaghedesharayet'
          element={<OzviathaeFaghedeSharayet />}
        />
        <Route path='/edittingrezhe' element={<EdittingRezhe />} />
        <Route path='/mission/details' element={<MissionDetail />} />
        <Route path='/gordanehtiat' element={<GordanEhtiatList />} />
        <Route
          path='/controlpanel/moafiat/moafiaterade'
          element={<MoafiateRade />}
        />
        <Route
          path='/controlpanel/moafiat/moafiatpezeshki'
          element={<MoafiatPezeshki />}
        />
        <Route
          path='/controlpanel/moafiat/moafiatedastur'
          element={<MoafiateDastur />}
        />
        <Route
          path='/controlpanel/moafiat/moafiatsanavat'
          element={<MoafiatSanavat />}
        />
        <Route
          path='/controlpanel/moafiat/anvaemoafiatpezeshki'
          element={<AnvaeMoafiatPezeshki />}
        />
        <Route path='/newmission' element={<NewMission />} />
        <Route path='/hozurghiab' element={<HozurGhiab />} />
        <Route path='/ejadbarname' element={<EjadBarname />} />
        <Route path='/gozareshat' element={<Gozareshat />} />
        <Route
          path='/controlpanel/moafiat'
          element={<MoafiathaeControlPanel />}
        />

        <Route path='/virayeshekarbar' element={<VirayesheKarbar />} />
        <Route
          path='/virayeshesayereafrad'
          element={<VirayesheSayereAfrad />}
        />
        <Route
          path='/virayeshevizheghiemission'
          element={<VirayesheVizhegieMission />}
        />
        <Route
          path='/virayesheghadepayvaran'
          element={<VirayesheGhadePaivaran />}
        />
        <Route
          path='/gordanehtiat/modiriatafzaesheshift'
          element={<ModiriatAfzaesheShift />}
        />
        <Route
          path='/gordanehtiat/modiriatkahesheshift'
          element={<ModiriatKahesheShift />}
        />
        {/* <Route path='/list/moreinfo' element={<SlideInfo />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
