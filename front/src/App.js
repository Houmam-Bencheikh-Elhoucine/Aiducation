import StartPage from "./components/StartPage";
import ResponsiveDrawer from "./components/page2/ResponsiveDrawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";





function App() {
  return (
    <div  >
      <BrowserRouter>
        {/* { <Sidebar /> } */}
        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/page2" element={<ResponsiveDrawer/>} />

        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
