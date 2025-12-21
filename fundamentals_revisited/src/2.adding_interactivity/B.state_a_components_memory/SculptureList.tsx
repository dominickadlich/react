import { useState } from "react";
import { sculptureList } from "./Data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextPage() {
    setIndex(index + 1);
  }

  function handlePrevPage() {
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handlePrevPage} disabled={index === 0}>
        Prev
      </button>
      <button
        onClick={handleNextPage}
        disabled={index + 1 === sculptureList.length}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} height={500} width={500} />
      <div>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} Details
        </button>
        {showMore && <p> {sculpture.description} </p>}
      </div>
    </>
  );
}
