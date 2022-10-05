import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessagesService } from './../../../services/messages.service';
import { RoomsService } from './../../../services/rooms.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Room } from 'src/app/interfaces/room';
import { User } from 'src/app/interfaces/user';
import { Message } from 'src/app/interfaces/message';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.less']
})
export class RoomComponent implements OnInit {
  room!: Room;
  currentUser!: User
  messages!: Message[];
  messageForm: FormGroup = new FormGroup({
    message: new FormControl(null, Validators.required)
  })

  constructor(private route: ActivatedRoute, private router: Router, private roomsService: RoomsService, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.route.params.subscribe((params: Params) => {
      this.getRoom(params['id']);
      this.getMessages(params['id']);
    })
  }

  getCurrentUser(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user') || '');
  }

  getRoom(id: number): void {
    this.roomsService.show(id).subscribe((room: Room) => {
      this.room = room;
    })
  }

  getMessages(id: number): void {
    this.roomsService.show(id, '/messages').subscribe((messages: Message[]) => {
      this.messages = messages;
    })
  }

  onNewMessage(): void {
    if (this.messageForm.valid) {
      this.messagesService.create({
        roomId: this.room.id,
        userId: JSON.parse(localStorage.getItem('user') || '').id,
        content: this.messageForm.get('message')?.value
      }).subscribe(() => {
        this.messageForm.reset();
        this.getMessages(this.room.id);
      })
    }
  }

  onLogout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
