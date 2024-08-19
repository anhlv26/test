import HomePage from "~/pages/HomePage/HomePage";
import LoginPage from "~/pages/LoginPage/LoginPage";

export const routes = [
  {
    path: "/",
    page: LoginPage,
  },
  {
    path: "/home",
    page: HomePage,
  },
];
