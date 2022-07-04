import { FormCV } from "./componentsAdriano/FormCV";
import {Home} from "./componentsAdriano/Home"
import {EditFormCV} from "./componentsAdriano/EditFormCV"
import {Dashboard} from "./componentsAdriano/Dashboard"

import {Routes, Route, Link} from "react-router-dom"

function App() {
	return (
		<div className="App">

			<Home />



    <Routes>
      {/* <Route path="/:idCV" element={<EditFormCV />}/> */}
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/FormCV" element={<FormCV />} />
      <Route path="/EditFormCV/:idCV" element={<EditFormCV />} />
    </Routes>

		</div>
	);
}

export default App;
