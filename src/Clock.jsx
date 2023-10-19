import { useContext, useEffect, useState } from "react";
import "./clock.scss";
import { LanguageContext } from "./LanguageContext";

function Clock() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="clock">  {language === 'IT' ? 'Ora attuale: ' : 'Current time: '} {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
