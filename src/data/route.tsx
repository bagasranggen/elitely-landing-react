import { createBrowserRouter } from "react-router-dom";

import AboutUs from "../pages/about-us";
import Layout from "@/components/layout/Layout.tsx";

export const route = createBrowserRouter([
    {
        path: '/about-us',
        element: <Layout>
            <AboutUs />
        </Layout>,
    }
]);