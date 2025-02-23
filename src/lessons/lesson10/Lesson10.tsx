import { useEffect, useState } from "react";
import styles from "./lesson10.module.css";
import Loader from "../../components/loader/Loader";
import MyButton from "../../components/myButton/MyButton";

interface IPhotoFact {
  fact: string;
  url: string;
}

export default function Lesson10(): JSX.Element {
  // переменные состояния
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [photoFact, setPhotoFact] = useState<IPhotoFact[]>([]);

  const getFactAndPic = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const resFact = await fetch("https://catfact.ninja/fact");
      const dataFact = await resFact.json();
      
      const resPhoto = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
      );
      const dataPhoto = await resPhoto.json();

      setPhotoFact((prev) => [
        ...prev,
        { fact: dataFact.fact, url: dataPhoto[0].url },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  const handleDelete = (): void => {
    setPhotoFact([]);
  };

  console.log(photoFact);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {photoFact.map((card, index) => (
            <div key={index} className={styles.card}>
              <p>{card.fact}</p>
              <img src={card.url} alt="Cat" className={styles.catPic} />
            </div>
          ))}
        </>
      )}
      <div>
        <MyButton func={getFactAndPic} text="Get more info" />
        <MyButton func={handleDelete} text="Delete all data" />
      </div>
    </div>
  );
}