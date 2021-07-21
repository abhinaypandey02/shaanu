import UserInterface from "../../interfaces/user";

export default function NotificationBar({user}:{user:UserInterface}) {

    return (
        <div className="container border rounded border-warning rounded-0 p-3 mb-4 text-center">
            <div className="row border-bottom border-warning rounded-0">
                <h1 className='text-light mx-auto'> NOTIFICATION CENTER</h1>

            </div>
            <div className="row pt-3">
                <ul className='text-left text-light'>
                    {user.notifications?.map(text=><li>{text}</li>)}
                    {(!user.notifications||user.notifications.length===0)&&<div className="text-warning">NO NEW NOTIFICATION</div>}
                </ul>
            </div>
        </div>
    )
}