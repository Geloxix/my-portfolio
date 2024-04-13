const ContactPage = ({ contactRef }) => {
    return (
        <footer ref={contactRef} className="my-3">
            <div>
                <h1 className="text-4xl">Contact</h1>
                <form action="" >
                    <div>
                        <input className="border-2 border-gray-400 px-1" type="text" name="firstname" placeholder="firstname"/>
                        <input className="border-2 border-gray-400 px-1" type="text" name="lastname" placeholder="lastname"/>
                        <input className="border-2 border-gray-400 px-1" type="email" name="email" placeholder="example@gmail.com"/>
                    </div>
                    
                    <div>
                        <textarea name="comment" id="" cols="30" rows="10" className="border-2 border-gray-600" placeholder="comment here">
                        </textarea>
                    </div>
                    <button type="submit" className="px-7 rounded-md py-[5px] text-center bg-secondary text-white shadow-secondary-500/30">
                        Submit
                    </button>
                </form>
            </div>
        </footer>
    );
}

export default ContactPage;