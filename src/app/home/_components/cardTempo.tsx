"use client";

import Image from "next/image";

interface CardTempoProps {
  data: any;
}

export function CardTempo({ data }: CardTempoProps) {
  // URL do ícone dinâmico da API
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  // Formata data atual
  const dataFormatada = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-zinc-700 rounded-md max-w-60 mb-12 pb-7 shadow-zinc-800 shadow-2xl flex flex-col p-4 items-start">
      <h1 className="text-xl font-bold text-white">
        {data.name}, {data.sys.country}
      </h1>
      <p className="text-xs text-zinc-400 mb-8 capitalize">{dataFormatada}</p>

      <div className="flex w-full justify-center">
        <Image
          src={iconUrl}
          alt={data.weather[0].description}
          width={100}
          height={100}
        />
      </div>

      <h1 className="text-4xl font-extrabold text-white mb-4">
        {Number(data.main.temp).toFixed(1)}°C
      </h1>
      <p className="text-xs text-zinc-400 mt-2">
        {Number(data.main.temp_min).toFixed(0)}°C /{" "}
        {Number(data.main.temp_max).toFixed(1)}°C
      </p>
      <p className="text-md text-zinc-200 capitalize">
        {data.weather[0].description}
      </p>
    </div>
  );
}
