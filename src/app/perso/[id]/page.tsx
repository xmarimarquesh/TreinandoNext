import Image from "next/image";

interface DadosAPI {
    _id: string,
    name: string,
    imageUrl: string
}


const Img = async ({params: {id}} : {params: {id: string}}) => {
    const res = await fetch(`https://api.disneyapi.dev/character/${id}`);
    const data : DadosAPI = await res.json();
    
    return (
        <>
            <h1>{data._id}</h1>
            <p>{data.name}</p>
            <img className="h-auto w-[500px]" src={data.imageUrl} alt="sla" width={100} height={100} />
        </>
    )
}

export default Img;
