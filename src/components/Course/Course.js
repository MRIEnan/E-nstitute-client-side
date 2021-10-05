import React from 'react';

const Course = (props) => {
    const {name,image,description,price,ratings} =props.course;
    return (
        <div style={{width: '360px'}} className=" border-gray-600 p-2 m-2 text-center">
            <div className="flex justify-center rounded relative">
                <img style={{height: '150px'}} classList="w-full cover rounded " src={image} alt="" />
            </div>
            <div className="border-gray-700 shadow-lg border-2 rounded-t-3xl">
                <h2 className="text-xl text-white bg-my-dark-one rounded-t-2xl">{name}</h2>
                <p className="my-3">{description}</p>
                <div className="flex justify-between px-3 mb-3">
                    <p className="bg-secondary py-2 px-3 rounded-3xl font-medium text-black">Price: {price}</p>
                    <p className="bg-my-dark-one text-white px-3 py-2 rounded-3xl">Ratings: {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;