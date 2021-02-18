import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'section2Q2';
  first = 0;

  rows = 10;
  dataCatagories: any;
  
  
  loading: boolean = true;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
   

     this.http.get('https://api.publicapis.org/categories').subscribe(response => {
      this.dataCatagories = response;
      console.log(this.dataCatagories);

    })


  }
  



  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  
  myFunction($event) {
    var filter, table, tr, td, i, txtValue;
    $event = document.getElementById("input");
    filter = $event.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
