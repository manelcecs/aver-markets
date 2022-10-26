import React from 'react';

/*
Must be keyword 'children'. 
See more: https://reactjs.org/docs/composition-vs-inheritance.html
*/
const Layout = ({ children }) => {
    return (<div>
        {children}
    </div>);
}

export default Layout;