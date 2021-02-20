import React from "react";
import useAxios from "axios-hooks";

export default function Fetch() {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://api.mocki.io/v1/b043df5a"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      {data.map((city) => (
        <p key={city.name}>{city.name}</p>
      ))}
    </div>
  );
}
