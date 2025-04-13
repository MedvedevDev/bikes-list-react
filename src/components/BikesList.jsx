import Bike from "./Bike.jsx";
import bikesData from '../../data.js';

export default function BikesList() {
    const bikes = bikesData;
    return (
        <>
            { bikes.length > 0 && (
                <ul className='bikes'>
                    {bikes.map((bike) => (
                        <Bike key={bike.name} {...bike}/>
                    ))}
                </ul> )}</>
    )
}