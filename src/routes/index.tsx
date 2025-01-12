import { Outlet, createBrowserRouter } from "react-router-dom";
import { routerPaths } from "./routes.config";
import { LoginPage } from "@/pages/LoginPage";
import { VCardsHome } from "@/pages/VCardsHome";
import { VCardLayout } from "@/components/Layouts/VCardLayout";
import { VCardsNew } from "@/pages/VCardsNew";
import { ViewVCardPage } from "@/pages/ViewVCard";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    // element: <AppGuardLayout />,
    element: <Outlet />,
    children: [
      {
        path: routerPaths.login.path,
        element: <LoginPage />,
      },
      {
        path: routerPaths.viewVCard.path + "/:id",
        element: <ViewVCardPage />,
      },
      {
        path: routerPaths.vcardsHome.path,
        element: <VCardLayout />,
        children: [
            {
                path: '',
                element: <VCardsHome />
            },
            {
              path: '/vcards/new',
              element: <VCardsNew />
            }
        ]
      },

      {
        path: "*",
        // element: <NoFound />
        element: <>Not found</>,
      },
    ],
  },
]);
