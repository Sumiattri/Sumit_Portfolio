// DistanceMap.jsx
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

// Fix icon issue with react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const DistanceMap = () => {
  const [myLocation, setMyLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  // Haversine formula to calculate distance
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    // Get user's IP-based location
    const getUserLocation = async () => {
      try {
        const res = await axios.get("https://ipapi.co/json");
        const { latitude, longitude } = res.data;
        setUserLocation({ lat: latitude, lng: longitude });
      } catch (err) {
        console.error("IP location fetch failed:", err);
      }
    };

    // Get my current browser location
    const getMyLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMyLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => console.error("Location error:", err),
        { enableHighAccuracy: true }
      );
    };

    getMyLocation();
    getUserLocation();
  }, []);

  useEffect(() => {
    if (myLocation && userLocation) {
      const d = calculateDistance(
        myLocation.lat,
        myLocation.lng,
        userLocation.lat,
        userLocation.lng
      );
      setDistance(d.toFixed(2));
    }
  }, [myLocation, userLocation]);

  if (!myLocation || !userLocation) return <p>Loading map and locations...</p>;

  return (
    <div style={{ height: "500px", width: "100%", marginTop: "2rem" }}>
      <MapContainer
        center={myLocation}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={myLocation}>
          <Popup>Your Location</Popup>
        </Marker>

        <Marker position={userLocation}>
          <Popup>Visitor’s Location</Popup>
        </Marker>

        <Polyline positions={[myLocation, userLocation]} color="blue" />
      </MapContainer>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Distance between you and visitor: <strong>{distance} km</strong>
      </p>
    </div>
  );
};

export default DistanceMap;
