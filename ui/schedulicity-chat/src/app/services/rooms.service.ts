import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Room } from '../interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private uri = '/api/rooms';

  constructor(private backendService: BackendService) { }


  index(): Observable<Room[]> {
    return this.backendService.index(this.uri);
  }

  show(id: number, queryString = '') {
    return this.backendService.show(this.uri, id, queryString);
  }

  create(data: any) {
    return this.backendService.create(this.uri, data);
  }

  update(data: any) {
    // return this.backendService.update(this.uri, null, data);
  }

  delete(id: number) {
    return this.backendService.delete(this.uri, id);
  }
}
