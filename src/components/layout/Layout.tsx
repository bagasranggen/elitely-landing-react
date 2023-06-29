import React from 'react';
// import { useRouter } from "next/router";

import { useMeasure } from "react-use";

import Navigation from "@/components/layout/navigation/Navigation";
import Footer from "@/components/layout/footer/Footer";
import Init from "@/components/animation/init.tsx";

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): React.ReactElement => {
    Init();

    const [ navigationRef, { top, bottom } ]: any = useMeasure();
    // const {asPath} = useRouter();
    // const pagePath = asPath.replace(/\//g, '-');
    const pagePath = '';

    return <>
        <Navigation ref={navigationRef} />
        <main
            className={`page-${pagePath}`}
            style={{ '--nav-height': `${top + bottom}px` } as React.CSSProperties}>{children}</main>
        <Footer />
    </>;
};

export default Layout;