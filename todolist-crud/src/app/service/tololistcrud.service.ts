import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TololistcrudService {
  baseUrl = "http://locahost/3000";
  
  constructor(private http: HttpClient) { }

  getTodoList(){
    return this.http.get(`${this.baseUrl}/api/tests`);
  }

  getaTodoList(id:any,body:any){
    return this.http.post(this.baseUrl+"/api/tests",id+body).subscribe((respond) => {
      console.log(respond) 
    })
  }

  createTodoList(body:any){
    return this.http.post(this.baseUrl+"/api/tests",body).subscribe((respond) => {
      console.log(respond) 
    })
  }

  updateTodoList(id:any, body:any){
    return this.http.put(this.baseUrl+"/api/tests",id,body).subscribe((respond) => {
      console.log(respond) 
    })
  }

  deleteTodoList(id:any){
    this.http.delete(this.baseUrl+"/api/tests/"+id).subscribe((aList) => {
      return  console.log(aList, "getTodoListOne") 
  })
  }

  dropTodoList(){
    this.http.delete(this.baseUrl+"/api/tests/").subscribe((aList) => {
      return  console.log(aList, "getTodoListOne") 
  })
  }
}
