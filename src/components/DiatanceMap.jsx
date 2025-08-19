import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

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

// Component to fit bounds automatically
function FitBounds({ points }) {
  const map = useMap();

  useEffect(() => {
    if (points.length > 1) {
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 3 }); // smaller padding, limit zoom-in
    }
  }, [points, map]);

  return null;
}

const DistanceMap = () => {
  const { darkMode } = useTheme();
  // Fixed location: Faridabad, Haryana
  const myLocation = { lat: 28.4089, lng: 77.3178 }; // Faridabad coordinates
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  // Haversine formula
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
    // Get visitor's location via IP
    const getUserLocation = async () => {
      try {
        const res = await axios.get("https://ipapi.co/json");
        const { latitude, longitude } = res.data;
        setUserLocation({ lat: latitude, lng: longitude });
      } catch (err) {
        console.error("IP location fetch failed:", err);
      }
    };
    getUserLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      const d = calculateDistance(
        myLocation.lat,
        myLocation.lng,
        userLocation.lat,
        userLocation.lng
      );
      setDistance(d.toFixed(2));
    }
  }, [userLocation]);

  if (!userLocation)
    return <p className="text-center ">Loading map and locations...</p>;

  return (
    <div
      className={` ${
        darkMode ? "dark" : ""
      } w-full h-full pb-20  rounded-md overflow-hidden relative z-0`}
    >
      <div className="h-full w-full">
        <MapContainer
          dragging={false}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution=""
            url="https://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          />
          <Marker position={myLocation}>
            <Popup>My Location: Faridabad, Haryana</Popup>
          </Marker>
          <Marker position={userLocation}>
            <Popup>Visitor’s Location</Popup>
          </Marker>
          <Polyline positions={[myLocation, userLocation]} color="blue" />
          <FitBounds points={[myLocation, userLocation]} />
        </MapContainer>
      </div>

      <div className="text-center p-4 dark:text-white text-black font-[font3] text-[15px]">
        <section className="">
          I am from Haryana, India, roughly
          <strong
            className="text-[#FF4676] px-1 "
            style={{ fontStyle: "italic" }}
          >
            {distance} km
          </strong>
          away
        </section>
        <section>
          from your current location, according to your IP address.
        </section>
      </div>
    </div>
  );
};

export default DistanceMap;
