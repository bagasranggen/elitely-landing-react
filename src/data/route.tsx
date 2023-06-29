import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/layout/Layout.tsx";
import AboutUs from "@/pages/about-us";
import SignUp from "@/pages/sign-up";
import HowItWorks from "@/pages/how-it-works";
import Faqs from "@/pages/faq";
import TermsConditions from "@/pages/terms-conditions";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout>
            <SignUp />
        </Layout>,
    },
    {
        path: '/about-us',
        element: <Layout>
            <AboutUs />
        </Layout>,
    },
    {
        path: '/how-it-works',
        element: <Layout>
            <HowItWorks />
        </Layout>,
    },
    {
        path: '/faqs',
        element: <Layout>
            <Faqs />
        </Layout>,
    },
    {
        path: '/terms-conditions',
        element: <Layout>
            <TermsConditions />
        </Layout>,
    },
]);