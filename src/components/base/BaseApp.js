import React, {useEffect} from 'react';

const BaseApp = ({children}) => {
    useEffect(() => {
        if (typeof window !== "undefined" && typeof window.document !== "undefined") {
            window.jQuery = require("jquery/dist/jquery");
            require("bootstrap/dist/js/bootstrap.bundle")
            require("jquery-easing/jquery.easing.1.3");
        }
    }, [])
    return (
        <>
            <div id="wrapper">
                {children}
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"/>
            </a>
        </>
    );
};

export default BaseApp;
