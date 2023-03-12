import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import VanDetail from './VanDetail';
/**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */

export default function Vans() {
    const [vanData,setVanData] = useState([])

    useEffect( () => {
        fetch("/api/vans")
            .then((response)=> response.json())
            .then((data) => setVanData(data.vans))
    }, [])
    const vanElements = vanData.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">   
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    return (
    <div className='van-list-container'>
        <h1>Explore our van options</h1>
        <div className='van-list'>
            {vanElements }
        </div>
    </div>
  )
}
