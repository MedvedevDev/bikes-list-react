export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 19;
    const isOpen = hour >= openHour && hour <=closeHour-1;
    console.log(isOpen, hour);
    return (
        <>
            <footer className='footer'>
                {isOpen ? (
                    <div className='order'>
                        <p>
                            We`re open until {closeHour}
                        </p>
                        <button className='btn'>Order</button>
                    </div>
                ) : <p>We`re closed until {openHour}</p>}
            </footer>
        </>
    )
}