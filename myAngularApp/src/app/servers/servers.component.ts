import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationService = "No server was created";
  serverName='';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    },5000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationService="Server was created";
  }

  onUpdateServerName(event: Event) {
    this.serverName= (<HTMLInputElement>event.target).value;
  }

}
