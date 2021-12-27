import { lazy } from "react";

import Lazy from "components/atoms/Loader/lazy";
import LayoutMain from "layouts/main";
const Sample = Lazy(lazy(() => import("views/pages/Sample")));

// ==============================|| MAIN ROUTING ||============================== //

const Main = {
  path: "/",
  element: <LayoutMain />,
  children: [
    {
      path: "/1",
      element: <Sample />,
    },
  ],
};

export default Main;
