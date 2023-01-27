// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home } from "./pages/Home";

// Layout
import Layout from "./hocs/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
