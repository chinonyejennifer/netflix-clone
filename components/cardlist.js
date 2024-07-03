"use client"
import { Fragment, useEffect, useState } from "react"
import { Button } from "./ui/button"
import Link from "next/link"
import { MovieCard } from "./movie-card"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function CardList() {
    // const [data, setData] = useState(null)
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, fetcher)
    console.log(process.env.NEXT_PUBLIC_API_KEY)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ccd4078b314e64c52e5fb9c409042e78")
    //             console.log("RESPONSE", response) //get stream response from fetch request
    //             if (!response.ok) {
    //                 throw new Error("network response not ok")
    //             }
    //             const result = await response.json() //await and transform json that can be used
    //             setTimeout(() => {
    //                 console.log("RESULT", result)
    //                 setData(result.results)
    //             }, 2000)

    //         } catch (error) {
    //             console.log(error.message)

    //         }
    //     }
    //     fetchData()
    // }, [data])


    return (
        <>
            {/* {JSON.stringify(data.results, null, 2)} */}
            {/* <Link href="/"> Home </Link> */}
            <div>
                {/* <Button onClick={fetchData}>
                    Get Data
                </Button> */}
                <ul className="flex space-x-2">
                    {data?.results.map((movie) => (<li key={movie.id} className="text-white"> <MovieCard title={movie.title} image={movie.poster_path} date={movie.date} /> </li>))}
                </ul>
            </div>
        </>

    );
}

//use JSON.stringify to display data on screen 

