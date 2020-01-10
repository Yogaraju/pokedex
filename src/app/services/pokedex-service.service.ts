import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pokedexData } from "../pokedexData";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokedexServiceService {
  constructor(private http: HttpClient) {}

  getPokedex(): Observable<pokedexData> {
    return this.http.get<pokedexData>("https://pokeapi.co/api/v2/pokemon/");
  }

  getPokedexDetails(url) {
    return this.http.get(url);
  }
}
