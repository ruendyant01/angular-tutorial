import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  toggleButton:boolean = false

  constructor() {
    setTimeout(() => {
      this.toggleButton = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
