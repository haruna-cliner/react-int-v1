import React from 'react';
import Head from "next/head";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import TopBar from "../layout/Topbar";
import "../../utils/app";

const BaseLayout = ({title = "Dashboard", children, btn = null, handleAction}) => (
    <>
        <Head>
            <title>Cliner - {title}</title>
        </Head>
        <Navbar/>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar/>
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">{title}</h1>
                        {
                            btn && <a onClick={e => handleAction && handleAction(e)}
                                      className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                <i className="fas fa-download fa-sm text-white-50"/>
                                {btn}
                            </a>
                        }
                    </div>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    </>
);

export default BaseLayout
