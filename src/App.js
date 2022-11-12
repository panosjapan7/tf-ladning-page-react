import './App.css';
import "./styles/styles.css";
import Navigation from './components/Navigation';
import Masthead from './components/Masthead';
import Services from './components/Services';
import PortfolioGrid from './components/PortfolioGrid';
import About from './components/About';
import Team from './components/Team';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body">
      <Navigation/>
      <Masthead />
      <Services />
      <PortfolioGrid />
      <About />
      <Team />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
