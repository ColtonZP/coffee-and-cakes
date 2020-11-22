import { useState } from 'react'

import Stores from '../lib/Stores'
import arrow from '../public/arrow.svg'

export default function StoreInfo({ store, setStore }) {
  const [options, toggleOptions] = useState(false)

  return (
    <div className="storeSelection">
      <div className="store">
        <button className="storeName" onClick={() => toggleOptions(!options)}>
          {store.name ? store.name : 'Store not selected'} <img src={arrow} alt="" />
        </button>
        {options && (
          <div className="storeOptions">
            {Stores.map(
              location =>
                location.name !== store.name && (
                  <button
                    key={location.name}
                    onClick={() => {
                      toggleOptions(!options)
                      setStore(location)
                    }}>
                    {location.name}
                  </button>
                ),
            )}
          </div>
        )}
      </div>
      {store.name && (
        <>
          <address>{store.address}</address>
          <address>{store.address2}</address>
        </>
      )}
    </div>
  )
}
