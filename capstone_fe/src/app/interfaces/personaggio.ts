import { Abilita } from "./abilita"
import { Linguaggio } from "./linguaggio"
import { Incantesimo } from "./incantesimo"
import { Privilegio } from "./privilegio"
export interface Personaggio {
  id:number
  caratteristiche:number[]
  ca:number
  iniziativa:number
  velocita:number
  competenza:number
  pf:number
  ts:string[]
  abilita:Abilita[]
  dv:string
  name:string
  lvl:number
  razza:string
  background:string
  allineamento:string
  eta:number
  taglia:number
  linguaggi:Linguaggio[]
  peso:number
  altezza:number
  capelli:string
  privilegi:Privilegio[]
  incantesimi:Incantesimo[]
  classe:string
  genericvalue:Map<string, string>
}
