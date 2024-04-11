import HtmlLogo from '../assets/icons/html-5.svg';
import CssLogo from '../assets/icons/css-3.svg';
import TailwindLogo from '../assets/icons/tailwindcss-icon.svg';
import ReactJs from '../assets/icons/react.svg';
import JsLogo from '../assets/icons/javascript.svg';

const mySkills = [
    { 
        name: 'HTML', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corrupti voluptas eaque in cumque dignissimos quam! Sapiente veritatis nam aut, iste ipsa deserunt? Sed,',
        logo: HtmlLogo,
    },
    { 
        name: 'CSS', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corrupti voluptas eaque in cumque dignissimos quam! Sapiente veritatis nam aut, iste ipsa deserunt? Sed,',
        logo: CssLogo,
    },
    { 
        name: 'Tailwind CSS', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corrupti voluptas eaque in cumque dignissimos quam! Sapiente veritatis nam aut, iste ipsa deserunt? Sed,',
        logo: TailwindLogo,
    },
    { 
        name: 'Javascript', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corrupti voluptas eaque in cumque dignissimos quam! Sapiente veritatis nam aut, iste ipsa deserunt? Sed,',
        logo: JsLogo,
    },
    { 
        name: 'React JS', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corrupti voluptas eaque in cumque dignissimos quam! Sapiente veritatis nam aut, iste ipsa deserunt? Sed,',
        logo: ReactJs,
    },
    { 
        name: 'Tailwind CSS', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corrupti voluptas eaque in cumque dignissimos quam! Sapiente veritatis nam aut, iste ipsa deserunt? Sed,',
        logo: TailwindLogo,
    },
];



const SkillsPage = ({ skillsRef }) => {

    return (
        <section ref={skillsRef} className='py-10 bg-gray-100'>
            <div className='mt-[2rem]'>
                <h1 className='text-center font-semibold text-4xl'>
                    My <span className='text-secondary'>
                        Skills
                    </span>
                </h1>
                <p className='text-center'>My knowledge</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem] p-[2rem] px-[5rem] my-[2rem] border-2'>
                    {
                        mySkills.map((skill) =>(
                            <li key={skill.name} className='shadow-md flex items-center justify-center flex-col gap-3 rounded-md text-center text-[1em] p-[1rem] cursor-pointer hover:scale-105 transition-all'>
                                <img src={skill.logo} alt="Skill logo" width={50}/>
                                <h3 className='text-secondary text-xl font-semibold'>{ skill.name }</h3>
                                <p className='text-zinc-500 leading-7'>{ skill.description }</p>
                            </li>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default SkillsPage;