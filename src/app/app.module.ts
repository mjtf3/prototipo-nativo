import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ListaComponent } from "./components/lista/lista.component";
import { TareaComponent } from "./components/tarea/tarea.component";

@NgModule({
  declarations: [AppComponent, ListaComponent, TareaComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
