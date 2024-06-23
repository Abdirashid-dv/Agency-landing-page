import { TbMenuDeep } from "react-icons/tb";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

const navigation = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="z-50 px-8">
            <nav className="flex items-center justify-between py-6 mb-4">
                <div className="flex items-center flex-shrink-0">
                    <div className="uppercase font-semibold text-3xl text-[#122C48]">
                        Logo
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <TbMenuDeep className="text-4xl text-[#122C48]" />
                    </button>
                </div>
                <div className="hidden lg:flex justify-center items-center gap-4">
                    {navigation.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="font-medium text-black"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex">
                    <button className="bg-[#122C48] px-3 py-2 text-white font-semibold rounded hover:bg-[#122c48d6]">
                        Order Now
                    </button>
                </div>
            </nav>
            <Dialog
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50">
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <div className="uppercase font-semibold text-3xl text-[#122C48]">
                                    Logo
                                </div>
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <IoClose className="text-4xl text-[#122C48]" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/20">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="block font-semibold leading-7 text-xl text-[#666666] hover:underline hover:text-gray-500"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <button className="bg-[#122C48] px-3 py-2 text-white font-semibold rounded hover:bg-[#122c48d6]">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </header>
    );
};

export default Navbar;
