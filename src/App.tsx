import React from "react";
import "./App.css";
import LandingPage from "./pages/landingPage/landing_page";
import AllServicesPage from "./pages/allservicespage/all_services_page";
import NavigationBar from "./components/navigationBar/navigation_bar";
import Footer from "./components/footer/footer";
import EstimatePage from "./pages/estimatepage/estimate_page";
import { useGlobalState } from "./contexts/global_state";
import WorkshopPage from "./pages/workshoppage/workshop";
import { HashRouter, Redirect, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
function App() {
    const [globalState] = useGlobalState();
    const carSelected =
        globalState.selectedBrand &&
        globalState.selectedModel &&
        globalState.selectedType;
    return (
        <div className={"min-vh-100 app d-flex flex-column"}>
            <HashRouter>
                <NavigationBar />
                <Switch>
                    <Route exact path="/"><Redirect to="/services"/></Route>
                    <Route exact path="/services">
                        {!carSelected && <LandingPage />}
                        {carSelected && <AllServicesPage />}
                    </Route>
                    <Route path="/workshop">
                        <WorkshopPage />
                    </Route>
                    <Route path="/estimate">
                        <EstimatePage />
                    </Route>
                </Switch>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
