
export default function NotificationBar() {
    return (
        <div className="container border rounded border-light p-3 mt-5 mb-4 text-center">
            <div className="row my-2 pb-3 border-bottom">
                <h1 className='text-light mx-auto'> NOTIFICATION CENTER</h1>

            </div>
            <div className="row pt-3">
                <ul className=' mx-auto text-light'>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        </div>
    )
}