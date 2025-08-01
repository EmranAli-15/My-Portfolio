import { FaLinkedinIn, FaGithub, FaQuora } from "react-icons/fa";
import { Link } from "react-router";
import me from "../../assets/me.jpg";
import toph from "../../assets/toph.png";


export default function Home() {
    return (
        <div className=" rounded-2xl themed-bg">
            <div className="px-8 py-2 grid grid-cols-1 md:grid-cols-3">
                <div className="flex justify-center md:justify-start">
                    <div className="md:flex md:gap-x-5">
                        <div className="w-44 h-44">
                            <img
                                className="w-full h-full object-center rounded-4xl relative border-[8px] themed-border -mt-8"
                                src={me} />
                        </div>
                        <div>
                            <h1 className="text-3xl heading">Md. Emran Ali</h1>
                            <p className="text-center md:text-start">Full stack developer</p>
                            <div className="flex items-center justify-center md:justify-start gap-x-2 mt-1">
                                <Link target="blank" to="https://www.linkedin.com/in/md-emran-ali-b58288212/">
                                    <FaLinkedinIn className="size-6"></FaLinkedinIn>
                                </Link>
                                <Link target="blank" to="https://github.com/EmranAli-15">
                                    <FaGithub className="size-6"></FaGithub>
                                </Link>
                                <Link target="black" to="https://bn.quora.com/profile/Mohammad-Emran-3">
                                    <FaQuora className="size-6"></FaQuora>
                                </Link>
                                <Link target="black" to="https://toph.co/u/Emran_">
                                    <img className="size-6 rounded-full bg-gray-400" src={toph} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center my-5 md:my-0">
                    <hr className="w-full h-[1px] md:w-[30%] md:rotate-90" />
                </div>

                <div>
                    <p>Email</p>
                    <h1 className="heading font-semibold">mohammademranali15@gmail.com</h1>
                    <p>Location</p>
                    <h1 className="heading font-semibold">Dhaka, Bangladesh</h1>
                    <p>WhatsApp</p>
                    <h1 className="heading font-semibold">+88 01982740064</h1>
                </div>
            </div>
        </div>
    )
}
