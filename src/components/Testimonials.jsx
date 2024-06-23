import { TESTIMONIALS } from "../constants";

const Testimonials = () => {
    return (
        <div className="px-8 py-14">
            <div className="border-b border-gray-500/15 pb-10">
                <div>
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#2AB78D] to-[#122C48] bg-clip-text text-transparent inline-block">
                        Testimonials
                    </h1>
                    <div className="mt-2">
                        <p className="max-w-[40rem] bg-gradient-to-r from-[#666666] to-[#CCCCCC] bg-clip-text text-transparent inline-block">
                            Discover what our clients have to say about their
                            experience working with ComX. We pride ourselves on
                            delivering exceptional service and results that
                            exceed expectations
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap mt-10 justify-center">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-xl p-px bg-gradient-to-b from-[#CBCBCB] to-[#FFFFFF] lg:mr-20 mb-12"
                        >
                            <div className="flex flex-col items-center justify-center p-8 lg:p-10 bg-white rounded-[calc(0.725rem-1px)] ">
                                <div className="w-20 h-20 rounded-full overflow-hidden">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-[#2AB78D] font-semibold pt-2">
                                        {testimonial.name}
                                    </h3>
                                    <h5 className="bg-gradient-to-r from-[#666666] to-[#CCCCCC] bg-clip-text text-transparent text-sm tracking-tighter inline-block mb-4">
                                        {testimonial.title}
                                    </h5>
                                    <p className="text-[#6C6C6C] text-sm max-w-xs text-left">
                                        {testimonial.quote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
