import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor(private http: HttpClient) 
  { 

  }
  getApiData(){
    let url="https://localhost:44329/weatherforecast";
    this.http.get(url).subscribe(data=> {
      return data;
    });
  }
  getData(){

    return {
      Id:1,
      Name:"Raju Ahmed",
      Dept:"AML"
    }
  }
}
