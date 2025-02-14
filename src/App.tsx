import { useEffect, useState } from "react";
import BluePrint from "./components/BluePrint.tsx";

export default function App() {
    const[data, setData]=useState({});

    useEffect(()=> {
      async function fetchData() {
        const rawData = await fetch("https://catfact.ninja/fact");

        const results: JSON= await rawData.json();
        console.log("res", results);
        setData(results);
      }
      fetchData()
          .then(data => console.log("working", data))
          .catch((e)=> console.log("this happened" + e));

    },[]);

  return (
  <>
      <BluePrint data={data}/>
  </>
  )
}





