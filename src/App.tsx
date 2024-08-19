import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </Router>
    </Box>
    // <div>123</div>
  );
}

export default App;
