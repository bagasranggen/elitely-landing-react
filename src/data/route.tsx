import { createBrowserRouter } from "react-router-dom";

import AboutUs from "../pages/about-us";

export const route = createBrowserRouter([
    {
        path: '/about-us',
        element: <AboutUs />,
    }
])