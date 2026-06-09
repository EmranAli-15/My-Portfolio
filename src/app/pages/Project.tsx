import { useState } from 'react'
import { Link } from 'react-router'
import recipe from '../../assets/projects/recipe.png'
import graph from '../../assets/projects/graph.png'
import tictactoe from '../../assets/projects/tictactoe.png'
import memory from '../../assets/projects/memory.png'
import rockpaper from '../../assets/projects/rockpaper.png'
import hash from '../../assets/projects/hash.png'
import bookWorld from '../../assets/projects/bookWorld.png'
import taskManager from '../../assets/projects/taskManager.png'
import taskManagerMobile from '../../assets/projects/mobileApp/two.jpg'
import tastManagerMobileOffline from "../../assets/projects/mobileApp/taskManagerOffline/two.jpg"
import vendingMachine from "../../assets/projects/vendingMachine.png"

export default function Project() {
    // Tab State (Default: full-stack)
    const [activeTab, setActiveTab] = useState('full-stack');

    const web_projects = [
        {
            "image": bookWorld,
            "name": "Book World",
            "tech": "Next.js, Express.js, Flask, MongoDB, NextAuth, TypeScript, Gemini AI",
            "summary": "A fully responsive with SSR, SSG for SEO friendly and role-based e-commerce platform featuring dedicated dynamic dashboards for Admin and Users.",
            "highlight": "AI-Powered RAG Integration: Features an intelligent chatbot capable of answering user queries instantly based on website and book data via MongoDB Vector Search.",
            "links": {
                "client": "https://github.com/EmranAli-15/BookWorld-client.git",
                "server": "https://github.com/EmranAli-15/BookWorld-server.git",
                "live": "https://bookworld-client.vercel.app/"
            }
        },
        {
            "image": recipe,
            "name": "RecipeShare",
            "tech": "Next.js, Express.js, MongoDB, NextAuth, TypeScript, DeepSeek AI",
            "summary": "A fully responsive recipe-sharing platform featuring interactive, role-based dashboards for users to manage.",
            "highlight": "AI-Driven Recipe Generation: Powered by DeepSeek AI to automatically generate personalized, step-by-step recipes based on user-inputted kitchen ingredients.",
            "links": {
                "client": "https://github.com/EmranAli-15/recipeShare-client.git",
                "server": "https://github.com/EmranAli-15/recipeShare-server.git",
                "live": "https://foodrecipe-client.vercel.app/"
            }
        },
        {
            "image": graph,
            "name": "2D Graph Generator",
            "tech": "React.js, Tailwind CSS, Node.js/Express.js, Gemini AI",
            "summary": "An interactive data visualization platform that plots fully responsive 2D graphs from raw dynamic data and complex mathematical equations.",
            "highlight": "AI-Powered Equation Solver: Integrates Gemini AI to parse, interpret, and solve user-submitted mathematical equations into structured (X, Y) coordinate datasets for real-time rendering.",
            "links": {
                "client": "https://github.com/EmranAli-15/graph-generator.git",
                "server": "https://github.com/EmranAli-15/graph-generator-server.git",
                "live": "https://flourishing-hotteok-ace9ab.netlify.app/"
            }
        },
        {
            "image": taskManager,
            "name": "Task Manager",
            "tech": "React.js, Express.js, MongoDB, TypeScript, Tailwind CSS",
            "summary": "A fully responsive full-stack task management application designed for streamlined workflow control, deadline tracking, and task organization.",
            "links": {
                "client": "https://github.com/EmranAli-15/task-manager-client.git",
                "server": "https://github.com/EmranAli-15/task-manager-server.git",
                "live": "https://jovial-cactus-42f6ea.netlify.app/"
            }
        },
        {
            "image": hash,
            "name": "Hash Text Generator",
            "tech": "React.js, Express.js, Tailwind CSS",
            "summary": "A fast and responsive client-server utility application built to handle cryptographic string hashing and secure password generation.",
            "highlight": "Zero-Library Core Logic: Implements native custom algorithms to safely transform plain text inputs into highly complex, strong password strings.",
            "links": {
                "client": "https://github.com/EmranAli-15/hash-generator-client.git",
                "server": "https://github.com/EmranAli-15/hash-generator-server.git",
                "live": "https://emran-hash-generator.netlify.app/"
            }
        },
    ];

    const mobile_apps = [
        {
            "image": taskManagerMobile,
            "name": "Notion (Task Manager Mobile)",
            "tech": "React Native, TypeScript, Mongo-Express Server",
            "summary": "A robust, multi-platform full-stack mobile application tailored for agile project management and real-time task tracking.",
            "highlight": "Cross-Platform Sync: Smoothly synchronizes live mobile data updates directly with a dedicated Mongo-Express backend server environment.",
            "inside": "/taskManagerMobileApp"
        },
        {
            "image": tastManagerMobileOffline,
            "name": "Offline Notes Keeper",
            "tech": "React Native, SQLite, TypeScript",
            "summary": "A specialized, standalone productivity mobile app developed for taking secure notes and organizing tasks without any internet connection.",
            "highlight": "Local Storage Excellence: Implements SQLite database configurations to handle offline data persistence and seamless database reads/writes on-device.",
            "inside": "/taskManagerMobileAppOffline"
        },
    ];

    const web_games = [
        {
            "image": vendingMachine,
            "name": "Self-Vending Machine Simulator",
            "tech": "React.js, Tailwind CSS, Greedy Algorithm",
            "summary": "An interactive simulation demonstrating the inner mechanics of a self-vending machine, complete with automated product dispensing and dynamic cash drawer validation.",
            "highlight": "Optimized Change Generation: Implements the Greedy Algorithm to calculate and dispense the remaining balance using the fewest possible currency notes/coins from highest to lowest denominations, while continuously monitoring real-time inventory limits.",
            "links": {
                "client": "https://github.com/EmranAli-15/vending-machine",
                "server": "",
                "live": "https://emranali-vending-machine.netlify.app/"
            }
        },
        {
            "image": tictactoe,
            "name": "Tic-Tac-Toe AI",
            "tech": "React.js, Tailwind CSS",
            "summary": "An interactive, single-player Tic-Tac-Toe game where users can challenge an intelligent computer opponent.",
            "highlight": "Custom Strategic Bot: Built entirely with custom, zero-library algorithmic logic (inspired by the Minimax algorithm) that dynamically blocks user moves and takes offensive actions to win.",
            "links": {
                "client": "https://github.com/EmranAli-15/Tic-Tac-Toe.git",
                "server": "",
                "live": "https://mellifluous-paprenjak-0c2914.netlify.app/"
            }
        },
        {
            "image": memory,
            "name": "Memory Match Challenge",
            "tech": "React.js, Tailwind CSS",
            "summary": "A fast-paced brain-training game designed to test and improve visual memory through interactive card-flipping mechanics.",
            "highlight": "State-Driven Game Loop: Features a brief 'sneak-peek' phase at startup, real-time grid state synchronization, and a custom negative-scoring system for incorrect matches.",
            "links": {
                "client": "https://github.com/EmranAli-15/MemoryMatch.git",
                "server": "",
                "live": "https://heartfelt-malabi-21d676.netlify.app/"
            }
        },
        {
            "image": rockpaper,
            "name": "Rock-Paper-Scissors",
            "tech": "React.js, Tailwind CSS",
            "summary": "A modern, responsive digital adaptation of the classic hand-game played against a simulated machine opponent.",
            "highlight": "Pseudo-Random Decision Engine: Utilizes algorithmic math randomization to simulate real-time, unpredictable machine choices alongside instant win/loss condition evaluation.",
            "links": {
                "client": "https://github.com/EmranAli-15/RockPaperScissor.git",
                "server": "",
                "live": "https://zingy-pony-3ad8a5.netlify.app/"
            }
        },
    ];

    return (
        <div className='themed-bg p-4 md:p-6 rounded-2xl mb-15'>
            {/* Header Section */}
            <section className='mb-8'>
                <h1 className='heading text-xl'>My projects</h1>
                <div className='flex items-center mt-1'>
                    <div className='h-1 w-4 bg-amber-500 rounded-l-2xl'></div>
                    <div className='h-1 w-8 bg-blue-700 rounded-r-2xl'></div>
                </div>
            </section>

            {/* Dynamic Tabs Navigation */}
            <div className='flex flex-wrap gap-2 md:gap-4 border-b border-black/10 dark:border-white/10 pb-4 mb-8 text-sm font-medium'>
                <button
                    onClick={() => setActiveTab('full-stack')}
                    className={`px-4 py-2 rounded-xl transition-all duration-200 capitalize ${activeTab === 'full-stack' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'}`}
                >
                    🖥️ Web Full-Stack
                </button>
                <button
                    onClick={() => setActiveTab('mobile')}
                    className={`px-4 py-2 rounded-xl transition-all duration-200 capitalize ${activeTab === 'mobile' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'}`}
                >
                    📱 Mobile Apps
                </button>
                <button
                    onClick={() => setActiveTab('games')}
                    className={`px-4 py-2 rounded-xl transition-all duration-200 capitalize ${activeTab === 'games' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'}`}
                >
                    🕹️ Games & Logic Labs
                </button>
            </div>

            {/* TAB CONTENT: WEB FULL-STACK */}
            {activeTab === 'full-stack' && (
                <section className='grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn'>
                    {web_projects.map((p, index) => (
                        <div key={index} className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full transform hover:-translate-y-1'>
                            <div className='overflow-hidden rounded-xl mb-4 bg-opacity-10 bg-black/5 dark:bg-white/5'>
                                <img className='w-full object-cover object-top h-48 group-hover:scale-105 transition-transform duration-300' src={p.image} alt={p.name} />
                            </div>
                            <div className='flex-grow'>
                                <h2 className='heading text-center mb-2'>{p.name}</h2>
                                <p className='text-sm mb-3 opacity-90'>
                                    <span className='font-semibold text-[16px]'>Tech: </span>
                                    <span className='text-indigo-400 text-[16px] font-medium'>{p.tech}</span>
                                </p>
                                {
                                    p.highlight && <div className='bg-indigo-500/10 border-l-4 border-indigo-500 p-3 rounded-r-lg my-3'>
                                        <p className='text-sm font-medium'>✨ {p.highlight}</p>
                                    </div>
                                }
                                <p className='text-sm leading-relaxed opacity-80'>{p.summary}</p>
                            </div>
                            <div className='flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-4 mt-5'>
                                <div className='flex gap-4 text-sm font-medium opacity-80'>
                                    {p.links.client && <Link target='_blank' to={p.links.client} className='hover:text-indigo-500 transition-colors duration-200 flex items-center gap-1'>📁 Client</Link>}
                                    {p.links.server && <Link target='_blank' to={p.links.server} className='hover:text-indigo-500 transition-colors duration-200 flex items-center gap-1'>⚙️ Server</Link>}
                                </div>
                                {p.links.live && (
                                    <Link target='_blank' to={p.links.live} className='inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80 shadow-sm'>
                                        Live Demo 🚀
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {/* TAB CONTENT: MOBILE APPS */}
            {activeTab === 'mobile' && (
                <section className='grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn'>
                    {mobile_apps.map((p, index) => (
                        <div key={index} className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full transform hover:-translate-y-1 relative overflow-hidden'>
                            <div className='-rotate-45 absolute bg-orange-500 text-white font-bold text-[10px] tracking-wider px-6 py-1 top-3 -left-[28px] uppercase shadow-sm z-10'>
                                Mobile
                            </div>
                            <div className='overflow-hidden rounded-xl mb-4 bg-opacity-10 bg-black/5 dark:bg-white/5'>
                                <img className='w-full object-cover object-top h-48 group-hover:scale-105 transition-transform duration-300' src={p.image} alt={p.name} />
                            </div>
                            <div className='flex-grow'>
                                <h2 className='text-xl font-bold mb-2 pl-4'>{p.name}</h2>
                                <p className='text-sm mb-3 opacity-90'>
                                    <span className='font-semibold'>Tech: </span>
                                    <span className='text-indigo-600 dark:text-indigo-400 font-medium'>{p.tech}</span>
                                </p>
                                <div className='bg-indigo-500/10 border-l-4 border-indigo-500 p-3 rounded-r-lg my-3'>
                                    <p className='text-sm font-medium'>📱 {p.highlight}</p>
                                </div>
                                <p className='text-sm leading-relaxed opacity-80'>{p.summary}</p>
                            </div>
                            <div className='flex items-center justify-end border-t border-black/10 dark:border-white/10 pt-4 mt-5'>
                                <Link to={p.inside} className='inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80 shadow-sm'>
                                    Go Inside 🔎
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {/* TAB CONTENT: WEB GAMES */}
            {activeTab === 'games' && (
                <section className='grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn'>
                    {web_games.map((p, index) => (
                        <div key={index} className='group border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full transform hover:-translate-y-1'>
                            <div className='overflow-hidden rounded-xl mb-4 bg-opacity-10 bg-black/5 dark:bg-white/5'>
                                <img className='w-full object-cover object-top h-48 group-hover:scale-105 transition-transform duration-300' src={p.image} alt={p.name} />
                            </div>
                            <div className='flex-grow'>
                                <h2 className='text-xl font-bold mb-2'>{p.name}</h2>
                                <p className='text-sm mb-3 opacity-90'>
                                    <span className='font-semibold'>Tech: </span>
                                    <span className='text-indigo-400 font-medium'>{p.tech}</span>
                                </p>
                                <div className='bg-indigo-500/10 border-l-4 border-indigo-500 p-3 rounded-r-lg my-3'>
                                    <p className='text-sm font-medium'>🎮 {p.highlight}</p>
                                </div>
                                <p className='text-sm leading-relaxed opacity-80'>{p.summary}</p>
                            </div>
                            <div className='flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-4 mt-5'>
                                <div className='flex gap-4 text-sm font-medium opacity-80'>
                                    {p.links.client && <Link target='_blank' to={p.links.client} className='hover:text-indigo-500 transition-colors duration-200 flex items-center gap-1'>📁 Client</Link>}
                                    {p.links.server && <Link target='_blank' to={p.links.server} className='hover:text-indigo-500 transition-colors duration-200 flex items-center gap-1'>⚙️ Server</Link>}
                                </div>
                                {p.links.live && (
                                    <Link target='_blank' to={p.links.live} className='inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80 shadow-sm'>
                                        Play Game 🕹️
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            )}
        </div>
    )
}