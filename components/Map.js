import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'

import mapStyles from '../lib/MapsStyles'

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

const locations = [
    {
        lat: 47.6105161,
        lng: -122.3425511,
        sub: 'Pike Place',
        address: '1915 1st Ave',
        address2: 'Seattle, WA 98101',
    },
    {
        lat: 47.624059,
        lng: -122.3213205,
        sub: 'Capital Hill',
        address: '536 Broadway E',
        address2: 'Seattle, WA 98102',
    },
    {
        lat: 47.639718,
        lng: -122.3990656,
        sub: 'Magnolia',
        address: '3200 W McGraw St',
        address2: 'Seattle, WA 98199',
    },
    {
        lat: 47.583712,
        lng: -122.3867149,
        sub: 'North Admiral',
        address: '2206 California Ave SW',
        address2: 'Seattle, Wa 98116',
    },
]

export default function Map({ bag }) {
    const [selected, setSelected] = useState(null)
    const { MAPS_KEY } = process.env
    const { setLocation } = bag

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
                {locations.map(location => (
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

                            <button
                                className="setLocationButton"
                                onClick={() => setLocation(selected)}>
                                Set as my location
                            </button>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </>
    )
}
