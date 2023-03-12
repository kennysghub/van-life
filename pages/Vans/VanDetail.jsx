import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react'
export default function VanDetail() {
    const [vanData, setVanData] = useState(null)
    // Object {id: /vans/:id} url params are keys and the actual url values are values on the key val pair 
    const params = useParams();
    useEffect( () => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanData(data.vans))
    },[params.id])

    return (
        <div className="van-detail-container">
        {vanData ? (
            <div className="van-detail">
                <img src={vanData.imageUrl} />
                <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
                <h2>{vanData.name}</h2>
                <p className="van-price"><span>${vanData.price}</span>/day</p>
                <p>{vanData.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...🌀</h2>}
    </div>
  )
}
