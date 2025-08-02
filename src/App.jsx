import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
  import { ToastContainer, Bounce } from 'react-toastify';

const App = () => {
  return (
<>
<NavBar />
<Hero />
<ShowcaseSection />
<FeatureCards />
<Experience />
<TechStack />
<Contact />
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
</>
  )
}

export default App