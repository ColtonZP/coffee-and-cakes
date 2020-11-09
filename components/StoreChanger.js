import { useState } from 'react'

import Stores from '../lib/Stores'
import arrow from '../public/arrow.svg'

export default function StoreInfo({ store, setStore }) {
    const [options, toggleOptions] = useState(false)

    return (
        <div className="storeSelection">
            <div className="store">
                <button className="storeName" onClick={() => toggleOptions(!options)}>
                    {store.sub ? store.sub : 'Store not selected'} <img src={arrow} alt="" />
                </button>
                {options && (
                    <div className="storeOptions">
                        {Stores.map(
                            location =>
                                location.sub !== store.sub && (
                                    <button
                                        key={location.sub}
                                        onClick={() => {
                                            toggleOptions(!options)
                                            setStore(location)
                                        }}>
                                        {location.sub}
                                    </button>
                                ),
                        )}
                    </div>
                )}
            </div>
            {store.sub && (
                <>
                    <address>{store.address}</address>
                    <address>{store.address2}</address>
                </>
            )}
        </div>
    )
}
