import { FormCV } from "./componentsAdriano/FormCV";
import { Home } from "./componentsAdriano/Home";
import { EditFormCV } from "./componentsAdriano/EditFormCV";
import { Dashboard } from "./componentsAdriano/Dashboard";
import { AdPage } from "./componentsEliel/pages/AdPage/AdPage";
import { Edit } from "./componentsEliel/pages/Edit/Edit";
import { Create } from "./componentsEliel/pages/Create/Create";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />

      <Routes>
        {/* <Route path="/:idCV" element={<EditFormCV />}/> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/FormCV" element={<FormCV />} />
        <Route path="/EditFormCV/:idCV" element={<EditFormCV />} />
        <Route path={"/create"} element={<Create />} />
        <Route path={"/ad-page"} element={<AdPage />} />
        <Route path={"/edit/:id"} element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
