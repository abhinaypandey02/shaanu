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
import FreeServices from "./pages/100freePage/100_page";
import AppointmentSlot from "./components/appointmentSlot/appointment_slot";
import Job from "./pages/adminPage/jobs/job";
import { useUser } from "./contexts/user_context";
import { Spinner } from "react-bootstrap";
import ReviewPage from "./pages/reviewPage/reviewpage";
import BlogPage from "./pages/blogPage/blogpage";
import ROUTES_META from "./metadata/routes_meta";

function App() {
  const [globalState] = useGlobalState();
  const [user] = useUser();
  const carSelected =
    globalState.selectedBrand &&
    globalState.selectedModel &&
    globalState.selectedType;
  if (user === undefined)
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
    );
  console.log(user);
  return (
    <div className={"app position-relative"}>
      {!user && (
        <div className="bg-warning text-center">
          Please sign in to enjoy more benefits!
        </div>
      )}
      <HashRouter>
        <div className="d-flex min-vh-100 flex-column">
          <NavigationBar />
          <div className="flex-grow-1">
            <Switch className="p-0">
              <Route exact path="/">
                <Redirect to={ROUTES_META.services} />
              </Route>
              <Route exact path={ROUTES_META.services}>
                {!carSelected && <LandingPage />}
                {carSelected && <AllServicesPage />}
              </Route>
              <Route path={ROUTES_META.workShop}>
                <WorkshopPage />
              </Route>
              <Route path={ROUTES_META.profile}>
                <ProfilePage />
              </Route>
              <Route path={ROUTES_META.estimate}>
                <EstimatePage />
              </Route>

              <Route path={ROUTES_META.blogs}>
                <BlogPage />
              </Route>
              <Route path={ROUTES_META.reviews}>
                <ReviewPage />
              </Route>
              <Route path={ROUTES_META.faq}>
                <FaqPage />
              </Route>
              <Route component={BooknowPage} path={ROUTES_META.bookNow} />
              <Route path={ROUTES_META.freeServices}>
                <FreeServices />
              </Route>
              <Route
                path={ROUTES_META.appointmentSlot}
                component={AppointmentSlot}
              />
              <Route path="/job/:jobID">
                <Job />
              </Route>
              <Route exact path={ROUTES_META.admin}>
                <Redirect to={ROUTES_META.admin + "/jobs"} />
              </Route>
              <Route path={ROUTES_META.admin + "/:category"}>
                <AdminPage />
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
