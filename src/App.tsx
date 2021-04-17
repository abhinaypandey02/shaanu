import React from 'react';
import './App.css';
import LandingPage from "./pages/landingpage/landing_page";
import AllServicesPage from "./pages/allservicespage/all_services_page";
import EachServicePage from "./pages/eachservicepage/each_service_page";
import NavigationBar from "./components/navigationBar/navigation_bar";

function App() {
  return (
      <div className={'min-vh-100 min-vw-100 app d-flex flex-column'}>
        <NavigationBar/>
        <LandingPage/>
      </div>
  );
}

export default App;
