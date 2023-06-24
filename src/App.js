import "./styles.css";
import { useEffect, useState, useRef } from "react";
import ScrollPercentageIndicator from "./components/ScrollPercentageIndicator";

import { calculatPercentage } from "./utils/calculatPercentage";

export default function App() {
  const divRef = useRef();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [componentHieght, setComponentHirght] = useState(0);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const hundelScroll = () => {
      const position = window.pageYOffset;
      setCurrentPosition(position);
      calculatPercentage(componentHieght, currentPosition, setPercentage);
    };
    window.addEventListener("scroll", hundelScroll);
    const Hieght = divRef.current.clientHeight;
    setComponentHirght(Hieght);
    return () => window.removeEventListener("scroll", hundelScroll);
  }, [currentPosition]);

  console.log(percentage);

  return (
    <div
      ref={divRef}
      className=" h-full 
                 w-full 
                    "
    >
      <ScrollPercentageIndicator percentage={percentage} />
      <section className="h-[300px] bg-red-500"></section>
      <section className="h-[300px] bg-green-500"></section>
      <section className="h-[300px] bg-blue-500"></section>
      <section className="h-[300px] bg-gray-500"></section>
    </div>
  );
}
