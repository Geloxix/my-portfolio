const ContactPage = ({ contactRef }) => {
    return (
        <footer ref={contactRef}>
            <div>
                <h1 className="text-4xl">Contact</h1>
                <form action="">
                    <div>
                        <input className="border-2 border-gray-400 px-1" type="text" name="firstname" placeholder="firstname"/>
                        <input className="border-2 border-gray-400 px-1" type="text" name="lastname" placeholder="lastname"/>
                        <input className="border-2 border-gray-400 px-1" type="email" name="email" placeholder="example@gmail.com"/>
                    </div>
                    
                    <div>
                        <textarea name="comment" id="" cols="30" rows="10" className="border-2 border-gray-600" placeholder="comment here">
                        </textarea>
                    </div>
                </form>
            </div>
        </footer>
    );
}

export default ContactPage;