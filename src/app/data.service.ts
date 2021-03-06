import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Yamaha', 'Honda', 'Kawasaki']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoals(goals){
    this.goals.next(goals);
  }
}
