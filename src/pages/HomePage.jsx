import myProfile from "../assets/images/myProfile.png";
import MyAccounts from "../components/MyAccounts";
import { TypeAnimation } from "react-type-animation";

// import backGround from "../assets/images/background.png";

const HomePage = ({ homeRef }) => {
    
    return (
        <section ref={homeRef} className="font-poppins flex items-center justify-center min-h-screen">
            <div className="flex items-center px-[2rem] md:px-[4rem] justify-center p-2 sm:p-3 gap-2 md:flex-row flex-col-reverse">
                <div className="min-w-[50%] basis-[50%] relative">
                    <p className="mb-3 md:text-left text-[0.80em] md:text-[1em] text-center ">Hi I'm Marc </p>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 text-secondary text-center md:text-left">
                        <span>
                            I'm a
                        </span><br />
                        <TypeAnimation 
                            sequence={[
                                "Frontend Dev",
                                1000,
                                "Web Designer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] xl:text-[1em] mb-8 md:text-left text-center leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eaque quisquam ipsum dolor illum! Harum, asperiores.</p>
                    <div className="mb-3">
                        <MyAccounts />
                    </div>
                </div>
                
                <div className="bg-hero-bg bg-contain ">   
                    <img 
                        src={myProfile} 
                        alt="my picture" 
                        className="lg:w-[450px] md:w-[400px] w-[300px] mb-4"
                    />
                </div> 
            </div>
        </section>
    );
}

export default HomePage;