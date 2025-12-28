import { Component, signal } from "@angular/core";


@Component({
    selector:"app-footer",
    templateUrl:"./footer.html",
    styleUrl:"./footer.css"
})

export class Footer{
name=signal("Anil sidhu")
}