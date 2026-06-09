import { Link } from 'react-router'

export default function Resume() {
  return (
    <div className='themed-bg p-4 md:p-8 rounded-2xl mb-15 shadow-sm border max-w-5xl mx-auto'>

      {/* Top Header & Quick Print Button */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-black/10 dark:border-white/10 pb-6 mb-6 gap-4'>
        <div>
          <h1 className='text-3xl font-extrabold tracking-tight heading mb-1'>MD. EMRAN ALI</h1>
          <p className='text-sm opacity-80 font-medium'>Full-Stack Developer | Software Engineer</p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>

        {/* LEFT COLUMN */}
        <div className='space-y-6 md:space-y-8'>

          {/* EXPERIENCE SECTION */}
          <div>
            <h2 className="text-xl font-bold heading border-b-2 border-indigo-500 pb-1 mb-3">Work Experience</h2>
            <div className='group rounded-xl p-4 bg-black/5 dark:bg-white/5 border transition-all duration-200'>
              <h3 className='font-bold text-base'>React.js Developer Intern</h3>
              <p className='text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2'>Writo Education Private Ltd. | Jun 2023 – Aug 2023</p>
              <ul className="space-y-1.5 text-sm opacity-80">
                <li className="list-disc ml-4 text-justify">Worked for dynamic UI components using <span className='font-semibold'>React.js</span> and <span className='font-semibold'>Tailwind CSS</span> for optimal performance.</li>
                <li className="list-disc ml-4 text-justify">Successfully led a cross-functional 3-member developer team to deploy an educational module under critical deadlines.</li>
                <li className="list-disc ml-4 text-justify">Identified bottlenecks, refactored core codebase.</li>
              </ul>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div>
            <h2 className="text-xl font-bold heading border-b-2 border-indigo-500 pb-1 mb-3">Education</h2>
            <div className='space-y-4'>
              <div className='p-4 rounded-xl bg-black/5 dark:bg-white/5 border'>
                <h3 className='font-bold text-base'>B.Sc. in Computer Science & Engineering</h3>
                <p className='text-sm opacity-90 font-medium'>Sonargaon University</p>
                <span className='inline-block text-xs font-semibold px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-md mt-1'>2024 - Present</span>
              </div>
              <div className='p-4 rounded-xl bg-black/5 dark:bg-white/5 border'>
                <h3 className='font-bold text-base'>Higher Secondary Certificate (HSC)</h3>
                <p className='text-sm opacity-90'>Uttara High School & College</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className='space-y-6 md:space-y-8'>

          {/* TECH SKILLS SECTION */}
          <div>
            <h2 className="text-xl font-bold heading border-b-2 border-indigo-500 pb-1 mb-3">Technical Skills</h2>
            <div className='space-y-3 text-sm'>
              <p className='leading-relaxed'>
                <strong className='block text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-0.5'>Languages</strong>
                <span className='opacity-90'>JavaScript (ES6+), TypeScript, C/C++, Python (OOP).</span>
              </p>
              <p className='leading-relaxed'>
                <strong className='block text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-0.5'>Libraries & Frameworks</strong>
                <span className='opacity-90'>Next.js, React.js, React Native, Express.js, Custom In-Memory Caching (HashMap architecture), Mongoose, Redux, NextAuth, Firebase, Tailwind CSS, JWT, Zod, Joe.</span>
              </p>
              <p className='leading-relaxed'>
                <strong className='block text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-0.5'>Databases</strong>
                <span className='opacity-90'>MongoDB, SQLite, PostgreSQL, ChromaDB.</span>
              </p>
            </div>
          </div>

          {/* CERTIFICATIONS & COMPETITIONS */}
          <div>
            <h2 className="text-xl font-bold heading border-b-2 border-indigo-500 pb-1 mb-3">Certifications & Contests</h2>
            <ul className="space-y-3 text-sm">
              <li className="list-disc ml-4 text-justify">
                <span className='font-semibold'>Legacy JavaScript Algorithms & Data Structures</span> — Verified by <span className="font-semibold text-orange-500 dark:text-indigo-400">freeCodeCamp</span>.
              </li>
              <li className="list-disc ml-4 text-justify">
                <span className='font-semibold'>Python Developer Certification</span> — Verified by <span className="font-semibold text-orange-500 dark:text-indigo-400">freeCodeCamp</span>.
              </li>
              <li className="list-disc ml-4 text-justify">
                <span className='font-semibold'>Full-Stack Web Development Certificate</span> — <span className="font-semibold text-orange-500">Programming Hero</span>.
              </li>
              <li className="list-disc ml-4">
                <span className='font-semibold'>Competitive Programming Core Achievements</span> — <span className='font-medium opacity-90'>Sonargaon University:</span>
                <div className="mt-1 pl-4 space-y-1 text-xs border-l-2 border-amber-500/40">
                  <p>🏆 <span className="font-bold text-amber-500 dark:text-amber-400">4th Position</span> in SU CSE Fest 2025 Programming Contest</p>
                  <p>🏅 <span className="font-bold text-amber-500 dark:text-amber-400">2nd Position</span> in SUPC Coder Hunt-Fall25</p>
                  <p>🚀 Solved <span className='font-semibold text-indigo-500'>190+ problems</span> on Toph.co (<Link className='underline hover:text-indigo-500' target='_blank' to="https://toph.co/u/Emran_">View Profile</Link>)</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}