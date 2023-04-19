import { Personaggio } from "./personaggio"

export interface Abilita {
  id:number;
  name:string;
  descrizione:string;
  personaggi:Personaggio[];

}
