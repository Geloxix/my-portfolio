import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
//import pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layout/MainLayout";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         <Route path="/" element={<MainLayout /> } >
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<SkillsPage /> } />
            <Route path="/skills" element={<ServicesPage /> } />
            <Route path="/contact" element={<ContactPage /> } />
         </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Route>
   )
);

const App = () => {
   return (
      <RouterProvider router={router}/>
   );
}

export default App;