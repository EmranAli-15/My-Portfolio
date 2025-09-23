import cpp from '../../assets/cpp.svg'
import brain from '../../assets/brain.svg'
import py from '../../assets/py.svg'
import js from '../../assets/js.svg'
import suC from '../../assets/certificates/suC.jpeg'
import fccC from '../../assets/certificates/fccC.png'
import phC from '../../assets/certificates/phC.png'
import coderHuntFall from '../../assets/certificates/me.png'

import '../../App.css';
import { Link } from 'react-router';

export default function About() {
  return (
    <div className='themed-bg p-4 md:p-6 rounded-2xl mb-15'>
      <section>
        <h1 className='heading text-xl'>About me</h1>
        <div className='flex items-center'>
          <div className='h-1 w-4 bg-amber-500 rounded-l-2xl'></div>
          <div className='h-1 w-8 bg-blue-700 rounded-r-2xl'></div>
        </div>
      </section>

      <section className='my-2'>
        <p>
          I'm a full-stack web developer with a proven track record in problem-solving. I achieved <span className='heading'>2<sup>nd</sup></span> place in the (SUPC Coder Hunt-Fall25) and <span className='heading'>4<sup>th</sup></span> place in the (SU CSE Fest 2025 - Programming Contest) Inter-University Programming Contest 2025 and demonstrating my competitive programming skills.
          <br />
          My experience includes an internship as a front-end developer, where I also served as a team leader. My portfolio contains a variety of projects, many of which leverage AI to deliver creative solutions.
        </p>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        <div className='border rounded-2xl p-4 md:p-6'>
          <div className='flex items-center justify-center'><img className='size-12' src={cpp} alt="" /></div>
          <h1 className='heading text-center text-cl'>C/C++</h1>
          <p>I've well known idea about C and C++ programming. Every day I solve problem by this language on Toph. And was <span className='heading'>2<sup>nd</sup> and 4<sup>th</sup></span> in inter-university programming contest.</p>
        </div>
        <div className='border rounded-2xl p-4 md:p-6'>
          <div className='flex items-center justify-center'><img className='size-10' src={js} alt="" /></div>
          <h1 className='heading text-center text-cl'>JavaScript</h1>
          <p>I'm a full time JS developer with most popular library Next.JS, React.JS, React Native and Express.JS. I did many project with React.JS and Next.JS and Integrate AI for bring it into next level.</p>
        </div>
        <div className='border rounded-2xl p-4 md:p-6'>
          <div className='flex items-center justify-center'><img className='size-12' src={py} alt="" /></div>
          <h1 className='heading text-center text-cl'>Python</h1>
          <p>Right now I'm in a beginner level in Python programming. All the basic syntax I learned and now learning Python OOP and try to solve some problem which I already did with C and C++.</p>
        </div>
        <div className='border rounded-2xl p-4 md:p-6'>
          <div className='flex items-center justify-center'><img className='size-12' src={brain} alt="" /></div>
          <h1 className='heading text-center text-cl'>Problem Solve</h1>
          <p>I solved <span className='heading'>180+</span> problem in a website named 'Toph.co'. I solved here many types of problem such as binary search, linier data structure, game theory, Ad-hoc, Brute force, geometry, math etc. <Link className='underline text-blue-500' target='black' to="https://toph.co/u/Emran_">my profile</Link></p>
        </div>
      </section>



      <p className='text-center mt-20'><strong className='heading text-xl underline'>My Achievements</strong></p>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-5'>
        <div className='border rounded-2xl p-4 md:p-6'>
          <img src={coderHuntFall} alt="" />
          <p>Secured <span className='heading'>2<sup>nd</sup></span> position in 'SUPC Coder Hunt Fall-25' intra university programming contest.</p>
        </div>
        <div className='border rounded-2xl p-4 md:p-6'>
          <img src={fccC} alt="" />
          <p>Just earned the Legacy JavaScript Algorithms and Data Structures certification from freeCodeCamp! This certification covered core JavaScript concepts such as variables, functions, loops, arrays, objects, class, and algorithmic problem-solving.</p>
        </div>
        <div className='border rounded-2xl p-4 md:p-6'>
          <img src={suC} alt="" />
          <p>At Sonargaon University, programming contest (SU CSE Fest 2025 - Programming Contest) I secured my place <span className='heading'>4<sup>th</sup></span> position.</p>
        </div>
        <div className='border rounded-2xl p-4 md:p-6'>
          <img src={phC} alt="" />
          <p>I successfully completed my web development journey from Programming Hero and gathered a lot of sills and did many interesting projects.</p>
        </div>
      </section>

    </div>
  )
}
