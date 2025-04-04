import AppRoutes from './routes/AppRoutes';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
