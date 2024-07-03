//to-do:
//navbar component, 
//hero component - this is where we will fetch hero data (API),
//cardlist component - this is where we will fetch data (API),
//card component,
//footer
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CardList } from "@/components/cardlist";
import Footer from "@/components/footer";


export default function BrowsePage() {
    return (
        <div className="flex-1">
            <Navbar />
            <Hero />
            <div className="mb-8 mt-8">
                <h2 className="font-semibold text-xl mb-2 bg-black"> Now Playing </h2>
                <CardList movieCategory="now_playing" />
            </div>
            <div className="mb-4">
                <h2 className="font-semibold text-xl mb-2 bg-black"> Top Rated </h2>
                <CardList movieCategory="top_rated" />
            </div>
            <div className="mb-4">
                <h2 className="font-semibold text-xl mb-2 bg-black"> Upcoming </h2>
                <CardList movieCategory="upcoming" />
            </div>
            <div className="mb-4">
                <h2 className="font-semibold text-xl mb-2 bg-black"> Popular</h2>
                <CardList movieCategory="popular" />
            </div>
            <Footer />
        </div>

    );
}

