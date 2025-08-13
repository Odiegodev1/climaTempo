import { Input } from "@/components/ui/input";
import suny from "@/app/assests/Sunny.png"
import Rainy from "@/app/assests/Rainy.png"

import Image from "next/image";






export default function Page(){
  return(
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-r from-stone-900 to-violet-900">
      <main className=" flex flex-col min-w-3xl items-center mt-18">
        <h1 className="text-3xl font-bold mb-5 text-white">Previsão do Tempo</h1>

        <div className="mt-2 flex min-w-xs mb-12">
          <Input
          placeholder="Digite Sua Cidade"
          className="border-none w-fll bg-zinc-200 rounded-md text-xl text-zinc-900 font-semibold"
          />
        </div>

        <div className="bg-zinc-700 rounded-md max-w-60 mb-12 pb-7
         shadow-zinc-800 shadow-2xl flex flex-col p-4  items-start">
        
          <h1 className="text-xl font-bold text-white">Saquarema, RJ</h1>
          <p className="text-xs text-zinc-400 mb-8">Quarta-feira 12 de agosto de 2025</p>
          
          <div   className="flex w-full justify-center">
         
          <Image
          src={suny}
          alt="sol"
          quality={100}
          width={100}
          height={100}
          
          />
        </div>

         <h1 className="text-4xl font-extrabold text-white mb-4">28°C</h1>
         <p className="text-xs text-zinc-400 mt-2">24°C/29°C</p>
         <p className="text-md text-zinc-200">Parcialmente nublado</p>

        </div>

        <div className="min-w-xl p-5 grid grid-cols-5 bg-zinc-700 rounded-md ">

          <div className="w-35 h-40 border-r border-zinc-400 items-center 
          justify-center">
          <div className="flex items-center flex-col">
            <h1 className="font-bold text-zinc-950">Qui</h1>
            <div className="flex items-center justify-center">
              <Image
              src={Rainy}
              alt="ceu"
              width={70}
              height={70}
              />
            </div>
            <div>
              <p className="text-md text-zinc-200 font-semibold">32ºc</p>
              <p className="text-md text-zinc-400 font-semibold">26ºc</p>
              </div>
          </div>


        
          </div> 

        <div>
          

          </div>
        </div>

      </main>

    </section>
  )
}