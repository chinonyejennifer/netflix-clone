import { Button } from "./ui/button"

export function Hero() {
    return (
        // Create the background image 
        <div className="h-screen w-full bg-cover bg-center flex items-end" style={{ backgroundImage: "url(../princess-diaries.jpg)" }}>
            {/* Div Content placed at the bottom-left */}
            <div className="w-1/2 absolute bottom-0 left-0 mb-0 ml-2 flex flex-col">
                {/* Logo + text: Netflix */}
                <span className="flex items-start items-center">
                    <img className="h-4 w-2 ml-3 mr-2" src="../netflix-logo.png" />
                    <p className="text-white font-serif text-xl"> THE PRINCESS DIARIES </p>
                </span>

                {/* Create buttons at the end of the div */}
                <span className="flex p-2 justify-start">
                    <Button className="flex items-center bg-white hover:bg-red-600">
                        <img className="h-4 w-4 mr-1" src="../play-button.png" />
                        <p className="text-black text-[0.7rem]"> Play </p>
                    </Button>
                    {/* Create second button */}
                    <Button className="mr-6 ml-4 bg-black text-white hover:bg-white">
                        <img className="h-4 w-4 ml-1 mr-1" src="../icon-white.png" />
                        <p className="text-[0.75rem]"> More info </p>
                    </Button>
                </span>
            </div >
        </div >
    );
}


//Aligning the content between the centre and the bottom of the page
// div className="absolute bottom-0 left-0 mb-8 ml-8"