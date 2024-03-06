import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }
  getStudentData():Observable<any>{
   return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1214881298190819328')
  }
}
