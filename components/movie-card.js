import { Card, CardFooter, CardHeader } from "./ui/card"

export function MovieCard({ title, image, date }) {
    console.log("DATE", date)
    return (
        <Card className="w-52">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="movie poster" />
            <CardHeader>
                <h1 className="truncate"> {title} </h1>
            </CardHeader>
            <CardFooter>
                <p> {date} </p>
            </CardFooter>
        </Card>

    )
}