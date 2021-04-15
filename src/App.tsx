import React from 'react';
import './App.css';
import LandingPage from "./pages/landingpage/landing_page";
import ServicesPage from "./pages/servicespage/services_page";
import NavigationBar from "./components/navigationBar/navigation_bar";

function App() {
  return (
      <div className={'min-vh-100 min-vw-100 app d-flex flex-column'}>
        <NavigationBar/>
        <ServicesPage/>
      </div>
  );
}

export default App;
