import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  import { DispositivoDeComunicacion } from '../Dispositivo_comu/dispositivo_comu.entity';
  
  @WebSocketGateway()
  export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
  
    private clients: Map<string, Socket[]> = new Map();
  
    handleConnection(client: Socket) {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
      this.clients.forEach((sockets, empresa) => {
        this.clients.set(empresa, sockets.filter((socket) => socket !== client));
      });
    }
  
    @SubscribeMessage('examen6B')
    handleMessage(client: Socket, payload: DispositivoDeComunicacion): void {
      const { empresa } = payload;
  
      if (!this.clients.has(empresa)) {
        this.clients.set(empresa, []);
      }
  
      this.clients.get(empresa).push(client);
  
      // Emitir el mensaje solo a los clientes conectados de la misma empresa
      this.clients.get(empresa).forEach((socket) => {
        if (socket !== client) {
          socket.emit('examen6B', payload);
        }
      });
    }
  }
  