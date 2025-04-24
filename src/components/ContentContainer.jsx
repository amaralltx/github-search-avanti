import { useState } from "react";
import UserCard from "./Card/UserCard";
import ContentHeader from "./Header/ContentHeader";
import InputSearch from "./Search/InputSearch";
import LoadingSpinner from "./Loading/LoadingSpinner";

export default function ContentContainer() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorRequest, setErrorRequest] = useState(null);

    // callback passado ao InputSearch
    async function handleSearch(username) {
        setLoading(true);
        setErrorRequest(null);
        setUserData(null);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            const data = await response.json();
            setUserData(data);
        } catch (err) {
            console.log(err);
            if (err.message === "404") {
                const message = "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente";
                setErrorRequest(message);
            } else {
                const message = "Ocorreu um erro ao buscar o perfil. Tente novamente mais tarde.";
                setErrorRequest(message);
            }
        } finally {
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
            {loading && <LoadingSpinner></LoadingSpinner>}
            {userData && <UserCard user={userData} />}
            {errorRequest && <p className="w-3/4 flex bg-card-bg rounded-3xl py-8 px-16 text-red-500 text-xl justify-center align-middle">{errorRequest}</p>}
        </div>
    );
}
