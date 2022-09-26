import { Observable } from 'rxjs';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private uri = '/api/messages';

  constructor(private backendService: BackendService) { }


  index(): Observable<Message[]> {
    return this.backendService.index(this.uri);
  }

  show(id: number): Observable<Message> {
    return this.backendService.show(this.uri, id);
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
