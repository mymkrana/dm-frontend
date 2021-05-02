import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './component/Footer';
import Header from './component/Header';
import HomePage from './component/HomePage';
function App() {
  return (
    <div className="App wrapper">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
