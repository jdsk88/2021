import { lazy } from "react";
import Lazy from "components/atoms/Loader/lazy";
import LayoutMain from "layouts/Main";

const Pricing = Lazy(lazy(() => import("views/pages/Pricing")));
const Contact = Lazy(lazy(() => import("views/pages/Contact")));
const Dashboard = Lazy(lazy(() => import("views/pages/Dashboard")));
const Crypto = Lazy(lazy(() => import("views/crypto/table")));
const CryptoCoinPage = Lazy(lazy(() => import("views/crypto/coin")));
const UserProfile = Lazy(lazy(() => import("views/pages/UserProfile")));
const Feeds = Lazy(lazy(() => import("views/pages/Feeds")));

const Main = {
  path: "/",
  element: <LayoutMain />,
  children: [
    {
      path: "/cv/aboutme",
      element: <UserProfile />,
    },
    {
      path: "/cv/aboutme",
      element: <UserProfile />,
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
    // {
    //   path: "/dashboard/cryptocurrecy",
    //   element: <Crypto />,
    // },
    // {
    //   path: "/dashboard/cryptocurrecy/table",
    //   element: <Crypto />,
    // },
    // {
    //   path: "/dashboard/cryptocurrecy/item",
    //   element: <CryptoCoinPage />,
    // },
    // {
    //   path: "/dashboard/business",
    //   element: <Dashboard />,
    // },
    {
      path: "/feeds",
      element: <Feeds />,
    },
  ],
};

export default Main;
