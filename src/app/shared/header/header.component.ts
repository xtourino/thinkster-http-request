import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: string;

  ngOnInit() {
    this.user = this.userService.currentUser;
  }

  changeUser(newUser: string) {
    this.userService.setUser(newUser);
  }

}