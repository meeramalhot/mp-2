import { useEffect, useState } from "react";
import styled from "styled-components";
import BluePrint from "./components/BluePrint.tsx";
import Character from "./interfaces/Character.ts";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: "Lucida Console", "Courier New", monospace;
  width: 80vw;
  margin: auto;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const CatImage = styled.img`
  width: 80vh;
  height: auto;   
  margin: auto;

`;

export default function App() {
    const[data, setData]=useState<Character>({fact:"", length:0});


    useEffect(()=> {
      async function fetchData() {
        const rawData = await fetch("https://catfact.ninja/fact");

        const results = await rawData.json();
        console.log("res", results);
        setData(results);
      }
      fetchData()
          .then(data => console.log("working", data))
          .catch((e)=> console.log("this happened" + e));

    },[]);

  return (
  <>
      <Container>
      <BluePrint data={data}/>
      <ImageDiv>
        <CatImage src="/cat.gif" alt="cat sleeping gif"/>
      </ImageDiv>
      </Container>
  </>
  )
}





