import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EditCourceComponent } from "../edit-cource/edit-cource.component";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-design",
  templateUrl: "./design.component.html",
  styleUrls: ["./design.component.css"],
})
export class DesignComponent implements OnInit {
  isChecked = true;

  progress = 0;
  timer;
  constructor(private service: DataService, private dialog: MatDialog) {
    //20 ms
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress == 100) clearInterval(this.timer);
    }, 20);
  }
  todos = [];
  isLoading = false;
  ngOnInit() {
    //spinner indeterminate
    this.isLoading = true;
    this.service.getTodos().subscribe(
      (data) => {
        this.todos = data;
        console.log(data);

        this.isLoading = false;
      },
      (errors) => {
        this.isLoading = false;
        alert("Error get todos ");
      }
    );
  }
  onChange(e) {
    console.log(e);
  }

  //select
  colors = [
    { id: "1", name: "Red" },
    { id: "2", name: "Green" },
    { id: "3", name: "Blue" },
  ];
  color = 2;
  //date picker : we can use moment

  minDate = new Date(2022, 1, 22);
  maxDate = new Date(2022, 2, 22);

  //chips
  categories = [
    { name: "Beginner" },
    { name: "Intermediate" },
    { name: "Advanced" },
  ];
  selectCategory(category) {
    this.categories
      .filter((c) => c != category)
      //object category does'nt have a property  selected so concatinate or use ['']
      .forEach((c) => (c["selected"] = false));
    category.selected = !category.selected;
  }

  //DIALOGS
  openDialog() {
    //use for edit cource component =open dialogs => inject dialog as a service in ctor
    this.dialog
      .open(
        EditCourceComponent,
        //passing data => and we need to read data => so in edit component : when the dialog service
        //open this component it is going to pass a data in the ctor of EDIT component
        {
          data: { courceId: 1 },
        }
      )
      //type of return of open() : MatDialogRef
      .afterClosed()
      .subscribe((result) => {
        // notify user when close the dialog
        console.log(result);
      });
  }
}
