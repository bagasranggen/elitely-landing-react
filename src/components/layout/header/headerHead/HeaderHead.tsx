import React from 'react';
// import Head from "next/head";
import { Helmet } from 'react-helmet';

export type HeaderHeadProps = {
    title?: string;
};

const HeaderHead = ({ title }: HeaderHeadProps): React.ReactElement => {
    const webName = typeof process !== "undefined" ? process.env.PUBLIC_WEB_NAME : '';
    const pageTitle = webName ? (title ? `${title} | ${webName}` : webName) : title;

    return (
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
    );
};

export default HeaderHead;