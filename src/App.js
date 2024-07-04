import './App.css';
import BannerSection from './components/BannerSection';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BannerSection />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
