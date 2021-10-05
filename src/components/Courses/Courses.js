import React, {useState,useEffect} from 'react';
import useCourses from '../../Utilities/MyCourses';
import CourseCardContainer from '../CourseCardContainer/CourseCardContainer';
import Header from '../Header/Header';

const Courses = () => {
    const [courses,setCourses] = useCourses();
    const {database,digitalMarketing,python,seo,webdesign,webdev} = courses;
    console.log(courses);
    console.log('db',database);
    const mainTextheader = 'Gain skills from Specialized Courses';
    const detailHeader = "Develop yourself day by day with these courses and be an expert.";
    const [topic,setTopic] = useState([])
    useEffect(()=>{
        if(!database || !digitalMarketing || !python || !seo || !webdesign || !webdev){
            setTopic([])
        }
        else{
            setTopic(digitalMarketing)
        }
    },[courses]);
    const handleClick = courseName => {
        if(!database || !digitalMarketing || !python || !seo || !webdesign || !webdev){
            setTopic([]);
        }
        else if(courseName === 'python'){
            setTopic([...python]);
        }
        else if(courseName === 'webdev'){
            setTopic([...webdev]);
        }
        else if(courseName === 'webdesign'){
            setTopic([...webdesign]);
        }
        else if(courseName === 'seo'){
            setTopic([...seo]);
        }
        else if(courseName === 'digitalMarket'){
            setTopic([...digitalMarketing]);
        }
        else if(courseName === 'database'){
            setTopic([...database]);
        }
    }
    return (
        <div>
            <Header mainTextheader={mainTextheader} detailHeader={detailHeader}></Header>
            <nav className="mb-2">
                <ul className="pt-3 grid md:grid-cols-3 grid-cols-2 justify-between">
                    <li onClick={()=>handleClick('python')} className="cursor-pointer bg-my-dark-one text-white text-xl p-1 rounded-md m-1 text-center hover:scale-110">Python</li>
                    <li onClick={()=>handleClick('webdev')} className="cursor-pointer bg-my-dark-one text-white text-xl p-1 rounded-md m-1 text-center">Web Development</li>
                    <li onClick={()=>handleClick('webdesign')} className="cursor-pointer bg-my-dark-one text-white text-xl p-1 rounded-md m-1 text-center">Web Design</li>
                    <li onClick={()=>handleClick('seo')} className="cursor-pointer bg-my-dark-one text-white text-xl p-1 rounded-md m-1 text-center">SEO</li>
                    <li onClick={()=>handleClick('digitalMarket')} className="cursor-pointer bg-my-dark-one text-white text-xl p-1 rounded-md m-1 text-center">Digital Marketing</li>
                    <li onClick={()=>handleClick('database')}  className="cursor-pointer bg-my-dark-one text-white text-xl p-1 rounded-md m-1 text-center">Database</li>
                </ul>
            </nav>
            {<CourseCardContainer name={topic}></CourseCardContainer>}
        </div>
    );
};

export default Courses;