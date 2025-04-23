import { useState } from "react";
import search_icon from "../../assets/svg/search-icon.svg";

export default function InputSearch({ onSearch }) {

    const [errorInput, setErrorInput] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Se o form não for preenchido, ativa o estado de erro e retorna
        if (!e.target.checkValidity()) {
            setErrorInput(true);
            return;
        } else {
            setErrorInput(false);
        }
        // Valor digitado pelo usuário
        const username = e.target.elements.username.value.trim();
        if (username) onSearch(username);
    };

    return (
        <form
            id="form"
            onSubmit={handleSubmit}
            className="w-1/2 
                         relative
                         text-xl 
                         text-black 
                         rounded-[10px] 
                         overflow-hidden"
            noValidate
        >
            <input
                name="username"
                type="search"
                placeholder={`${errorInput ? 'Campo obrigatório!' : 'Digite um usuário do Github'}`}
                className={`box-content 
                            w-full 
                            p-4 
                            transition-colors 
                            ${errorInput ? "bg-red-200" : "bg-white"}`}
                onFocus={() => errorInput && setErrorInput(false)}
                required
            />
            <button
                type="submit"
                className="absolute h-97/100 
                         bg-primary 
                         end-0 
                         bottom-0 
                         rounded-[10px] 
                         p-4 
                         m-[1px] 
                         hover:cursor-pointer 
                         transition-colors
                         hover:bg-secondary "
            >
                <img src={search_icon} alt="Ícone de lupa" />
            </button>
        </form>
    );
}
