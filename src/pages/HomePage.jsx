import myProfile from "../assets/images/myProfile.png";
import MyAccounts from "../components/MyAccounts";
// import backGround from "../assets/images/background.png";

const HomePage = ({ homeRef }) => {
    
    return (
        <section ref={homeRef} className="font-poppins flex items-center justify-center bg-no-repeat">
            <div className="px-[5rem] mt-[3rem] z-50">
                <div className="flex items-center justify-evenly p-3 gap-2">
                    <div className="basis-[50%]">
                        <p className="mb-3 text-xl">Hi I'm Marc </p>
                        <h2 className="text-5xl font-bold mb-2 text-secondary">I'm a FrontEnd Web Dev.</h2>
                        <p className="text-[14px] mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eaque quisquam ipsum dolor illum! Harum, asperiores.</p>
                        <div>
                            <MyAccounts />
                        </div>
                    </div>
                    
                    <div>   
                        <img 
                            src={myProfile} 
                            alt="my picture" 
                            className="w-[450px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;