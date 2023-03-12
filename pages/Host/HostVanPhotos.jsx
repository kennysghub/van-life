import {useOutletContext} from 'react-router-dom';

export default function HostVanPhotos() {
  const [currentVan, setCurrentVan] = useOutletContext();
  return (
    <div>
        <img className="host-van-detail-image"src={currentVan.imageUrl} alt="" />
    </div>
  )
}
