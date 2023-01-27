import StartPage from "./components/StartPage";
import Page2 from "./components/page2/Page2";
import Page3 from "./components/page3/Page3";
import Page4 from "./components/page4/Page4";

import { BrowserRouter, Route, Routes } from "react-router-dom";





function App() {
  return (
    <div  >
      <BrowserRouter>
        {/* { <Sidebar /> } */}
        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/page2" element={<Page2/>} />
          <Route path="/page3" element={<Page3/>} />
          <Route path="/page4" element={<Page4/>} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
