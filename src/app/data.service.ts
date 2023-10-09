import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor( private http: HttpClient) { }

button1 (){
  return this.http.get('https://jsonplaceholder.typicode.com/posts')
}

button2 (){
  return this.http.get('https://jsonplaceholder.typicode.com/comments', { params: {postId: 1} })
}

button3 (){
  return this.http.post('https://jsonplaceholder.typicode.com/posts', { 'body': {}})
}

button4 (){
  return this.http.get('https://jsonplaceholder.typicode.com/post')
}

button5 (){
  return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers: {'X-Test': '1'}, responseType: 'text' })
}

button6 (){
  return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
}

button7 (){
  return this.http.get('https://jsonplaceholder.typicode.com/posts/1', { responseType: 'text' })
}
}