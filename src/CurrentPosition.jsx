import useCurrentLocation from "./useCurrentLocation";

const CurrentPosition = () => {
  const { position, loading, error, getCurrentlocation } = useCurrentLocation();

  return (
    <>
      <h2>Current Position</h2>
      {loading ? (
        <p> Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : position ? (
        <div>
          <p>Latitude: {position.latitude}</p>
          <p>Longitude: {position.longitude}</p>
        </div>
      ) : (
        <button onClick={getCurrentlocation}> Current Position</button>
      )}
    </>
  );
};

export default CurrentPosition;
