import Character from "../interfaces/Character.ts";

export default function BluePrint({data}:{data:Character}) {
    return (
        <div key={data.fact}>
            <h1>{data.fact}</h1>
            <p>Length of fact is: {data.length}</p>
        </div>
    )
}