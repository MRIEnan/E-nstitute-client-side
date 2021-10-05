import React from 'react';
import Header from '../Header/Header';
import instituteImage from '../../images/institute.jpg';
import Footer from '../Footer/Footer';

const About = () => {
    const mainTextheader = 'Believe in YourSelf';
    const detailHeader = "We have a very energetic and responsible instructor also expert from different fields.";
    return (
        <div >
            <Header mainTextheader={mainTextheader} detailHeader={detailHeader}></Header>
            <div className="flex flex-col-reverse md:flex-row flex-wrap justify-center">
                <div className="md:w-7/12 my-5  md:text-left sm:text-center">
                    <h2 className="text-2xl ">What we are?</h2>
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.<br/>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                </div>
                <div className="md:w-5/12">
                    <img className="w-full" src={instituteImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;