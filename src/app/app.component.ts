import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "appListas";
  msg = "Hola, bienvenido a mi proyecto en Angular";
  ngOnInit(): void {
    setTimeout(() => {
      this.msg = "";
    }, 5000);
  }
}
