import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
