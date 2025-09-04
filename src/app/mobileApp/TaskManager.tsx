import { Link } from 'react-router'
import one from "../../assets/projects/mobileApp/one.jpg"
import two from "../../assets/projects/mobileApp/two.jpg"
import three from "../../assets/projects/mobileApp/three.jpg"
import four from "../../assets/projects/mobileApp/four.jpg"
import five from "../../assets/projects/mobileApp/five.jpg"
import six from "../../assets/projects/mobileApp/six.jpg"
import seven from "../../assets/projects/mobileApp/seven.jpg"

export default function TaskManager() {

    const images = [two, one, three, four, seven, five, six];

    return (
        <div className='border rounded-2xl p-4 md:p-6'>

            <h1 className='heading text-center my-1'>Task Manager</h1>
            <p><span className='heading'>Tech:</span> React Native (Expo), TypeScript</p>
            <div className='flex items-center justify-evenly mt-5 text-blue-700'>
                <Link
                    target='blank'
                    to="https://github.com/EmranAli-15/task-manager-mobileApp.git"
                    className='hover:underline'>
                    Client repo
                </Link>
                <Link
                    target='blank'
                    to="https://github.com/EmranAli-15/task-manager-server.git"
                    className='hover:underline'>
                    Server repo
                </Link>
                <Link
                    target='blank'
                    to="https://drive.google.com/file/d/1AqS-TQXbVAKSYFSnAjQjACaPD3dUslGk/view?usp=sharing"
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
