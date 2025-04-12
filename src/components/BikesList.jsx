import Bike from "./Bike.jsx";
import bikesData from '../../data.js';

export default function BikesList() {
    console.log(bikesData);
    return (
        <ul className='bikes'>
            {bikesData.map((bike) => (
                <Bike key={bike.name} {...bike}/>
            ))}
        </ul>
    )
}