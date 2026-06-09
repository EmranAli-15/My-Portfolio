import cpp from '../../assets/cpp.svg'
import brain from '../../assets/brain.svg'
import py from '../../assets/py.svg'
import js from '../../assets/js.svg'
import suC from '../../assets/certificates/suC.jpeg'
import fccC from '../../assets/certificates/fccC.png'
import phC from '../../assets/certificates/phC.png'
import coderHuntFall from '../../assets/certificates/me.png'
import coderHuntFallS from '../../assets/certificates/coderHuntSecond.png'
import pythonFcc from '../../assets/certificates/pythonFccC.png'

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

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-5'>

        {/* C/C++ Section */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1'>
          <div className='flex items-center justify-center mb-3 h-12'>
            <img className='h-12 w-auto object-contain' src={cpp} alt="C/C++ Logo" />
          </div>
          <h2 className='text-xl font-bold text-center mb-2'>C/C++ Programming</h2>
          <p className='text-sm leading-relaxed opacity-80 text-justify'>
            I've well known idea about C and C++ programming. Every day I solve problem by this language on Toph. And was <span className='text-orange-500 font-bold'>2nd and 4th</span> in inter-university programming contest.
          </p>
        </div>

        {/* JavaScript Section */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1'>
          <div className='flex items-center justify-center mb-3 h-12'>
            <img className='h-10 w-auto object-contain' src={js} alt="JavaScript Logo" />
          </div>
          <h2 className='text-xl font-bold text-center mb-2'>JavaScript & Full-Stack</h2>
          <p className='text-sm leading-relaxed opacity-80 text-justify'>
            A dedicated full-stack developer specializing in the modern JS ecosystem, including <span className='font-semibold'>Next.js, React.js, React Native, and Express.js</span>. Certified by <span className='font-bold text-orange-500'>FreeCodeCamp</span>, with extensive experience driving production-ready applications enhanced by cutting-edge AI integrations.
          </p>
        </div>

        {/* Python Section */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1'>
          <div className='flex items-center justify-center mb-3 h-12'>
            <img className='h-12 w-auto object-contain' src={py} alt="Python Logo" />
          </div>
          <h2 className='text-xl font-bold text-center mb-2'>Python Programming</h2>
          <p className='text-sm leading-relaxed opacity-80 text-justify'>
            Successfully achieved official certification from <span className='font-bold text-orange-500'>FreeCodeCamp</span> in Python. Proficient in basic syntax, Object-Oriented Programming (OOP) architectures, and currently solving complex data structure challenges to migrate logical patterns mastered in C/C++.
          </p>
        </div>

        {/* Problem Solving Section */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1'>
          <div className='flex items-center justify-center mb-3 h-12'>
            <img className='h-12 w-auto object-contain' src={brain} alt="Problem Solving Icon" />
          </div>
          <h2 className='text-xl font-bold text-center mb-2'>Problem Solving</h2>
          <p className='text-sm leading-relaxed opacity-80 text-justify mb-4'>
            Solved over <span className='font-bold text-orange-500'>190+ problems</span> on Toph.co across diverse domains, including Binary Search, Linear Data Structures, Game Theory, Ad-hoc logic, Brute Force, Geometry, and Mathematics.
          </p>
          <div className='mt-auto pt-2 text-center'>
            <Link
              className='inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-indigo-400 hover:underline'
              target='_blank'
              to="https://toph.co/u/Emran_"
            >
              View Toph Profile 🚀
            </Link>
          </div>
        </div>

      </section>



      <p className='text-center mt-20'><strong className='heading text-xl underline'>My Achievements</strong></p>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5'>

        {/* 1. SUPC Coder Hunt - Award Certificate */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden'>
          <div className='overflow-hidden rounded-xl mb-4'>
            <img className='w-full object-cover object-bottom max-h-56 group-hover:scale-105 transition-transform duration-300' src={coderHuntFall} alt="SUPC Coder Hunt Certificate" />
          </div>
          <div className='flex-grow'>
            <h3 className='heading text-center mb-2'>SUPC Coder Hunt Fall-25 (Official Certificate)</h3>
            <p className='text-sm leading-relaxed opacity-80 text-justify'>
              Proudly secured the <span className='font-bold text-orange-500'>2nd Position</span> in the 'SUPC Coder Hunt Fall-25' Intra-University Programming Contest, competing against top-tier problem solvers under rigorous algorithmic evaluation.
            </p>
          </div>
        </div>

        {/* 2. FreeCodeCamp JavaScript Certification */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden'>
          <div className='overflow-hidden rounded-xl mb-4'>
            <img className='w-full object-cover object-top max-h-56 group-hover:scale-105 transition-transform duration-300' src={fccC} alt="FreeCodeCamp JS Certification" />
          </div>
          <div className='flex-grow'>
            <h3 className='heading text-center mb-2'>Legacy JavaScript Algorithms & Data Structures</h3>
            <p className='text-sm leading-relaxed opacity-80 text-justify'>
              Earned from <span className='font-bold text-orange-500'>freeCodeCamp</span>. This intensive certification validates deep technical expertise in core JavaScript architectures, OOP concepts, functional programming, and automated algorithmic problem-solving.
            </p>
          </div>
        </div>

        {/* 3. FreeCodeCamp Python Certification */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden'>
          <div className='overflow-hidden rounded-xl mb-4'>
            <img className='w-full object-cover object-top max-h-56 group-hover:scale-105 transition-transform duration-300' src={pythonFcc} alt="FreeCodeCamp Python Certification" />
          </div>
          <div className='flex-grow'>
            <h3 className='heading text-center mb-2'>Legacy Python Developer Certification</h3>
            <p className='text-sm leading-relaxed opacity-80 text-justify'>
              Issued by <span className='font-bold text-orange-500'>freeCodeCamp</span>. Comprehensively covers advanced Python scripting syntax, dynamic data structures (Lists, Dictionaries), class objects, and clean logical computation.
            </p>
          </div>
        </div>

        {/* 4. SUPC Coder Hunt - Success Moment/Trophy */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden'>
          <div className='overflow-hidden rounded-xl mb-4'>
            <img className='w-full object-cover object-top max-h-56 group-hover:scale-105 transition-transform duration-300' src={coderHuntFallS} alt="SUPC Coder Hunt Podium" />
          </div>
          <div className='flex-grow'>
            <h3 className='heading text-center mb-2'>SUPC Coder Hunt Fall-25 (Achievement Award)</h3>
            <p className='text-sm leading-relaxed opacity-80 text-justify'>
              A memorable moment receiving the prestige of <span className='font-bold text-orange-500'>Runner-Up (2nd Place)</span> at the university's premier technical flagship event for outstanding performance in dynamic competitive programming.
            </p>
          </div>
        </div>

        {/* 5. Sonargaon University Programming Contest */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden'>
          <div className='overflow-hidden rounded-xl mb-4'>
            <img className='w-full object-cover object-top max-h-56 group-hover:scale-105 transition-transform duration-300' src={suC} alt="Sonargaon University Certificate" />
          </div>
          <div className='flex-grow'>
            <h3 className='heading text-center mb-2'>SU CSE Fest Programming Contest</h3>
            <p className='text-sm leading-relaxed opacity-80 text-justify'>
              Successfully secured the distinguished <span className='font-bold text-orange-500'>4th Position</span> at the Sonargaon University Programming Contest (SU CSE Fest), evaluating rapid problem-solving skills under strict time-complexities.
            </p>
          </div>
        </div>

        {/* 6. Programming Hero Web Development */}
        <div className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden'>
          <div className='overflow-hidden rounded-xl mb-4'>
            <img className='w-full object-cover object-top max-h-56 group-hover:scale-105 transition-transform duration-300' src={phC} alt="Programming Hero Certificate" />
          </div>
          <div className='flex-grow'>
            <h3 className='heading text-center mb-2'>Full-Stack Web Development Journey</h3>
            <p className='text-sm leading-relaxed opacity-80 text-justify'>
              Graduated from <span className='font-bold text-orange-500'>Programming Hero</span>. Acquired end-to-end industry-standard development skills, launching multiple production-ready full-stack applications with state management and secure backends.
            </p>
          </div>
        </div>

      </section>

    </div>
  )
}
