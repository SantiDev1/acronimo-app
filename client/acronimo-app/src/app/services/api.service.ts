import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from, map } from 'rxjs';
import { ListadoAcronimo } from '../models/ListadoAcronimo.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3001/api/apiacronimo';

  GetUrl= 'http://localhost:3001/api/getdata'

  constructor() { }

  search(paramss: string) {
    return axios.get(this.apiUrl, { params: { term: paramss } });
  }

  getAcronimo(): Observable<ListadoAcronimo[]> {
    return from(axios.get<ListadoAcronimo[]>(this.GetUrl))
      .pipe(
        map(response => response.data)
      );
  }

}
