import React from 'react'
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";


function Map() {
  return (
    <div className="map">
      <LeafletMap
      className="markercluster-map"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
      >
        <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  )
} 

export default Map