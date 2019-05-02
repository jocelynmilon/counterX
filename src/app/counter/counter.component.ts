import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  total = 0;
  title = "super compteur";
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("appState")).subscribe(data => {
      console.log(data);
      this.total = data.count;
    });
  }

  increment() {
    // this.total += 1;
    this.store.dispatch({
      type: "INCREMENT",
      payload: 3
    });
  }
  decrement() {
    //this.total -= 1;
    this.store.dispatch({
      type: "DECREMENT",
      payload: 1
    });
  }
}
