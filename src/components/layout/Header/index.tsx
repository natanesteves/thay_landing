// Styles
import { useEffect, useState } from "react";
import "./styles.scss";



export function Header() {
                                                              // days : hours : minutes :seconds
  const [totalTimeInseconds, setTotalTimeInSeconds] = useState( (20 * 24 * 60 * 60))
  const days = Math.floor ( totalTimeInseconds / 60 / 60 / 24)
  const hours = Math.floor ( (totalTimeInseconds / 60 / 60) %24)
  const minutes = Math.floor ( (totalTimeInseconds / 60 )% 60) 
  const seconds = totalTimeInseconds % 60
  
  useEffect(() => {
  
    setTimeout ( () => {
  setTotalTimeInSeconds (totalTimeInseconds - 1) }, 1000)
}, [totalTimeInseconds ])

  return (
    <header id="header">
      <span>{days.toString().padStart(2, "0")}</span>
   <span>:</span>
  <span>{hours.toString().padStart(2, "0")}</span>
   <span>:</span>
   <span>{minutes.toString().padStart(2, "0")}</span>
   <span>:</span>
   <span>{seconds.toString().padStart(2, "0")}</span>
   <br></br>
   <span>Dias:</span>
   <span>Horas:</span>
   <span>Minutos:</span>
   <span>Segundos:</span>
   </header>
  );
}
