import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupsPage from "./components/GroupsPage";
import GroupPage from "./components/GroupPage";
import NotePage from "./components/NotePage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NavigatorComponent from "./components/Navigator";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <div>
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

// const styles = {
//   contentArea: {
//     positon: "relative",
//     top: "10%",
//   },
// };

export default App;
