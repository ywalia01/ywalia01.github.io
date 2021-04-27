import './components/css/App.css';
import './components/css/fontawesome-free-5.15.3-web/css/all.min.css'
import Header from './components/ui/Header';
import Container from './components/ui/Container';
import Footer from './components/ui/Footer';
import ScrollButton from './components/ui/ScrollButton';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Container />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
