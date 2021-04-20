import React from 'react';
import './App.css';
import LandingPage from "./pages/landingpage/landing_page";
import AllServicesPage from "./pages/allservicespage/all_services_page";
import NavigationBar from "./components/navigationBar/navigation_bar";
import Footer from './components/footer/footer';
import EstimatePage from './pages/estimatepage/estimate_page';

function App() {
  return (
      <div className={'min-vh-100 app d-flex flex-column'}>
        <NavigationBar/>
        <EstimatePage/>
        <Footer/>
      </div>
  );
}

export default App;
