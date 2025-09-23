
export default function Resume() {
  return (
    <div className='themed-bg p-4 md:p-6 rounded-2xl mb-15'>
      <div>
        <h1 className="heading underline">Experience:</h1>
        <strong>React.js Developer Intern — Writo Education Private Ltd. [Jun 2023 – Aug 2023]</strong>
        <ul className="ml-4">
          <li className="list-disc">Developed UI components using React.js and Tailwind CSS.</li>
          <li className="list-disc">Led a 3-member team to build an educational project under tight deadlines.</li>
          <li className="list-disc">Fixed bugs and made the site user-friendly.</li>
        </ul>
      </div>


      <div>
        <h1 className="heading underline mt-3">Tech Skills:</h1>
        <p><strong>Languages:</strong> C/C++, JavaScript, TypeScript, Python.</p>
        <p><strong>Libraries:</strong> React.JS, Next.JS, React Native, Mongoose, Express.JS, Firebase, Redux, NextAUth, TailwindCSS.</p>
        <p><strong>Database:</strong> MongoDB, SQL, Expo-SQLite and familiar with MySQL & PostgreSQL.</p>
      </div>

      <div>
        <h1 className="heading underline mt-3">Certifications:</h1>
        <ul className="ml-4">
          <li className="list-disc">Legacy JavaScript Algorithm and Data Structures - <span className="heading">FreeCodeCamp</span></li>
          <li className="list-disc">Programming Contest - <span className="heading">Sonargaon University</span></li>
          <div className="relative left-4">
            <p>- <span className="heading">4<sup>th</sup></span> in SU CSE Fest 2025 - Programming Contest</p>
            <p>- <span className="heading">2<sup>nd</sup></span> in SUPC Coder Hunt-Fall25</p>
          </div>
          <li className="list-disc">Web Development - <span className="heading">Programming Hero</span></li>
        </ul>
      </div>

      <div>
        <h1 className="heading underline mt-3">Education:</h1>
        <p>Bsc in CSE - Sonargaon University</p>
        <small className="ml-4">2024 - present</small>
        <p>HSC - Uttara High School & College</p>
      </div>

      <div>

      </div>

    </div>
  )
}
