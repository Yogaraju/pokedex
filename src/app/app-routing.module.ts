import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokedexDetailsComponent } from "./components/pokedex-details/pokedex-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokedexDashboardComponent } from "./components/pokedex-dashboard/pokedex-dashboard.component";

const routes: Routes = [
  { path: "pokedexDetails/:name", component: PokedexDetailsComponent },
  { path: "", component: PokedexDashboardComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
