import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl : 'users.component.html',
  styleUrls : [
    'users.component.css'
  ]
})

export class UsersComponent implements OnInit {
  title = 'Users'
  public users:any[] = [];

  constructor(private service: UserService) {
    }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.users = UserService.getUsers();

  }
}
