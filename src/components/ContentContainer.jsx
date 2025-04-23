import { useState } from "react";
import UserCard from "./Card/UserCard";
import ContentHeader from "./Header/ContentHeader";
import InputSearch from "./Search/InputSearch";

export default function ContentContainer() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorRequest, setErrorRequest] = useState(null);

    // callback passado ao InputSearch
    async function handleSearch(username) {
        //Começa carregando
        setLoading(true);
        setErrorRequest(null);
        setUserData(null);
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}`
            );
            if (!response.ok) {
                throw new Error(`Status: ${response.status}`);
            }
            const data = await response.json();
            // Atualiza os dados com a resposta em formato json
            setUserData(data);
        } catch (err) {
            // Se pegar um erro exibe a mensagem
            errorRequest(err.message);
        } finally {
            // Desativa o loading
            setLoading(false);
        }
    }
    return (
        <div
            className="min-h-7/10
                        w-4/5
                        flex
                        flex-col
                        items-center
                        gap-8
                        bg-black
                        text-white
                        py-24
                       "
        >
            <ContentHeader></ContentHeader>
            <InputSearch onSearch={handleSearch}></InputSearch>
            {/* Carrega de acordo com o estado */}
            {loading && <p className="animate-spin">Carregando...</p>}
            {errorRequest && <p className="text-red-500">Erro: {errorRequest}</p>}
            {userData && <UserCard user={userData} />}
        </div>
    );
}
