import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Detail } from "../models/detail";
import { IncrementCounter, DecrementCounter } from "../state/app.actions";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  total = 0;
  title = "super compteur";
  allDetails: Detail[];

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("appState")).subscribe(data => {
      console.log(data);
      this.total = data.count;
      this.allDetails = data.details;
    });
  }

  increment() {
    // this.total += 1;
    // this.store.dispatch({ type: "INCREMENT", payload: 3 });
    this.store.dispatch(new IncrementCounter(3));
  }
  decrement() {
    //this.total -= 1;
    //this.store.dispatch({type: "DECREMENT", payload: 1  });
    this.store.dispatch(new DecrementCounter(2));
  }
}
