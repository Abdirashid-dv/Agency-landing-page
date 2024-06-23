import serviceBg from "../assets/services-bg.jpg";
import { SERVICES } from "../constants";
const Services = () => {
    return (
        <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${serviceBg})` }}
        >
            <div className="bg-black bg-opacity-[53%]">
                <div className="container px-8 py-8">
                    <h1 className="text-3xl lg:text-4xl bg-gradient-to-r from-[#FFFFFF] to-[#2AB78D] bg-clip-text text-transparent inline-block">
                        Our Services
                    </h1>

                    <p className="text-sm py-4">
                        Comprehensive Solutions for All Your Design Needs
                    </p>

                    <div className="flex flex-wrap mt-10">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="lg:pr-36 pb-10">
                                <h4 className="py-2">
                                    <b>{service.title}</b>
                                </h4>
                                <p className="max-w-xs text-sm text-[#807171]">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
