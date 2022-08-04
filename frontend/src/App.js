import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupsPage from "./components/GroupsPage";
import GroupPage from "./components/GroupPage";
import NotePage from "./components/NotePage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NavigatorComponent from "./components/Navigator";
import { RecoilRoot } from "recoil";
import "./Inter/Inter_100_normal.ttf";
import "./Inter/Inter_200_normal.ttf";
import "./Inter/Inter_300_normal.ttf";
import "./Inter/Inter_400_normal.ttf";
import "./Inter/Inter_500_normal.ttf";
import "./Inter/Inter_600_normal.ttf";
import "./Inter/Inter_700_normal.ttf";
import "./Inter/Inter_800_normal.ttf";
import "./Inter/Inter_900_normal.ttf";
import "./App.css";

function App() {
  return (
    <div style={styles.contentArea}>
      <RecoilRoot>
        <Router>
          <NavigatorComponent />
          <Navbar />
          {/* <div style={styles.contentArea}> */}
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/group/:id" element={<GroupPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
          {/* </div> */}
        </Router>
      </RecoilRoot>
    </div>
  );
}

const styles = {
  contentArea: {
    positon: "relative",
    minHeight: "100vh",
  },
};

export default App;
