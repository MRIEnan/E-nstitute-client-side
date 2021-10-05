import React from 'react';
import heroImageOne from '../../images/header-image-book-ques.jpg';

const Header = (props) => {
    const {mainTextheader,detailHeader} = props;
    return (
        <div className="h-90 w-full grid lg:grid-cols-2 md:grid-cols-1 lg:gap-1 place-items-center bg-my-dark-one relative">
            <div  className="h-20 grid place-items-center absolute md:relative z-10 text-center">
                <h2 className="text-2xl text-white">{mainTextheader}</h2>
                <p className="text-white">{detailHeader}</p>
            </div>
            <div className="w-full">
                <img className="w-full opacity-50" src={heroImageOne} alt="" />
            </div>
        </div>
    );
};

export default Header;