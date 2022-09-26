import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './components/rooms/rooms.component';
import { LoginComponent } from './components/login/login.component';
import { RoomComponent } from './components/rooms/room/room.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  {
    path: 'rooms', component: RoomsComponent, children: [
      { path: ':id', component: RoomComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { RoomsComponent } from './components/rooms/rooms.component';
// import { LoginComponent } from './components/login/login.component';
// import { RoomComponent } from './components/rooms/room/room.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', pathMatch: 'full', component: LoginComponent },
//   {
//     path: 'rooms', children: [
//       { path: '', component: RoomsComponent },
//       { path: ':id', component: RoomComponent }
//     ]
//   }

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
