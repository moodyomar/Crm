import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // HttpClient - יכול לעשות בקשת איי פי איי
  // והוא אובסירבל בעצמו שאפשר לעשות לו סבסקרייב
  constructor(private http:HttpClient) { }

  doApiGet(_url:string):any {
    // מחזיר אובסריבל שאפשר לעשות לו סבסקרייב בקומפ
    return this.http.get(_url);
  }
}
