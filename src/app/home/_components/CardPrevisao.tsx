"use client";

import Image from "next/image";

interface CardPrevisaoProps {
  list: any[];
}

export function CardPrevisao({ list }: CardPrevisaoProps) {
  // Filtra apenas uma previsão por dia (meio-dia)
  const previsoesPorDia = list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="md:w-full p-2 mb-20 md:p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-zinc-700 rounded-md">
      {previsoesPorDia.map((f, index) => {
        const diaSemana = new Date(f.dt * 1000).toLocaleDateString("pt-BR", {
          weekday: "short", // seg, ter, qua...
        });

        // Cria URL do ícone da API para este card
        const iconUrl = `https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;

        return (
          <div
            key={index}
            className="w-full h-40 flex flex-col items-center justify-center border-r last:border-r-0 border-zinc-400"
          >
            <h1 className="font-bold text-white capitalize">{diaSemana}</h1>

            <div className="flex items-center justify-center">
              <Image src={iconUrl} alt="Clima" width={70} height={70} />
            </div>

            <div className="text-center">
              <p className="text-md text-zinc-200 font-semibold">
                {Math.round(f.main.temp)}ºC
              </p>
              <p className="text-md text-zinc-400 font-semibold">
                {Math.round(f.main.temp_max)}ºC
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
