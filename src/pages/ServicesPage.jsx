import interactive from "../assets/icons/interactive.svg";
import responsive from "../assets/icons/responsive.svg";
import webDesign from "../assets/icons/web-design.svg";


const services = [
    {
        name: 'UX/UI Development',
        description: 'I transform design mockups and wireframes into beautiful, pixel-perfect user interfaces that are intuitive and user-friendly.',
        icon: webDesign,
    },
    {
        name: 'Interactive Features',
        description: 'I create dynamic and engaging experiences using HTML, Tailwind CSS, and React JS. This includes features like animations, forms, user interactions and Single Page Applications (SPA) for better navigation.',
        icon: interactive,
    },
    {
        name: 'Responsive Design',
        description: 'I guarantee that your application or website will look great and work perfectly on all platforms, including tablets, smartphones, and PCs.',
        icon: responsive,
    }
];


const ServicesPage = ({ servicesRef }) => {
    return (
        <section ref={servicesRef} className="py-10">
            <div>
                <h1 className="text-center font-semibold text-4xl mt-[2rem] text-secondary">What i do?</h1>
                <div className="px-[5rem] py-[3rem]">
                    <div className="grid md:grid-cols-3 gap-[2rem] grid-cols-1">   
                        {
                            services.map((service) => (
                                <li key={service.name} className="list-none p-2 flex items-center justify-center flex-col gap-2">
                                    <img 
                                        src={service.icon} 
                                        alt="icons" 
                                        className="w-[100px]"
                                    />
                                    <h1 className="text-xl font-semibold text-secondary font-palanquin">{ service.name }</h1>
                                    <p className="text-center md:leading-7 leading-6 md:text-[0.90em] text-zinc-500 mt-2">{ service.description }</p>
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesPage;