import { LuUserSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";

const Contacts = () => {
    return (
        <div className="px-8">
            <div className="py-4 flex flex-wrap border-b border-gray-500/15 ">
                <div className="w-full lg:w-1/3">
                    <h1 className="text-xl pb-4 font-semibold bg-gradient-to-r from-[#1E3868] to-[#AFAFAF] bg-clip-text text-transparent inline-block">
                        Contacts Us
                    </h1>
                    <p className="max-w-xs text-[#7E7E7E] tracking-tighter mb-20">
                        Have a project in mind or just want to learn more about
                        our services? We&apos;d love to hear from you. Reach out
                        to us today and let&apos;s start creating something
                        amazing together.
                    </p>

                    <div className="border-t border-gray-500/15 max-w-sm flex justify-center items-center gap-4 py-8 ">
                        <LuUserSquare className="text-2xl" />
                        <IoCallOutline className="text-2xl" />
                        <FaPeopleArrows className="text-2xl" />
                    </div>
                </div>
                <div className="w-full lg:w-2/3 pt-10">
                    <div className="rounded-xl p-px bg-gradient-to-b from-[#CBCBCB] to-[#FFFFFF]">
                        <div className="bg-white rounded-[calc(0.725rem-1px)] p-4 lg:p-10">
                            <div className="border lg:max-w-xl mx-auto p-5 rounded-t-xl shadow-lg shadow-gray-500/35">
                                <h2 className="text-xl font-semibold bg-gradient-to-r from-[#293A8D] to-[#B5B5B5] bg-clip-text text-transparent inline-block">
                                    Contact Form
                                </h2>
                            </div>
                            <div className="bg-white border rounded-xl pb-10">
                                <div className="px-2 lg:px-32 py-2 ">
                                    <h5 className="text-[#766F6F] text-sm py-6">
                                        Schedule a Consultation
                                    </h5>
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="FullName"
                                            className="text-sm"
                                        >
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Please Enter Your Full name"
                                            className="border border-[#D8D8D8] rounded-lg p-4 my-2 text-xs"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="text-sm"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Please Enter Your Email"
                                            className=" border border-[#D8D8D8] rounded-lg p-4 my-2 text-xs"
                                        />
                                        <label
                                            htmlFor="phone"
                                            className="text-sm"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Please Enter Your Phone Number"
                                            className=" border border-[#D8D8D8] rounded-lg p-4 my-2 text-xs"
                                        />
                                        <label
                                            htmlFor="message"
                                            className="text-sm"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            name="Message"
                                            id=""
                                            cols="30"
                                            rows="10"
                                            placeholder="Please Enter Your message "
                                            className=" border border-[#D8D8D8] rounded-lg p-4 my-2 text-xs"
                                        ></textarea>
                                        <input
                                            type="submit"
                                            value="Submit"
                                            className="bg-gradient-to-b from-[#2AB78D] to-[#219875] text-white w-[160.31px] shadow-lg p-4 rounded-xl my-2 hover:from-[#219875] hover:to-[#2AB78D] transition duration-300 ease-in-out cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
