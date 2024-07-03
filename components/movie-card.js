import { Card } from "./ui/card"

export function MovieCard({ title, image, date }) {
    return (
        <Card className="w-52 h-52">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="movie poster" />
            <h1> {title} </h1>
            <p> {date} </p>
        </Card>

    )
}