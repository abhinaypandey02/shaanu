import './landing_page.css';
export default function LandingPage(){
    return <div className="section1 min-vh-100 w-100 d-flex align-items-center">
        <div className="container" id="base">
            <div className="row-fluid text-center">
                <div className="col-fluid">
                    <h1 className="display-3">Welcome To </h1>
                    <h3 className="display-1">{SITE_META.appName}</h3>
                </div>
                <br/>
                    <div className="row-fluid">
                        <div className="col-fluid">

                                <button  type="button" className="btn btn-outline-dark" id="loginb">Login</button>

                        </div>
                        <br/>
                            <div className="col-fluid">
                                <button type="button" className="btn btn-dark" id="signupb">Signup</button>
                            </div>
                    </div>
            </div>
        </div>
    </div>
}