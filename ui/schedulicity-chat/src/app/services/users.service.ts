import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private uri = '/api/users'

  constructor(private backendService: BackendService) { }


  index(): Observable<any> {
    return this.backendService.index(this.uri);
  }

  show(id: number) {
    return this.backendService.show(this.uri, id);
  }

  create(data: any): Observable<User> {
    return this.backendService.create(this.uri, data);
  }

  update(data: any) {
    // return this.backendService.update(this.uri, null, data);
  }

  delete(id: number) {
    return this.backendService.delete(this.uri, id);
  }

}
