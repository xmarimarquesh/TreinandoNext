"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Data {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function Home() {
  const [user, setUser] = useState<string>("");
  const [foto, setFoto] = useState("");
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {

    axios.get(`https://jsonplaceholder.typicode.com/photos/${foto}`).then((res) => {
      console.log(res.data)
      setData(Array.isArray(res.data) ? res.data : [res.data]);
    })

    return () => {}
  }, [foto]);

  return (
    <div>
      <h1>OLÁ - TELA UM</h1>
      <input type="text" placeholder="Pesquisar..." value={foto} onChange={(e) => setFoto(e.target.value)}/>
      <div className="flex flex-row wrap flex-wrap text-gray-400">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col w-1/6 h-[300px] justify-end items-center">
              <h1 className="w-[200px] text-center flex justify-center items-center">{item.title}</h1>
              <a href={`/imagem/${item.id}`}><img src={item.thumbnailUrl} alt="Imagem" width={150} height={150}/></a>
            </div>
          )
        })}
      </div>
    </div>

  );
}
