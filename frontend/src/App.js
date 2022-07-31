import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupsPage from "./components/GroupsPage";
import GroupPage from "./components/GroupPage";
import NotePage from "./components/NotePage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/group/:id" element={<GroupPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
