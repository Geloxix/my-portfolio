import myProfile from "../assets/images/myProfile.png";

const AboutPage = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} className="h-lvh bg-gray-100 flex items-center justify-center mt-[4rem]">
            <div className="px-[5rem] mt-[4rem]">
                <div className="p-3 flex items-center justify-center gap-3 md:flex-row flex-col">
                    <div className="basis-[40%] flex items-center justify-center ">
                        <img 
                            src={myProfile} 
                            alt="About me profile" 
                            className="md:w-[450px] w-[350px]"
                        />
                    </div>

                    <div className="p-3 basis-[45%] ">
                        <h1 className="md:text-5xl text-4xl font-semibold text-secondary mb-3  md:text-left text-center">About Me</h1>
                        <p className="leading-2 text-[13px]  md:text-left text-center mb-[3rem]">I am a passionate and detail-oriented frontend developer with a keen eye for design and a love for creating seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in translating design concepts into responsive and interactive web applications. I am dedicated to staying up-to-date with the latest technologies and trends in the rapidly evolving field of web development.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;