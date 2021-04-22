import React from "react";
import "./App.css";
import LandingPage from "./pages/landingPage/landing_page";
import AllServicesPage from "./pages/allservicespage/all_services_page";
import NavigationBar from "./components/navigationBar/navigation_bar";
import Footer from "./components/footer/footer";
import EstimatePage from "./pages/estimatepage/estimate_page";
import { useGlobalState } from "./contexts/global_state";

function App() {
    const [globalState] = useGlobalState();
    const carSelected =
        globalState.selectedBrand &&
        globalState.selectedModel &&
        globalState.selectedType;
    return (
        <div className={"min-vh-100 app d-flex flex-column"}>
            <NavigationBar />
            {!carSelected && <LandingPage />}
            {carSelected && <AllServicesPage />}
            <Footer />
        </div>
    );
}

export default App;
