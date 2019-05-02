import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter.component";

// ngRx

import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: reducer }),
    StoreDevtoolsModule.instrument({
      name: "Counterx devtools",
      maxAge: 15
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
