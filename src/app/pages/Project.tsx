import { Link } from 'react-router'
import recipe from '../../assets/projects/recipe.png'
import graph from '../../assets/projects/graph.png'
import tictactoe from '../../assets/projects/tictactoe.png'
import memory from '../../assets/projects/memory.png'
import rockpaper from '../../assets/projects/rockpaper.png'
import hash from '../../assets/projects/hash.png'


export default function Project() {
    return (
        <div className='themed-bg p-4 md:p-6 rounded-2xl mb-15'>
            <section>
                <h1 className='heading text-xl'>My projects</h1>
                <div className='flex items-center'>
                    <div className='h-1 w-4 bg-amber-500 rounded-l-2xl'></div>
                    <div className='h-1 w-8 bg-blue-700 rounded-r-2xl'></div>
                </div>
            </section>


            <section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-5'>
                <div className='border rounded-2xl p-4 md:p-6'>
                    <div className='flex items-center justify-center'>
                        <img className='w-full object-cover object-top h-48' src={recipe} alt="" />
                    </div>
                    <h1 className='heading text-center my-1'>RECIPE</h1>
                    <p><span className='heading'>Tech:</span> Next.js, Express.js, MongoDB, NextAuth, TypeScript, AI.</p>
                    <p>(full responsive)</p>
                    <div className='flex items-center justify-evenly mt-5 text-blue-700'>
                        <Link
                            target='blank'
                            to="https://github.com/EmranAli-15/recipeShare-client.git"
                            className='hover:underline'>
                            Client repo
                        </Link>
                        <Link
                            target='blank'
                            to="https://github.com/EmranAli-15/recipeShare-server.git"
                            className='hover:underline'>
                            Server repo
                        </Link>
                        <Link
                            target='blank'
                            to="https://foodrecipe-client.vercel.app/"
                            className='hover:underline'>
                            Live
                        </Link>
                    </div>
                </div>

                <div className='border rounded-2xl p-4 md:p-6'>
                    <div className='flex items-center justify-center'>
                        <img className='w-full object-cover object-top h-48' src={graph} alt="" />
                    </div>
                    <h1 className='heading text-center my-1'>2D graph generator</h1>
                    <p><span className='heading'>Tech:</span> React.js, TailWind CSS, AI. Used AI for solve equation.</p>
                    <p>(full responsive)</p>
                    <div className='flex items-center justify-evenly mt-5 text-blue-700'>
                        <Link
                            target='blank'
                            to="https://github.com/EmranAli-15/graph-generator.git"
                            className='hover:underline'>
                            Client repo
                        </Link>
                        <Link
                            target='blank'
                            to="https://github.com/EmranAli-15/graph-generator-server.git"
                            className='hover:underline'>
                            Server repo
                        </Link>
                        <Link
                            target='blank'
                            to="https://flourishing-hotteok-ace9ab.netlify.app/"
                            className='hover:underline'>
                            Live
                        </Link>
                    </div>
                </div>

                <div className='border rounded-2xl p-4 md:p-6'>
                    <div className='flex items-center justify-center'>
                        <img className='w-full object-cover object-top h-48' src={tictactoe} alt="" />
                    </div>
                    <h1 className='heading text-center my-1'>Tic-Tac-Toe</h1>
                    <p><span className='heading'>Tech:</span> React.js, TailwindCSS (No external AI or library).</p>
                    <strong className='italic'>(Device will play against you)</strong>
                    <div className='flex items-center justify-evenly mt-5 text-blue-700'>
                        <Link
                            target='blank'
                            to="https://github.com/EmranAli-15/Tic-Tac-Toe.git"
                            className='hover:underline'>
                            Repository
                        </Link>
                        <Link
                            target='blank'
                            to="https://mellifluous-paprenjak-0c2914.netlify.app/"
                            className='hover:underline'>
                            Live
                        </Link>
                    </div>
                </div>

                <div className='border rounded-2xl p-4 md:p-6'>
                    <div className='flex items-center justify-center'>
                        <img className='w-full object-cover object-top h-48' src={memory} alt="" />
                    </div>
                    <h1 className='heading text-center my-1'>Memory match</h1>
                    <p><span className='heading'>Tech:</span> React.js, TailwindCSS.</p>
                    <p className='italic'>(Let's sharp your memory)</p>
                    <div className='flex items-center justify-evenly mt-5 text-blue-700'>
                        <Link
                            target='blank'
                            to="https://github.com/EmranAli-15/MemoryMatch.git"
                            className='hover:underline'>
                            Repository
                        </Link>
                        <Link
                            target='blank'
                            to="https://heartfelt-malabi-21d676.netlify.app/"
                            className='hover:underline'>
                            Live
                        </Link>
                    </div>
                </div>

                <div className='border rounded-2xl p-4 md:p-6'>
                    <div className='flex items-center justify-center'>
                        <img className='w-full object-cover object-bottom h-48' src={rockpaper} alt="" />
                    </div>
                    <h1 className='heading text-center my-1'>Rock-Paper-Scissor</h1>
                    <p><span className='heading'>Tech:</span> React.js, TailwindCSS (No external AI or library).</p>
                    <strong className='italic'>(Device will play against you)</strong>
                    <div className='flex items-center justify-evenly mt-5 text-blue-700'>
                        <Link
                            target='blank'
                            to="https://github.com/EmranAli-15/RockPaperScissor.git"
                            className='hover:underline'>
                            Repository
                        </Link>
                        <Link
                            target='blank'
                            to="https://zingy-pony-3ad8a5.netlify.app/"
                            className='hover:underline'>
                            Live
                        </Link>
                    </div>
                </div>

                <div className='border rounded-2xl p-4 md:p-6'>
                    <div className='flex items-center justify-center'>
                        <img className='w-full object-cover object-top h-48' src={hash} alt="" />
                    </div>
                    <h1 className='heading text-center my-1'>Hash text generator</h1>
                    <p><span className='heading'>Tech:</span> React.js, Express.js (No external AI or library).</p>
                    <strong className='italic'>(Make strong password by providing simple password)</strong>
                    <div className='flex items-center justify-evenly mt-5 text-blue-700'>
                        <Link
                            target='blank'
                            to="https://github.com/EmranAli-15/hash-generator-client.git"
                            className='hover:underline'>
                            Client repo
                        </Link>
                        <Link
                            target='blank'
                            to="https://github.com/EmranAli-15/hash-generator-server.git"
                            className='hover:underline'>
                            Server repo
                        </Link>
                        <Link
                            target='blank'
                            to="https://dreamy-frangollo-bc87d7.netlify.app/"
                            className='hover:underline'>
                            Live
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
