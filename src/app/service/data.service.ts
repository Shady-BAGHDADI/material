import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(public http: HttpClient) {}

  public getTodos(): any {
    return this.http.get("https://613f628ae9d92a0017e1769e.mockapi.io/todo");
  }
}
