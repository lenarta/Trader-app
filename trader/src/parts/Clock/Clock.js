import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [value, setValue] = useState(Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(Date().slice(0, 33)), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p>{value}</p>;
};

export default Timer;
