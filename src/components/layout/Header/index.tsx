// Styles
import { useEffect, useState } from "react";
import { Counter } from "../../Counter";
import "./styles.scss";



export function Header() {
                                                              // days : hours : minutes :seconds
 
  return (
    <header id="header">
     <Counter />
   </header>
  );
}
