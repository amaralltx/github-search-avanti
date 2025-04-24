import logo from "../../assets/svg/avanti-logo.svg";

export default function LoadingSpinner() {
    return (
        <div className="relative w-24 h-24  flex items-center justify-center">
            <img
                src={logo}
                alt=""
                className="w-12 h-12 animate-pulse"
            />
            <div
                className="absolute inset-0 w-24 h-24 border-4 border-t-transparent border-primary rounded-full animate-spin"
            ></div>
        </div>
    );
}