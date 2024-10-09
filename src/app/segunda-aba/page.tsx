"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

interface DadosAPI {
    _id: string,
    name: string,
    imageUrl: string
}

const SegundaTela = () => {
    const [dados, setDados] = useState<DadosAPI[]>([]);

    useEffect(() => {
        axios.get("https://api.disneyapi.dev/character").then((res) => {
            console.log(res.data.data);
            setDados(Array.isArray(res.data.data) ? res.data.data : [res.data.data]);
            // setData(Array.isArray(res.data) ? res.data : [res.data]);
        });

        return() => {}
    })

    return (
        <>
            <h1>DISNEY API</h1>
            {dados.map((item, index) => {
                return (
                    <div key={index}>
                        <Image src={item.imageUrl} alt="" width={200} height={200}/>
                        <h1>{item.name}</h1>
                        <h2>{item._id}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default SegundaTela;