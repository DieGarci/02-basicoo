import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import socket from 'socket.io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor public(wsService:WebsocketService) { }

sendMesaage( mensaje:string)
{
  const payload={
    de: 'diego',
    cuerpo: mensaje
  };
  this.wsService.emit('mensaje', payload);


}

}
