import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/Users';

  getAllUsers() {
    return this.http.get<Array<UserDetails>>(this.url);
  }

  addUser(body) {
    return this.http.post(this.url, body);
  }

  updateUser(body) {
    return this.http.put(`${this.url}/${body.id}`, body);
  }

  deleteUser(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

export class UserDetails {
  id: number;
  firstname: string;
  lastname: string;
  city: string;
  pincode: string;
  mobileNo: string;
}
