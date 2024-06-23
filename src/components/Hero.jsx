import Vector1 from "../assets/Vector-1.svg";
import Vector2 from "../assets/Vector.svg";

const Hero = () => {
    return (
        <div className="pb-4 mb-35 px-8 relative overflow-hidden">
            <img
                src={Vector1}
                className="absolute top-0 right-10 lg:-right-10 w-full h-[200px] sm:h-[200px] md:h-[387px] opacity-15 blur-3xl"
                alt="Background Vector 1"
            />
            <img
                src={Vector2}
                className="absolute top-0 right-15 lg:-right-96 w-full h-[200px] sm:h-[200px] md:h-[387px] opacity-15 blur-3xl"
                alt="Background Vector 2"
            />
            <div className="container relative z-10">
                <div className="w-full lg:max-w-4xl">
                    <h1 className="bg-gradient-to-r from-[#122C48] to-[#2AB98E] bg-clip-text text-transparent tracking-tight text-4xl lg:text-6xl font-semibold pb-2 text-center lg:text-left">
                        Transform Your Vision Into Stunning Reality
                    </h1>
                    <p className="font-light text-[#8E8E8E] text-sm text-center pt-4 lg:max-w-xl lg:text-3xl lg:text-left">
                        Creative Designs That Inspire, Engage, and Captivate.
                    </p>
                </div>
                <div className="py-10 flex items-center justify-center lg:justify-start">
                    <button className="bg-[#122C48] px-3 py-2 text-white font-semibold rounded hover:bg-[#122c48d6]">
                        Order Now
                    </button>
                </div>

                <hr />
                <div className="w-full max-w-xl py-8">
                    <p className="capitalize tracking-tight text-[#666666] text-sm">
                        we bring your ideas to life with exceptional design
                        solutions. From branding to event management, we craft
                        experiences that leave a lasting impression. Our team of
                        passionate creatives is dedicated to delivering visually
                        stunning and strategically sound designs that elevate
                        your brand and resonate with your audience
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
