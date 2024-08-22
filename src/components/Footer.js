import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer(){
    return (
        <div className="  w-screen bg-purple-500 flex flex-col  overflow-hidden ">
            <div className="flex flex-row justify-between px-12 font-semibold my-4 text-white">
                <div>
                    <ul className="space-y-4">
                        <li>Home</li>
                        <li>Products</li>
                    </ul>
                </div>
                <div className="my-5" >
                    <ul className="flex flex-row space-x-4">
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faXTwitter} /></li>
                    </ul>
                </div>
                <div >
                    <ul className="space-y-4">
                        <li>+9779812345122</li>
                        <li>Shantinagar, Kathmandu</li>
                        
                    </ul>
                </div>
            </div>
            <div className="py-4  text-white">
                <p className="text-center">Copyright reserved 2021 @Pratham Sapkota</p>
            </div>
        </div>
    )
}
export default Footer;