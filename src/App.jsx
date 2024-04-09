// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { useRef } from "react";


//import pages
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
// import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
   const homeRef = useRef(null);
   const aboutRef = useRef(null);
   const skillsRef = useRef(null);
   const servicesRef = useRef(null);
   const contactRef = useRef(null);

   const handleSmoothScroll = (page) => {
      page.current.scrollIntoView({
         behavior: 'smooth',
         inline: 'center',
      });
   };

   return (
      <>
         <Nav 
            handleSmoothScroll={handleSmoothScroll}
            homeRef={homeRef}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            servicesRef={servicesRef}
            contactRef={contactRef}
         />
         <HomePage 
            homeRef={homeRef}
         />
         <AboutPage 
            aboutRef={aboutRef}
         />
         <SkillsPage 
            skillsRef={skillsRef}
         />
         <ServicesPage 
            servicesRef={servicesRef}
         />
         <ContactPage 
            contactRef={contactRef}
         />
      </>
   );
}



export default App;




// const router = createBrowserRouter(
//    createRoutesFromElements(
//       <Route>
//          <Route path="/" element={<MainLayout /> } >
//             <Route index element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<SkillsPage /> } />
//             <Route path="/skills" element={<ServicesPage /> } />
//             <Route path="/contact" element={<ContactPage /> } />
//          </Route>
//          <Route path="*" element={<NotFoundPage />} />
//       </Route>
//    )
// );
