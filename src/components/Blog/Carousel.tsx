// Carousel.js

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  const props = useSpring({
    transform: `translateX(-${index * 100}%)`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div style={{ overflow: 'hidden' }}>
      <animated.div style={{ display: 'flex', width: `${items.length * 100}%`, ...props }}>
        {items.map((item, i) => (
          <div key={i} style={{ flex: '0 0 100%', minWidth: '100%' }}>
            {item}
          </div>
        ))}
      </animated.div>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Carousel;
