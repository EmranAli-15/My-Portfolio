import { Link } from 'react-router'
import one from "../../assets/projects/mobileApp/taskManagerOffline/one.jpg"
import two from "../../assets/projects/mobileApp/taskManagerOffline/two.jpg"
import three from "../../assets/projects/mobileApp/taskManagerOffline/three.jpg"
import four from "../../assets/projects/mobileApp/taskManagerOffline/four.jpg"

export default function TaskManager() {

    const images = [one, two, three, four];

    return (
        <div className='border rounded-2xl p-4 md:p-6'>

            <h1 className='heading text-center my-1'>Task Manager</h1>
            <p><span className='heading'>Tech:</span> React Native (Expo), TypeScript, SQLite</p>
            <div className='flex items-center justify-evenly mt-5 text-blue-700'>
                <Link
                    target='blank'
                    to="https://github.com/EmranAli-15/TaskManagerOffline.git"
                    className='hover:underline'>
                    Repo
                </Link>
                <Link
                    target='blank'
                    to="https://drive.google.com/file/d/1Al_6lcunbxZv7o2vSmRnAzqgxp9Cusc7/view?usp=drive_link"
                    className='hover:underline'>
                    Download Link
                </Link>
            </div>

            <div className='grid md:grid-cols-3 gap-4 mt-5'>
                {
                    images.map((img, index) => {
                        return (
                            <div key={index}>
                                <img src={img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
