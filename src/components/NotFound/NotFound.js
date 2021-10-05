import React from 'react';
import Header from '../Header/Header';

const NotFound = () => {
    const mainTextheader = 'Ooops! Page not found';
    const detailHeader = "There has no path you are searching for.";
    return (
        <div>
            <Header mainTextheader={mainTextheader} detailHeader={detailHeader}></Header>
        </div>
    );
};

export default NotFound;