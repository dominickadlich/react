import { UseSelectOptions } from "./UseSelectOptions";

export default function Page() {
  const [planetList, planetId, setPlanetId] = UseSelectOptions("/planets");

  const [placeList, placeId, setPlaceId] = UseSelectOptions(
    planetId ? `/planets/${planetId}/places` : null,
  );

  return (
    <>
      <label>
        Pick a Planet:{" "}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
          }}
        >
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a Place:{" "}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}
        >
          {placeList.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You're going to: {placeId || "???"} on {planetId || "???"}
      </p>
    </>
  );
}
