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
import ProfilePage from "./pages/profilePage/profile_page";
import AdminPage from "./pages/adminPage/admin_page";
import FaqPage from "./pages/faqPage/faq_page";
import BooknowPage from "./pages/booknowPage/booknow_page";
function App() {
    const [globalState] = useGlobalState();
    const carSelected =
        globalState.selectedBrand &&
        globalState.selectedModel &&
        globalState.selectedType;
    return (
        <div className={"app"}>
            <HashRouter>
                <div className="d-flex min-vh-100 flex-column">
                    <NavigationBar />
                    <div className="flex-grow-1">
                        <Switch className="p-0">
                            <Route exact path="/">
                                <Redirect to="/services" />
                            </Route>
                            <Route exact path="/services">
                                {!carSelected && <LandingPage />}
                                {carSelected && <AllServicesPage />}
                            </Route>
                            <Route path="/workshop">
                                <WorkshopPage />
                            </Route>
                            <Route path="/profile">
                                <ProfilePage />
                            </Route>
                            <Route path="/estimate">
                                <EstimatePage />
                            </Route>
                            <Route path="/admin">
                                <AdminPage />
                            </Route>
                            <Route path="/faq">
                                <FaqPage />
                            </Route>
                            <Route path="/booknow">
                                <BooknowPage />
                            </Route>
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
