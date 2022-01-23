import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-edit-cource",
  templateUrl: "./edit-cource.component.html",
  styleUrls: ["./edit-cource.component.css"],
})
export class EditCourceComponent implements OnInit {
  //data from dialog : any because we can pass any thing
  //ctor fot the DI => we can t pass data:any => create a custom injection token=> @Inject()
  //=> MAT_DIALOG_DATA === service
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log("data from dialog in edit", data);
  }

  ngOnInit() {}
}
