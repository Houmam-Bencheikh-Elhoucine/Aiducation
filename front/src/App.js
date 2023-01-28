import StartPage from "./components/StartPage";
import Page2 from "./components/page2/Page2";
import Page3 from "./components/page3/Page3";
import Page4 from "./components/page4/Page4";
import Page5 from "./components/page5/Page5";
import Page6 from "./components/page6/Page6";

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
          <Route path="/page5" element={<Page5/>} />
          <Route path="/page6" element={<Page6/>} />
         </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
