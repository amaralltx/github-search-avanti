export default function DetailsList({data}) {

    return (
        <ul className="">
            <li className="flex pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Tipo: </span> &nbsp; <span className="tracking-[7%]">{data ?? "Tipo"}</span> 
            </li>
            <li className="flex pt-4 pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Dieta: </span> &nbsp; <span className="tracking-[7%]">{data ?? "Dieta"}</span> 
            </li>
            <li className="flex pt-4 pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Peso: </span> &nbsp; {data ?? "Peso"}
            </li>
            <li className="flex pt-4 pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Tamanho: </span> &nbsp; {data ?? "Tamanho"}
            </li>
            <li className="flex pt-4 pb-4 border-b-1 border-gray-300">
                <span className="font-bold">Risco de extinção: </span> &nbsp; {data ?? "Risco de extinção"}
            </li>
        </ul>
    );
}