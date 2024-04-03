import myProfile from "../assets/images/myProfile.png";

const HomePage = () => {
    return (
        <section className="font-poppins flex items-center justify-center h-lvh">
            <div className="px-[5rem]">
                <div className="flex items-center justify-center p-3">
                    <div>
                        <p className="mb-3 text-xl">Hi I'm Marc </p>
                        <h2 className="text-5xl font-bold mb-2 text-secondary">I'm a FrontEnd Web Dev.</h2>
                        <p className="text-[14px]">I am a passionate and detail-oriented frontend web developer with a keen eye for design and a love for creating seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in translating design concepts into responsive and interactive web applications</p>
                    </div>
                    
                    <div>   
                        <img 
                            src={myProfile} 
                            alt="my picture" 
                            className="min-w-[800px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;