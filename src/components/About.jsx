import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    I'm a passionate web developer currently pursuing a BCA Hons. (3nd year) at GLA University, Mathura. I'm driven to create user-centric web experiences and have actively honed my skills in the MERN stack (MongoDB, Express.js, React.js, Node.js). My foundation is strong in HTML, CSS, and JavaScript, further enhanced by utilizing frameworks like Tailwind and Bootstrap. Additionally, I possess experience with MySQL for robust data management.  Beyond technical skills, I'm a quick learner who thrives in adapting to new challenges.  My problem-solving abilities and clear communication allow me to collaborate effectively and find efficient solutions.</p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    In addition to web development, I have a solid foundation in programming languages like Java, Python, and C. This diverse skillset allows me to approach problems from different angles and contribute meaningfully to various projects.  I'm eager to leverage my skills and strengths to contribute to a dynamic and innovative team.
                </p>
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>
                    <AiOutlineCloudDownload />
                    <a href="https://drive.google.com/file/d/1l1rQ1nhVmUpT2rkUCM-3aQHqg2DvMzK-/view?usp=drive_link" download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About