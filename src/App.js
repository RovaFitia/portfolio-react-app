import Navbar from "./components/Navbar.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Home from "./components/pages/Home.jsx";
import Skills from "./components/pages/Skills.jsx";
import Work from "./components/pages/Work.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Work />
			<Contact />
      		<Footer />
		</div>
  );
}

export default App;
