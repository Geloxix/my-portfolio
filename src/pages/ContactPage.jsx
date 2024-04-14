

const ContactPage = ({ contactRef }) => {
    return (
        <section ref={contactRef} className="py-12 bg-contact-bg bg-no-repeat bg-cover">
            <div className="mt-[2rem]">
                <h1 className="text-4xl text-center font-semibold text-primary">Let's keep in touch</h1>
                <div className="flex justify-center items-center gap-[4rem] mt-[3rem] p-4 z-[999]">
                    <form action="" className="p-3 flex gap-3 flex-col">
                        <div className="flex flex-col items-center justify-center gap-5">
                            <input className="border-2 border-gray-400 px-1 w-[350px] py-1 rounded-md" type="text" name="firstname" placeholder="firstname" required/>
                            <input className="border-2 border-gray-400 px-1 w-[350px] py-1 rounded-md" type="text" name="lastname" placeholder="lastname" required/>
                            <input className="border-2 border-gray-400 px-1 w-[350px] py-1 rounded-md" type="email" name="email" placeholder="example@gmail.com"/>
                        </div>
                        
                        <div>
                            <textarea name="comment" id="" cols="30" rows="10" className="border-2 border-gray-400 w-[350px] p-2 rounded-md" placeholder="comment here" >
                            </textarea>
                        </div>
                        <button type="submit" className="px-7 rounded-md py-[5px] text-center bg-zinc-700 text-white hover: transition shadow-secondary-500/30 border-none">
                            Submit
                        </button>
                    </form>

                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15359.500368628778!2d119.90539624619583!3d15.757745665992848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339409e1816f7f53%3A0xa48040bbbbca0ab6!2sLipay%2C%20Sta%20Cruz%2C%20Zambales!5e0!3m2!1sen!2sph!4v1713098075828!5m2!1sen!2sph" width="600" height="450" className={"border:0;"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;