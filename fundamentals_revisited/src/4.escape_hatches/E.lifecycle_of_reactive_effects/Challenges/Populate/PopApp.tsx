import { useEffect, useState } from "react";
import { FetchData, type ResultInterface } from "./Api";

export default function Page() {
  const [planetList, setPlanetList] = useState<ResultInterface[]>([]);
  const [planetId, setPlanetId] = useState<string>("");

  const [placeList, setPlaceList] = useState<ResultInterface[]>([]);
  const [placeId, setPlaceId] = useState<string>("");

  useEffect(() => {
    let ignore = false;
    FetchData("/planets").then((result) => {
      if (!ignore) {
        console.log("Fetched a list of planets");
        setPlanetList(result);
        setPlanetId(result[0].id);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (planetId === "") {
      // Planet hasn't been selected
      return;
    }

    let ignore = false;
    FetchData(`/planets/${planetId}/places`).then((result) => {
      if (!ignore) {
        console.log("Fetched list of places");
        setPlaceList(result);
        setPlaceId(result[0].id);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

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
