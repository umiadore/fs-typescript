import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import "./fetchfox.css";
import MyButton from "../myButton/MyButton";

interface IFoxData {
  image: string;
  link: string;
}

export default function Fetchfox() {
  const [imgFox, setImgFox] = useState<string>("");
  const [isLoading, SetIsLoading] = useState<boolean>(true);

  // если через слово function, async писался бы в начале, в ином случае - после равно
  const getFox = async (): Promise<void> => {
       //! включаем loader
    SetIsLoading(true); 
    const res = await fetch("https://randomfox.ca/floof/");
    const data: IFoxData = await res.json();
    setImgFox(data.image);
    //! выключаем loader
    SetIsLoading(false);
  };

  useEffect(() => {
    getFox();
  }, []);

  return (
    <div className="one">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>FetchFox 🦊</h2>
          <div className="foxWrapper">
            {" "}
            <img src={imgFox} alt="" />
          </div>
          <MyButton func={getFox} text="thank you, next" />
        </>
      )}
    </div>
  );
}
