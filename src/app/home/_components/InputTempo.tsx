"use client"
import { Input } from "@/components/ui/input";

export function InputTempo(){
    return(
        <>
        <Input
          placeholder="Digite Sua Cidade"
          className="border-none w-fll bg-zinc-200 rounded-md text-xl text-zinc-900 font-semibold"
          />
        </>
    )
}