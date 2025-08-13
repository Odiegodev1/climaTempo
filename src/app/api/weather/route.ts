import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY as string;
const BASE_URL = "https://api.openweathermap.org/data/2.5"

export async function GET(request:Request) {
    const {searchParams} = new URL(request.url)
    const city = searchParams.get("city") || "Saquarema"

    try{

        const currentWheather = await fetch(
            `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
        ).then(res => res.json())

        const forecast = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
        ).then(res => res.json());

        
    return NextResponse.json({
      current: currentWheather,
      forecast: forecast
    });

 
    }catch(err){
        console.log(err)
         return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 });
    }
    
}