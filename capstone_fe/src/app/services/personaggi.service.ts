import { Injectable } from '@angular/core';
import { Abilita } from '../interfaces/abilita';
import { Incantesimo } from '../interfaces/incantesimo';
import { Privilegio } from '../interfaces/privilegio';
import { Linguaggio } from '../interfaces/linguaggio';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

@Injectable({
  providedIn: 'root'
})
export class PersonaggiService {
  URL:string = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) { }

  getPersonaggi(username:string | undefined) {
    return this.http.get<Personaggio[]>(this.URL + `/api/user/personaggi/${username}`);
  }

  creaPersonaggio(nomePg: string, username: string | undefined) {
    return this.http.get(this.URL + `/api/${username}/personaggi/new/${nomePg}`);
  }
}
