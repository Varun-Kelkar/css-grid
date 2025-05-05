import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home/Home";
import BasicGrid from "./pages/BasicGrid/BasicGrid";
import VaryingColumnSizeGrid from "./pages/VaryingColumnSizeGrid/VaryingColumnSizeGrid";
import CustomItemPlacement from "./pages/CustomItemPlacement/CustomItemPlacement";
import TemplateAreasGrid from "./pages/TemplateAreasGrid/TemplateAreasGrid";
import AutoFitGrid from "./pages/AutoFitGrid/AutoFitGrid";
import NestedGrids from "./pages/NestedGrids/NestedGrids";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: Home },
      { path: "basic-grid", Component: BasicGrid },
      { path: "varying-column-size", Component: VaryingColumnSizeGrid },
      { path: "custom-item-placement", Component: CustomItemPlacement },
      { path: "template-areas-grid", Component: TemplateAreasGrid },
      { path: "auto-fit-grid", Component: AutoFitGrid },
      { path: "nested-grids", Component: NestedGrids },
    ],
  },
]);
