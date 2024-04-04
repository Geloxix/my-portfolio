import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyAccounts = () => {
    return (
        <div className="flex gap-4">
            <Link to="https://www.instagram.com/nnnngelo/">
                { <FaInstagram 
                    className="text-secondary text-[26px]"
                />}
            </Link>

            <Link to="https://www.facebook.com/cramolegna.onajeta/">
                { <FaFacebook 
                    className="text-secondary text-[26px]"
                /> }
            </Link>

            <Link to="https://www.linkedin.com/in/marcangelo-gilig-509398286/">
                { <FaLinkedin 
                    className="text-secondary text-[26px]"
                /> }
            </Link>

            <Link to="https://twitter.com/itsgelo2222">
                { < FaTwitter 
                    className="text-secondary text-[26px]"
                /> }
            </Link>
        </div>
    );
}

export default MyAccounts;