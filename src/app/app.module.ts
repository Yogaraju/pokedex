import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { PokedexServiceService } from "./services/pokedex-service.service";
import { PokedexDetailsComponent } from "./components/pokedex-details/pokedex-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokedexDashboardComponent } from "./components/pokedex-dashboard/pokedex-dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    PokedexDetailsComponent,
    PageNotFoundComponent,
    PokedexDashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PokedexServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
