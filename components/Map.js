import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import Link from 'next/link'

import mapStyles from '../lib/MapsStyles'
import Stores from '../lib/Stores'

const libraries = ['places']

const mapContainerStyle = {
  width: '100%',
  height: '100%',
}

const center = {
  lat: 47.6105161,
  lng: -122.3425511,
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
}

export default function Map({ setStore, store }) {
  const [selected, setSelected] = useState(null)
  const { MAPS_KEY } = process.env

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: MAPS_KEY,
    libraries,
  })

  if (loadError) return 'Error loading maps'
  if (!isLoaded) return 'loading'

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13.2}
        center={center}
        options={options}>
        {Stores.map(location => (
          <Marker
            key={location.sub}
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: '/coffee_mug.svg',
              scaledSize: new window.google.maps.Size(32, 32),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(12, 3),
            }}
            onClick={() => setSelected(location)}
          />
        ))}
        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}>
            <div>
              <h1>{selected.sub}</h1>

              <div className="address">
                <address>{selected.address}</address>
                <address>{selected.address2}</address>
              </div>

              {store.sub != selected.sub ? (
                <button className="setLocationButton" onClick={() => setStore(selected)}>
                  Set pick up
                </button>
              ) : (
                <span>Your store</span>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  )
}
