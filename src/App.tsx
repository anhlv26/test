import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import React from "react";
import DefaultLayout from "~/components/DefaultLayout/DefaultLayout";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            const Layout: React.FC<{ children: React.ReactNode }> =
              route.isDefaultLayout ? DefaultLayout : React.Fragment;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page children={undefined} />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
