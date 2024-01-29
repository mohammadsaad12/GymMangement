import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GymService {
  constructor(private http: HttpClient) {}

  postTrainer(data: any) {
    return this.http.post<any>('http://localhost:3000/trainers', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllTrainer() {
    return this.http.get<any>('http://localhost:3000/trainers').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getTrainerById(id: number) {
    return this.http.get<any>('http://localhost:3000/trainers/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateTrainer(id: number, data: any) {
    return this.http
      .put<any>('http://localhost:3000/trainers/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteTrainer(id: number) {
    return this.http.delete<any>('http://localhost:3000/trainers/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Members Service

  postMember(data: any) {
    return this.http.post<any>('http://localhost:3000/members', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllMembers() {
    return this.http.get<any>('http://localhost:3000/members').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getMemberById(id: number) {
    return this.http.get<any>('http://localhost:3000/members/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateMember(id: number, data: any) {
    return this.http.put<any>('http://localhost:3000/members/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteMember(id: number) {
    return this.http.delete<any>('http://localhost:3000/members/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
