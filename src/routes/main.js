import { lazy } from "react";
import Lazy from "components/atoms/Loader/lazy";
import LayoutMain from "layouts/Main";

const Pricing = Lazy(lazy(() => import("views/pages/Pricing")));
const Contact = Lazy(lazy(() => import("views/pages/Contact")));
const Dashboard = Lazy(lazy(() => import("views/pages/Dashboard")));

const Main = {
  path: "/",
  element: <LayoutMain />,
  children: [
    {
      path: "/cv/aboutme",
      element: <h1>aboutme </h1>,
    },
    {
      path: "/cv/softskills",
      element: <h1>softskills </h1>,
    },
    {
      path: "/cv/hardskills",
      element: <h1>hardskills </h1>,
    },
    {
      path: "/cv/technology",
      element: <h1>technology</h1>,
    },
    {
      path: "/cv/technology/web",
      element: <h1>technology web</h1>,
    },
    {
      path: "/cv/technology/mobile",
      element: <h1>technology mobile</h1>,
    },
    {
      path: "/cv/technology/standalone",
      element: <h1>technology standalone</h1>,
    },
    {
      path: "/cv/education",
      element: <h1>education</h1>,
    },
    {
      path: "/cv/jobhistory",
      element: <h1>jobhistory</h1>,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ],
};

export default Main;
