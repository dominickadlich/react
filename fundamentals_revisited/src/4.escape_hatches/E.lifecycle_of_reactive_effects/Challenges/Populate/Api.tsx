export interface ResultInterface {
  id: string;
  name: string;
}

export function FetchData(url: string): Promise<ResultInterface[]> {
  if (url === "/planets") {
    return FetchPlanets();
  } else if (url.startsWith("/planets/")) {
    const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
    if (!match || !match[1] || !match[1].length) {
      throw Error(
        `Expected URL like "/planets" or "/planets/earth/places". Received: ${url}.`,
      );
    }
    return FetchPlaces(match[1]);
  } else
    throw Error(
      `Expected URL like "/planets" or "/planets/earth/places". Received: ${url}.`,
    );
}

async function FetchPlanets(): Promise<ResultInterface[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "earth",
          name: "Earth",
        },
        {
          id: "venus",
          name: "Venus",
        },
        {
          id: "mars",
          name: "Mars",
        },
      ]);
    }, 1000);
  });
}

async function FetchPlaces(planetId: string): Promise<ResultInterface[]> {
  if (typeof planetId !== "string") {
    throw Error(
      `fetchPlaces(planetId) expects a string argument. Instead received: ${planetId}`,
    );
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      if (planetId === "earth") {
        resolve([
          {
            id: "laos",
            name: "Laos",
          },
          {
            id: "spain",
            name: "Spain",
          },
          {
            id: "vietnam",
            name: "Vietnam",
          },
        ]);
      } else if (planetId === "venus") {
        resolve([
          {
            id: "aurelia",
            name: "Aurelia",
          },
          {
            id: "diana-chasma",
            name: "Diana Chasma",
          },
          {
            id: "kumsong-vallis",
            name: "Kumsong Vallis",
          },
        ]);
      } else if (planetId === "mars") {
        resolve([
          {
            id: "aluminum-city",
            name: "Aluminum City",
          },
          {
            id: "new-new-york",
            name: "New New York",
          },
          {
            id: "vishniac",
            name: "Vishniac",
          },
        ]);
      } else throw Error(`Unknown planet ID: ${planetId}`);
    }, 1000);
  });
}
