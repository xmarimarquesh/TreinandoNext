import Image from "next/image";

interface IData {
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}

// interface IDataStaticIndex {
//     results: IData[]
// }

const Img = async ({params: {id}} : {params: {id: string}}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data : IData = await res.json();
    
    return (
        <>
            <h1>{data.id}</h1>
            <p>{data.title}</p>
            <Image className="h-auto w-[500px]" src={data.url} alt="sla" width={100} height={100} />
        </>
    )
}

export default Img;

// export async function generateStaticParams() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
//     const data : IDataStaticIndex = await res.json();

//     return data.results.map((item) => item.id.toString());
// }