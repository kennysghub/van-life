import {useEffect,useState} from 'react';
import {Link,useSearchParams} from 'react-router-dom';
import VanDetail from './VanDetail';
  /**
     * Challenge: filter the list of vans based on the `typeFilter`
     * we created earlier. For now, just enter "simple", "luxury",
     * or "rugged" into the search param in the URL to check your work.
     */
export default function Vans() {
    const [vanData,setVanData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    let typeFilter = searchParams.get('type')
    console.log(typeFilter)

    const display = typeFilter ?
    vanData.filter(van => van.type === typeFilter)
    : vanData

    useEffect( () => {
        fetch("/api/vans")
            .then((response)=> response.json())
            .then((data) => setVanData(data.vans))
    }, [])
    const vanElements = display.map(van => (
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
        <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
            <button 
                onClick={() => setSearchParams({type: "simple"})}
                className="van-type simple"
            >Simple</button>
            <button 
                onClick={() => setSearchParams({type: "luxury"})}
                className="van-type luxury"
            >Luxury</button>
            <button 
                onClick={() => setSearchParams({type: "rugged"})}
                className="van-type rugged"
            >Rugged</button>
            <button 
                onClick={() => setSearchParams("")}
                className="van-type clear-filters"
            >Clear filter</button>
        
        </div>
        <div className="van-list">
            {vanElements}
        </div>
    </div>
  )
}
