import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { ListadoAcronimo } from './models/ListadoAcronimo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  acronimos:ListadoAcronimo[] | undefined;

  constructor(
    private searchApiService: ApiService,
  ) { }


ngOnInit(): void {
  this.searchApiService.getAcronimo().subscribe(data=>{
    this.acronimos = data;
  })
}

  handleSearch(query: string) {
    this.searchApiService.search(query).then((response) => {
      const { sf, lfs } = response.data[0];
      console.log(response.data); 
      console.log(sf);
      
      const significados = lfs.map((item: { lf: any; }) => item.lf);
  
      axios.post("http://localhost:3001/create", {
        inicial: sf, 
        significado: JSON.stringify(significados)
      }).then(() => {
        alert('Acronimo insertado correctamente')
        location.reload();
      }).catch((error) => {
        console.error('Error:', error);
      });
  
    }).catch((error) => {
      console.error('Error:', error);
    });
  }


}  
