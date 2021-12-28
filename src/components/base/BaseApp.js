import React, {useEffect} from 'react';

const BaseApp = ({children}) => {
    useEffect(() => {
        import "jquery/dist/jquery.min.";
        import "bootstrap/dist/js/bootstrap.bundle";
        import "jquery-easing/jquery.easing.1.3";
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
