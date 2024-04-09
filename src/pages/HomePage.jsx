import myProfile from "../assets/images/myProfile.png";
import MyAccounts from "../components/MyAccounts";
import { TypeAnimation } from "react-type-animation";
// import backGround from "../assets/images/background.png";

const HomePage = ({ homeRef }) => {
    
    return (
        <section ref={homeRef} className="font-poppins h-lvh flex items-center justify-center bg-no-repeat">
            <div className="px-[5rem] mt-[4rem] z-50">
                <div className="flex items-center justify-evenly p-3 gap-2 md:flex-row flex-col-reverse">
                    <div className="min-w-[50%] basis-[50%]">
                        <p className="mb-3 md:text-left text-center text-zinc-500 text-xl">Hi I'm Marc </p>
                        <h1 className="text-6xl font-bold mb-2 text-secondary text-center md:text-left">
                            <span>
                                <p className="mb-4">
                                    I'm a
                                </p>
                            </span>
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
                        <p className="text-[14px] mb-8 md:text-left text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eaque quisquam ipsum dolor illum! Harum, asperiores.</p>
                        <div className="mb-3">
                            <MyAccounts />
                        </div>
                    </div>
                    
                    <div className="bg-hero-bg bg-contain ">   
                        <img 
                            src={myProfile} 
                            alt="my picture" 
                            className="md:w-[450px] w-[300px] mb-4"
                        />
                    </div> 
                </div>
            </div>
        </section>
    );
}

export default HomePage;