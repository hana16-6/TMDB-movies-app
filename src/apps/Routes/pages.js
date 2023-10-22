import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Homepage, MovieDetails, ShowData } from "./lazyLoading";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import App from "../../App";
import NotFound from "./NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/type/:typeId/:id",
                element: <ShowData />,
            },
            {
                path: "/movie/:id",
                element: <MovieDetails />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;
