import { Injectable } from "@angular/core";
import { IHotel } from './hotel';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })


export class HotelListService {

  private readonly HOTEL_API_URL =`api/json`;

  constructor(private http: HttpClient) {

  }

  public getHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.HOTEL_API_URL)
  }


}
