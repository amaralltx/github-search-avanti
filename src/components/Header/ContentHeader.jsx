import logo from "../../assets/svg/github-logo.svg";
import logo_text from "../../assets/svg/github-text-logo.svg";

export default function ContentHeader() {
    return (
        <header
            className="flex
                       gap-x-3
                       font-semibold
                       text-6xl
                       "
        >
            <img src={logo} alt="" />
            <span>Perfil</span>
            <img className="py-1" src={logo_text} alt="" />
        </header>
    );
}
