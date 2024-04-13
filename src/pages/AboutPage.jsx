import Me from "../assets/images/me.png";
import { ArrowRight } from "lucide-react";

const AboutPage = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} className="py-10">
            <div className="text-center mt-[2rem]">
                <h1 className="text-4xl text-center font-semibold ">About <span className="text-secondary">Me</span></h1>
                <p className="text-center">My Introduction</p>
                <div className="flex items-center justify-center p-3 px-[2rem] md:gap-[3rem] gap-[2rem] md:px-[5rem] md:flex-row flex-col">
                    <div>
                        <img 
                            src={Me} 
                            alt="About me profile" 
                            className="w-[400px] md:w-[500px]"
                        />
                    </div>

                    <div className="p-2">
                        <div className="flex items-start justify-center flex-col">
                            <p className="leading-6 md:leading-7 text-center md:text-left text-[12px] md:text-[1em] mb-[2rem] max-w-[700px]">I am a passionate and detail-oriented   frontend developer with a keen eye for design and a love for creating seamless user experiences. With a strong foundation in HTML, Tailwind CSS, and React JS, I specialize in translating design concepts into responsive and interactive web applications.
                            </p>
                            <a 
                                href="resume.pdf" 
                                download="resume.pdf"
                                className="py-2 rounded-md hover:bg-[#7e45e2d4] text-white text-[1em] bg-secondary flex justify-center items-center w-[180px] gap-3 self-center md:self-start"
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