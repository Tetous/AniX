import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import StyledCards from "../styles/Cards";

export default function Cards({ animes }) {
  const [end, setEnd] = useState(10);
  const [element, setElement] = useState(null);

  const loadMore = () => {
    if (end < animes.length) {
      setEnd((end) => end + 10);
    }
  };

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <React.Fragment>
      <StyledCards>
        {animes.slice(0, end).map((anime, idx) => (
          <Card key={anime.slug} anime={anime} idx={idx + 1} />
        ))}
      </StyledCards>
      <span ref={setElement} />
    </React.Fragment>
  );
}
