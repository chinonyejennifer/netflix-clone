//to-do:
//navbar component, 
//hero component - this is where we will fetch hero data (API),
//cardlist component - this is where we will fetch data (API),
//card component,
//footer
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CardList } from "@/components/cardlist";


export default function BrowsePage() {
    return (
        <div className="flex-1">
            <Navbar />
            <Hero />
            <p className="flex font-semibold text-sm bg-black"> Continue watching </p>
            <CardList />
        </div>

    );
}

