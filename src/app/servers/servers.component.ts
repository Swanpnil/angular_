import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

 name: string='codemingTechnology';
 serverId: number=37;
 serverStatus: string='online';
 allownewServer = false;
 servercreationStatus : string ='server not created';
 serverName : string = 'codeMind';

  constructor() {
    setTimeout(() => {
      this.allownewServer = true
    }, 2000);
   }

  getserverStatus() {
    return this.serverStatus;
  
}
  oncreateServer(){
    this.servercreationStatus = 'server created';
  }
}

