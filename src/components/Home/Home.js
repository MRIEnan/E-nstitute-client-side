import React from 'react';
import CoursesShowcase from '../CoursesShowcase/CoursesShowcase';
import Header from '../Header/Header';

const Home = () => {
    const mainTextheader = 'Welcome to Our E-nstitute';
    const detailHeader = "Let's get started with different courses and develop your skills.";
    return (
        <div>
            <Header mainTextheader={mainTextheader} detailHeader={detailHeader}></Header>
            <CoursesShowcase></CoursesShowcase>
        </div>
    );
};

export default Home;