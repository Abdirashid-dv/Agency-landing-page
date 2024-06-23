const About = () => {
    return (
        <div className="pb-4 mb-20  px-8">
            <div className="w-36">
                <h1 className="bg-gradient-to-r from-[#122C48] to-[#2AB98E] bg-clip-text text-transparent text-3xl ">
                    About Us
                </h1>
            </div>
            <div className="flex flex-wrap justify-between gap-6 mt-3 ">
                <div className="w-full lg:max-w-sm text-[#666666] text-sm">
                    <h5 className="bg-gradient-to-t from-[#122C48] to-[#2AB98E] bg-clip-text text-transparent font-bold pb-2">
                        Who We Are
                    </h5>
                    <p>
                        <b>[Your Agency Name]</b> is a premier creative design
                        agency committed to transforming your ideas into
                        compelling visual experiences. Our mission is to deliver
                        innovative, effective, and timeless designs that
                        resonate with your target audience and elevate your
                        brand.
                    </p>
                </div>
                <div className="w-full lg:max-w-md text-[#666666] lg:border border-[#E0D5D5] lg:p-14 lg:-mt-14 text-sm rounded-xl">
                    <h5 className="bg-gradient-to-t from-[#122C48] to-[#2AB98E] bg-clip-text text-transparent font-bold pb-2">
                        Our Values
                    </h5>
                    <div>
                        <p className="pb-4">
                            <b>Craftsmanship:</b> We approach every project with
                            meticulous attention to detail and a passion for
                            quality.
                        </p>{" "}
                        <p className="pb-4">
                            <b>Dedication:</b> Our team is driven by a deep
                            commitment to excellence and client satisfaction.
                        </p>
                        <p className="pb-4">
                            <b>Innovation:</b> We leverage the latest design
                            trends and technologies to create forward-thinking
                            solutions.
                        </p>
                        <p className="pb-4">
                            <b>Collaboration:</b> We work hand-in-hand with our
                            clients to ensure their vision is realized to the
                            fullest.
                        </p>
                    </div>
                </div>

                <div className="w-full lg:max-w-sm text-[#666666] text-sm">
                    <h5 className="bg-gradient-to-t from-[#122C48] to-[#2AB98E] bg-clip-text text-transparent font-bold pb-2">
                        Our Story
                    </h5>
                    <p>
                        Founded in [Year], [Your Agency Name] has grown from a
                        small team of design enthusiasts into a full-service
                        creative agency. With a portfolio spanning diverse
                        industries and clients, our journey has been marked by a
                        relentless pursuit of creativity and excellence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
