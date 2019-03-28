import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private userService: UserService){}

  profile = {};

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
  }
}
