import { useEffect, useState } from "react";
import "./clock.scss";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="clock"> Current time: {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
