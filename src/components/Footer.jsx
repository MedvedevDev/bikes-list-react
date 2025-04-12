export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 19;
    const isOpen = hour >= openHour && hour <=closeHour;



    return (
        <>
            <footer className='footer'>
                {new Date().toLocaleTimeString()}This is footer
            </footer>
        </>
    )
}