import {motion, useScroll } from "framer-motion"
import React, {useRef } from 'react'
import LiIcon from "./LiIcon"

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}

        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary capitalize dark:text-primaryDark'
            >@{company} </a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
   )
}

const Experience = () => {
    const ref = useRef(null);
      const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
      )
    
    return(
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75] mx-auto relative lg:w-[90%] md:w-full'> 
            <motion.div 
            style={{scaleY: scrollYProgress}}
             
             className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                            <Details 
                            position="Project Developer" company="Florida Institute of Technology"
                            companyLink="https://www.fit.edu/"
                            time="Jan 2023 - May 2023" address="Melbourne, FL"
                            work="Collaborated with PhD professors to develop an innovative code-to-requirements conversion model that streamlined the
                            process, enabling users to go straight from code to requirements, which makes it stand out in the field."
                            />

                            <Details 
                            position="Faculty Supervisor" company="Florida Institute of Technology"
                            companyLink="https://www.fit.edu/"
                            time="Oct 2021 - May 2023" address="Melbourne, FL"
                            work="Successfully managed and collaborated with a diverse team of 50 individuals, resulting in a 20% increase in productivity and a
                            15% improvement in employee satisfaction. Moreover, I Interacted with hundreds of customers daily, maintaining a 
                            95% customer satisfaction rate and increasing revenue by 110%
                            through upselling techniques"
                            />

                            <Details 
                            position="Mathematics Teacher" company="Hillview College"
                            companyLink="http://hillviewcollege.edu.tt/"
                            time="June 2018 - Dec 2018" address="El Dorado, Trinidad"
                            work="Provided support, motivation, and aid to developing hundreds of children in the classroom, collaborating with other teachers
                            to design and implement learning programs, improving problem-solving skills and alertness to people needs"
                            />
 
                            <Details 
                            position="Data Entry Clerk" company="Swissport International LTD"
                            companyLink="https://www.swissport.com/en"
                            time="July 2016 - August 2016" address="Piarco, Trinidad"
                            work="As a data entry clerical assistant at Swissport International, a 2.8-billion-dollar shipping cargo company, I gained hands-on
                            experience in data management, which cultivated a deep appreciation for the importance of data and sparked my interest in
                            the field."
                            />

                         
                        </ul>
                </div>
           </div>
    )
}

export default Experience