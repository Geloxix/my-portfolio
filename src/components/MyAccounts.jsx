import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const MyAccounts = () => {
    return (
        <div className="flex gap-[1.5rem] justify-center md:justify-start">
            <a href="https://www.instagram.com/nnnngelo/">
                { <FaInstagram 
                    className="text-secondary text-[30px] hover-links-accounts"
                />}
            </a>
            <a href="https://www.facebook.com/cramolegna.onajeta/">
                { <FaFacebook 
                    className="text-secondary text-[30px] hover-links-accounts"
                /> }
            </a>
            <a href="https://www.linkedin.com/in/marcangelo-gilig-509398286/">
                { <FaLinkedin 
                    className="text-secondary text-[30px] hover-links-accounts"
                /> }
            </a>
            <a href="https://twitter.com/itsgelo2222">
                { < FaTwitter 
                    className="text-secondary text-[30px] hover-links-accounts"
                /> }
            </a>
        </div>
    );
}

export default MyAccounts;