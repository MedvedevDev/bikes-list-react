export  default function Bike({ name, about, price, photoName, soldOut}) {
    return(
        <li className={`bike ${soldOut ? 'sold-out' : ''}`}>
            <img src={photoName} alt={name}/>
            <div>
                <h3>{name}</h3>
                <p>{about}</p>
                <span>{soldOut ? 'SOLD OUT' : price}</span>
            </div>
        </li>
    )
}