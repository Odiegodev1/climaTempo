"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { CardTempo } from "./_components/cardTempo";
import { CardPrevisao } from "./_components/CardPrevisao";
import { Button } from "@/components/ui/button";


export default function Home(){
  const [city, setCity] = useState("");
  const [data,setData] = useState<any>(null);
  const [loading,setLoading] = useState(false);

    const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    const res = await fetch(`/api/weather?city=${city}`);
    const json = await res.json();
    setData(json);
    setLoading(false);
  };


  return(
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-r from-stone-900 to-violet-900">
      <main className=" flex flex-col min-w-3xl items-center mt-18">
        <h1 className="text-3xl font-bold mb-5 text-white">Previsão do Tempo</h1>

        <div className="mt-2 flex min-w-xs mb-12 gap-2">
          <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Digite Sua Cidade"
          className="border-none w-fll bg-zinc-200 rounded-md text-xl text-zinc-900 font-semibold"
          />
          <Button   onClick={getWeather} className="border-none w-fll hover:bg-purple-800 cursor-pointer rounded-md bg-purple-700">Buscar</Button>
        </div>

   {loading && (
  <div className="flex flex-col items-center justify-center space-y-2 mt-10">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-blue-400 font-semibold text-lg">Carregando previsão...</p>
  </div>
)}

{data?.current && <CardTempo data={data.current} />}
{data?.forecast && <CardPrevisao list={data.forecast.list} />}

      </main>

    </section>
  )
}