import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomsService } from '../../services/rooms.service';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/interfaces/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.less']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoomId!: number;
  roomForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  constructor(private roomsService: RoomsService, private router: Router) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomsService.index().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
      if (this.rooms.length > 0) this.onViewRoom(this.sortBy('updated')[0].id); // On page load, always select the first room in the ordered list
    })
  }

  onCreateRoom(): void {
    this.roomsService.create(this.roomForm.value).subscribe(() => {
      this.roomForm.reset();
      this.getRooms();
    })
  }

  onViewRoom(id: number): void {
    this.selectedRoomId = id;
    this.router.navigate(['rooms', id])
  }

  sortBy(prop: string): Room[] {
    return this.rooms.sort((a: any, b: any) => b[prop].localeCompare(a[prop]))
  }

}
