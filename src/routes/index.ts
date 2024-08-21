import DefaultLayout from "~/components/DefaultLayout/DefaultLayout";
import HomePage from "~/pages/HomePage/HomePage";
import LoginPage from "~/pages/LoginPage/LoginPage";
import UserInfoPage from "~/pages/UserInfoPage/UserInfoPage";

export const routes = [
  {
    path: "/",
    page: LoginPage,
  },
  {
    path: "/home",
    page: HomePage,
    isDefaultLayout: true,
  },
  {
    path: "/user-info",
    page: UserInfoPage,
    isDefaultLayout: true,
  },
  {
    path: "/test",
    page: DefaultLayout,
  },
];
