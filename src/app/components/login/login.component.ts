import { UsersService } from '../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.usersService.create(this.loginForm.value).subscribe((user: User) => {
      this.loginForm.reset();
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['rooms']);
    })
  }

}
