import cpp from '../../assets/cpp.svg'
import brain from '../../assets/brain.svg'
import py from '../../assets/py.svg'
import js from '../../assets/js.svg'

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
          I'm a full stack web developer and also have problem solving skills. In my university programming contest (SU inter-university programming contest 2025) I was 4<sup>th</sup>. I also did an internship as a frontend developer and played a role as a team leader. I did many project with AI features. Go to my project section, you will see everything.
        </p>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        <div className='border rounded-2xl p-4 md:p-6'>
          <div className='flex items-center justify-center'><img className='size-12' src={cpp} alt="" /></div>
          <h1 className='heading text-center text-cl'>C/C++</h1>
          <p>I've well known idea about C and C++ programming. Every day I try to solve problem by this two language and was 4<sup>th</sup> in inter-university programming contest.</p>
        </div>
        <div className='border rounded-2xl p-4 md:p-6'>
          <div className='flex items-center justify-center'><img className='size-10' src={js} alt="" /></div>
          <h1 className='heading text-center text-cl'>JavaScript</h1>
          <p>I'm a full time JS developer with most popular library Next.JS, React.JS and Express.JS. I did many project with React.JS and Next.JS and Integrate AI for bring it into next level.</p>
        </div>
        <div className='border rounded-2xl p-4 md:p-6'>
          <div className='flex items-center justify-center'><img className='size-12' src={py} alt="" /></div>
          <h1 className='heading text-center text-cl'>Python</h1>
          <p>Right now I'm in a beginner level in Python programming. All the basic syntax I learned and now learning Python OOP and try to solve some problem which I already did with C and C++.</p>
        </div>
        <div className='border rounded-2xl p-4 md:p-6'>
          <div className='flex items-center justify-center'><img className='size-12' src={brain} alt="" /></div>
          <h1 className='heading text-center text-cl'>Problem Solve</h1>
          <p>I solved 100+ problem in a website named 'Toph.co'. I solved here many types of problem such as binary search, linier data structure, game theory, Ad-hoc, Brute force, geometry, math etc. <Link className='underline text-blue-500' target='black' to="https://toph.co/u/Emran_">my profile</Link></p>
        </div>
      </section>

    </div>
  )
}
