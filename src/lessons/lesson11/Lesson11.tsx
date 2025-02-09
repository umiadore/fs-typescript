import { useState } from "react";


interface IFact {
    fact: string;
}

interface IPhoto {
    url:string;
}


export default function Lesson11():JSX.Element {
  // задаем переменные состояния
  const [facts, setFact] = useState <string[]> ([]);
  const [pics, setPics] = useState <string[]> ([]);

  const [isLoading, setIsLoading] = useState <boolean> (true);
  
    return (
    <div>
      
    </div>
  )
}
