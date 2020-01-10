import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokedexServiceService } from "src/app/services/pokedex-service.service";

@Component({
  selector: "app-pokedex-details",
  templateUrl: "./pokedex-details.component.html",
  styleUrls: ["./pokedex-details.component.css"]
})
export class PokedexDetailsComponent implements OnInit {
  public pokedexList;
  public requiredPokedexDetails;
  public name: String;
  constructor(
    private _route: ActivatedRoute,
    private _pokedService: PokedexServiceService
  ) {}

  ngOnInit() {
    this.name = this._route.snapshot.paramMap.get("name");

    this._pokedService.getPokedex().subscribe(data => {
      this.pokedexList = data.results;
      for (let requiredPokemon of this.pokedexList) {
        if (requiredPokemon.name === this.name) {
          this._pokedService
            .getPokedexDetails(requiredPokemon.url)
            .subscribe(result => {
              this.requiredPokedexDetails = result;
            });
        }
      }
    });
  }
}
