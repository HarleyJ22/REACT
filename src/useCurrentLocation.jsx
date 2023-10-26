import { useEffect, useState } from "react";

const useCurrentLocation = () => {
    const [position, setPosition] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition (
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setPosition({ latitude, longitude});
                    setLoading(false);
                    setError(null);
                },
                (error) => {
                    setError(error.message);
                    setLoading(false);
                    setPosition(null);
                }
            );
        } else {
            setError("Error position");
            setLoading(false);
            setPosition(null);
        }
    }
    useEffect(() => {
        getCurrentLocation();
    })

    return { position, loading, error, getCurrentLocation};
}

export default useCurrentLocation;