import { CarProfile } from "../../interfaces/car"
import Marquee from "react-fast-marquee"

export default function NotificationBar({
                                            currentCarProfile
                                        }: {
    currentCarProfile: CarProfile;
}) {
    let dueDays = NaN
    if (currentCarProfile.insuranceDate) {
        dueDays =
            (new Date(currentCarProfile.insuranceDate).getTime() -
                new Date().getTime()) /
            86400000 +
            365
    }
    return (
        <div className="container border rounded border-warning rounded-0 p-3 mb-4 text-center">
            <div className="row border-bottom border-warning rounded-0">
                <h1 className="text-light mx-auto"> NOTIFICATION CENTER</h1>
            </div>
            <div className="row pt-3">
                <Marquee speed={50} direction="right" gradient={false}>
                    <div className="text-white">
                        Welcome to Car Plus! Enjoy!
                    </div>
                </Marquee>
                <ul className="text-left text-light">
                    {dueDays < 1 && <li>Your Insurance is due!</li>}
                    {dueDays && (
                        <li>Your Insurance is due in {dueDays.toFixed(0)} days!</li>
                    )}
                    {currentCarProfile.notifications?.map((text, index) => (
                        <li key={index}>
                            <div className="marquee">
                                <p>Test</p>
                            </div>
                            {text}
                        </li>
                    ))}
                    {(!currentCarProfile.notifications ||
                        currentCarProfile.notifications.length === 0) &&
                    isNaN(dueDays) && (
                        <div className="text-warning">NO NEW NOTIFICATION</div>
                    )}
                </ul>
            </div>
        </div>
    )
}
