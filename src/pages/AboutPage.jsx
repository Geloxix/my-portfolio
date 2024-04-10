import myProfile from "../assets/images/myProfile.png";
import { ArrowRight } from "lucide-react";

const AboutPage = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} className="bg-gray-200 border-2 py-10 border-red-400">
            <div className="text-center mt-[2rem]">
                <h1 className="text-4xl text-center font-semibold ">About <span className="text-secondary">Me</span></h1>
                <p className="text-center">My Introduction</p>
                <div className="p-3 gap-3 flex items-center px-[5rem] justify-center md:flex-row flex-col border-2 border-red-400">
                    <div className="basis-[40%] flex items-center justify-center ">
                        <img 
                            src={myProfile} 
                            alt="About me profile" 
                            className="md:w-[450px] w-[450px]"
                        />
                    </div>

                    <div className="basis-[50%]">
                        <div className="flex items-center flex-col ">
                            <p className="leading-2 text-[12px] md:text-left md:text-[14px] xl:text-[1em] text-center mb-[2rem]">I am a passionate and detail-oriented   frontend developer with a keen eye for design and a love for creating seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in translating design concepts into responsive and interactive web applications.</p>
                            <a 
                                href="download" 
                                className="py-2 rounded-sm text-white bg-secondary flex justify-center items-center w-[180px] self-start"
                            >
                                Download CV<span><ArrowRight/></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;