import { Component, OnInit } from "@angular/core";
import { PokedexServiceService } from "src/app/services/pokedex-service.service";
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-pokedex-dashboard",
  templateUrl: "./pokedex-dashboard.component.html",
  styleUrls: ["./pokedex-dashboard.component.css"]
})
export class PokedexDashboardComponent implements OnInit {
  pokedexNames = [];
  name;
  gotMoreDetailsOnThisPokemon = {};
  constructor(
    private _pokedexService: PokedexServiceService,
    private _router: Router
  ) {}
  ngOnInit() {
    this._pokedexService.getPokedex().subscribe(data => {
      this.pokedexNames = data.results;
    });
  }
  getPokedexDetails(moreDetailsOnThisPokemon) {
    this._pokedexService
      .getPokedexDetails(moreDetailsOnThisPokemon)
      .subscribe(data => {
        this.gotMoreDetailsOnThisPokemon = data;
      });
  }

  /*function to populate data on click of more details btn*/
  onSelect(pokedexObj) {
    this._router.navigate(["/pokedexDetails", pokedexObj.name]);
  }

  //function to search the required pokemon
  searchPokemon() {
    if ($(".flip-on-load").hasClass("flip-on-load")) {
      setTimeout(function() {
        $(".flip-on-load").removeClass("flip-on-load");
      }, 10);
    }
    this._pokedexService.getPokedex().subscribe(data => {
      this.pokedexNames = data.results;
      this.pokedexNames = this.pokedexNames.filter(res => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    });
  }
}
