import React from 'react';
import Header from '../Header/Header';

const Admission = () => {
    const mainTextheader = 'Start your journey from NOW';
    const detailHeader = "Let's get started with different courses and develop your skills.";
    // https://randomuser.me/api/    
    return (
        <div>
            <Header mainTextheader={mainTextheader} detailHeader={detailHeader}></Header>
            <div className="flex flex-col md:flex-row flex-wrap justify-evenly align-middle">
                <div className=" md:w-5/12 my-5  md:text-left sm:text-center">
                    <h2 className="text-2xl bg-my-dark-one text-white py-2 px-3 rounded-b-3xl text-center">Admission Rules</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. It has survived not only five centuries, but also the leap into electronic.</p>
                </div>
                <div className="md:w-5/12 mt-14 flex justify-center align-middle">
                    <ul className="inline grid align-middle">
                        <li>✒ <span className="text-goldenrod-300">Donec molestie felis eget justo pellentesque</span></li>
                        <li>✒ <span className="text-goldenrod-300">Phasellus et justo sit amet nisl fringilla semper.</span></li>
                        <li>✒ <span className="text-goldenrod-300">Phasellus et justo sit amet nisl fringilla semper.</span></li>
                        <li>✒ <span className="text-goldenrod-300">Phasellus et justo sit amet nisl fringilla semper.</span></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col text-center">
                <div>
                    <h2 className="bg-my-dark-one text-white text-2xl">Admission Form</h2>
                </div>
                <div className="flex flex-col w-full">
                    <label className="mt-3"  htmlFor="course-name">Course Name</label>
                    <input className=" py-2 px-4 border-2 rounded-xl border-gray-700" type="text" name="course-name" id="course-name" placeholder="Course Name"/>
                    <label className="mt-3"  htmlFor="student-name">Student Name</label>
                    <input className=" py-2 px-4 border-2 rounded-xl  border-gray-700" type="text" name="student-name" id="student-name" placeholder="Student Name"/>
                    <label className="mt-3"  htmlFor="email">Student Email</label>
                    <input className=" py-2 px-4 border-2 rounded-xl border-gray-700" type="email" name="email" id="email" placeholder="email"/>
                    <label className="mt-3"  htmlFor="phone">Phone</label>
                    <input className="py-2 px-4  border-2 rounded-xl  border-gray-700" type="number" name="phone" id="phone" placeholder="phone"/>
                    <label className="mt-3"  htmlFor="Birth">Date of Birth</label>
                    <input className="py-2 px-4 border-2 rounded-xl  border-gray-700" type="text" name="Birth" id="Birth" placeholder="Date of Birth"/>
                    <button className="mt-3 mb-3 py-2 px-4 border-2 rounded-xl bg-my-dark-one text-white border-gray-700">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Admission;