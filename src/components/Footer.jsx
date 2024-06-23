import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="px-8 pt-10 bg-[#122C48]">
            <p className="text-[#EEEEEE] text-xs lg:max-w-xs">
                Quickly navigate through our website and stay connected with us.
            </p>
            <div className="my-10 flex flex-col gap-6 lg:flex-row lg:justify-between max-w-4xl">
                <div>
                    <h1 className="text-[#EEEEEE] font-semibold">Links</h1>
                    <ul className="text-[#8C8C8C] text-xs mt-2">
                        <li>Privacy Policy</li>
                        <li>Careers</li>
                        <li>ORG. Charts</li>
                        <li>Our Team</li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-[#EEEEEE] font-semibold mb-2">
                        Social Media
                    </h1>
                    <ul className="flex gap-2 text-xl text-[#9B9B9B]">
                        <li>
                            <FaLinkedin />
                        </li>
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <FaSquareXTwitter />
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-[#EEEEEE] font-semibold mb-2">
                        Contact Details
                    </h1>
                    <div className="text-[#868686] text-xs font-medium">
                        <p>Email: info@comx.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <p>Garowe - Somalia</p>
                    </div>
                </div>
            </div>

            <div className="pb-4">
                <p className="text-[#8C8C8C] text-xs text-center">
                    © Copyright 2024 ComX. All Rights Reserved And Developed By{" "}
                    <a
                        href="https://github.com/Abdirashid-dv"
                        target="_blank"
                        className="underline text-[#EEEEEE] hover:text-[#8C8C8C]"
                    >
                        Abdirashidv
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
