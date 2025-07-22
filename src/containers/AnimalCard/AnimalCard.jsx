import React from "react";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Switcher from "../../components/Switcher/Switcher.jsx";
import Button from "../../components/Button/Button.jsx";
import DetailsList from "../../components/DetailsList/DetailsList.jsx";
import AboutSection from "../../components/AboutSection/AboutSection.jsx";
import ShuffleIcon from "../../assets/icons/shuffle_icon.svg";
import { getRandomAnimal } from "../../features/animalService.jsx";

export function AnimalCard() {
    const [loading, setLoading] = React.useState(true);
    const [animalData, setAnimalData] = React.useState();
    const [slideImages, setSlideImages] = React.useState([]);
    // Busca um animal aleatório inicial quando o componente é carregado
    React.useEffect(() => {
        const fetchAnimal = async () => {
            setLoading(true);
            const animal = await getRandomAnimal();
            setAnimalData(animal);
            const animalImages = JSON.parse(animal.fotos);
            setSlideImages(animalImages);
            setLoading(false);
        };
        fetchAnimal();
    }, []);

    const slides = [
        <div className="bg-primary flex h-full items-center justify-center">
            <img
                className="text-white text-3xl"
                src={loading ? "false" : slideImages[0]}
                alt=""            />
        </div>,
        <div className="bg-primary flex h-full items-center justify-center">
            <img
                className="text-white text-3xl"
                src={loading ? "false" : slideImages[1]}
                alt=""            />
        </div>,
        <div className="bg-primary h-full flex items-center justify-center">
            <img
                className="text-white text-3xl"
                src={loading ? "false" : slideImages[2]}
                alt=""            />
        </div>,
        <div className="bg-primary h-full flex items-center justify-center">
            <img
                className="text-white text-3xl"
                src={loading ? "false" : slideImages[3]}
                alt=""
            />
        </div>,
        <div className="bg-primary h-full flex items-center justify-center">
            <img
                className="text-white text-3xl"
                src={loading ? "false" : slideImages[4]}
                alt=""
            />
        </div>,
    ];

    return (
        <div className=" w-full grid grid-cols-[45%_50%] gap-[5%]">
            <div className="h-full w-full flex flex-col items-center gap-4">
                <Switcher options={["Sobre", "Ocorrências"]} className={`h-1/10`} />
                <Carousel className="min-h-85/100" items={slides} />
                <p className="italic text-gray-700 h-5/100">imagens retiradas da API iNaturalist</p>
            </div>
            <div className="h-175 w-full flex flex-col justify-between gap-8">
                <div className="flex flex-col justify-between">
                    {/*Nome Popular*/}
                    <h1
                        className="text-4xl max-w-fit bg-gradient-to-bl from-green to-blue
                                              text-transparent bg-clip-text 
                                              inline-block font-bold"
                    >
                        {loading ? "Carregando..." : animalData.nome_comum}
                    </h1>

                    {/* Nome científico */}

                    <h2 className="tracking-[7%] italic text-gray-700 font-medium">
                        {loading ? "..." : animalData.nome_cientifico}
                    </h2>
                </div>
                <div className="h-9/10 relative">
                    {/* Descrição do animal */}
                    <DetailsList data={"animalData"} />
                    {/* Sobre o animal */}
                    <AboutSection data={loading ? "..." : animalData.descricao} />
                    {/* Botão para alterar animal */}
                    <Button
                        icon={ShuffleIcon}
                        className={
                            "w-76 ml-auto mr-auto mt-4 absolute bottom-0 right-33/100"
                        }
                        onClick={async () => {
                            setLoading(true);
                            const animal = await getRandomAnimal();
                            setAnimalData(animal);
                            const animalImages = JSON.parse(animal.fotos);
                            setSlideImages(animalImages);
                            setLoading(false);
                        }}
                    >
                        Mostre-me outro!
                    </Button>
                </div>
            </div>
        </div>
    );
}
