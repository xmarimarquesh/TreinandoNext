"use client"
import axios from "axios";
import { useEffect, useState } from "react";
// import Image from "next/image";

interface DadosAPI {
    _id: string,
    name: string,
    imageUrl: string
}

const SegundaTela = () => {
    const [dados, setDados] = useState<DadosAPI[]>([]);
    const [personagem, setPersonagem] = useState("");

    useEffect(() => {
        axios.get(`https://api.disneyapi.dev/character?name=${personagem}`).then((res) => {
            console.log(res.data.data);
            setDados(Array.isArray(res.data.data) ? res.data.data : [res.data.data]);
        });

        return() => {}
    })

    return (
        <>
            <h1>DISNEY API</h1>
            <input type="text" value={personagem} onChange={(e) => setPersonagem(e.target.value)} />
            {dados.map((item, index) => {
                return (
                    <div key={index}>
                        <a href={`/perso/${item._id}`}><img src={item.imageUrl} alt="" width={200} height={200}/></a>
                        <h1>{item.name}</h1>
                        <h2>{item._id}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default SegundaTela;