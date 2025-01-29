import { useEffect, useState } from "react";


export default fuction Task08 () {

const [image, setImage] = useState <string>('');
const [refresh, setRefresh] = useState<number> ();

}

useEffect (() => {
    fetch ('https://randomfox.ca/floof/')
    .then (res => {
        if (!res.ok) {
            throw new Error(`Error is ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          setImage(data.message);
        })
        .catch((err) => {
            // error message это то сообщение что мы передали выше
            console.error('Error:', err.message);
          });
      }, []);

