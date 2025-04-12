export  default function Bike({ name, about, price, photoName, soldOut}) {
    return(
        <li className='bike'>
            <img src={photoName} alt={name}/>
            <div>
                <h3>{name}</h3>
                <p>{about}</p>
                <span>{price}</span>
            </div>
        </li>
    )
}