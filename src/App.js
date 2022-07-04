//import { FormCV } from "./componentsAdriano/FormCV";
import { Create } from "./componentsEliel/pages/Create/Create";
import { AdPage } from "./componentsEliel/pages/AdPage/AdPage";
import { Edit } from "./componentsEliel/pages/Edit/Edit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>{/*<FormCV />*/}</div>
      <div>
        <Routes>
          <Route path={"/"} element={<Create />} />
          <Route path={"/ad-page"} element={<AdPage />} />
          <Route path={"/edit/:id"} element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
