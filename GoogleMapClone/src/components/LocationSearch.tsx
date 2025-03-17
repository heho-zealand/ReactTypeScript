import type { Place } from "../api/Place";
import { useState, Fragment } from "react";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;    //onPlaceClick er en callback function som tager en place som argument og returnerer void
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {   //Props til LocationSearch er onPlaceClick som er en callback function af typen (place: Place) => void
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);   //Bemærk at places er af typen Place[], vigtigt at annotere med <Place[]> ellers vil typescript ikke kunne inferere typen

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {   //handleSubmit er en async function som tager et event af typen React.FormEvent<HTMLFormElement> som argument
    event.preventDefault();

    const results = await search(term);
    console.log(results);
    setPlaces(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      <h1 className="font-bold mt-6">Found Locations</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p className="text-sm">{place.name}</p>
              <button
                className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
                onClick={() => onPlaceClick(place)}
              >
                Go
              </button>
              <div className="border-b w-full col-span-2" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
