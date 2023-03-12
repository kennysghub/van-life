import {useOutletContext} from 'react-router-dom';
export default function HostVanPricing() {
  const [currentVan, setCurrentVan] = useOutletContext();
  return (
    <div>
       <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    </div>
  )
}
