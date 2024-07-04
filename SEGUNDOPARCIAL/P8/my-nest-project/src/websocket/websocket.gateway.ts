import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WebsocketService } from './websocket.service';
import { Transaction } from '../transaction.entity';

@WebSocketGateway()
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private users: { [key: string]: Socket[] } = {};

  constructor(private readonly websocketService: WebsocketService) {}

  handleConnection(client: Socket) {
    let userId = client.handshake.query.userId;
    
    // Ensure userId is a string
    if (Array.isArray(userId)) {
      userId = userId[0];
    }

    if (!this.users[userId]) {
      this.users[userId] = [];
    }

    if (this.users[userId].length >= 3) {
      client.emit('error', 'Max connections reached');
      client.disconnect();
      return;
    }

    this.users[userId].push(client);
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    let userId = client.handshake.query.userId;
    
    // Ensure userId is a string
    if (Array.isArray(userId)) {
      userId = userId[0];
    }

    this.users[userId] = this.users[userId].filter(sock => sock.id !== client.id);
    if (this.users[userId].length === 0) {
      delete this.users[userId];
    }
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('agregar-transaccion')
  async handleAddTransaction(client: Socket, payload: Partial<Transaction>): Promise<void> {
    const newTransaction = await this.websocketService.createTransaction(payload);
    this.server.emit('transaction-added', newTransaction);
  }

  @SubscribeMessage('consultar-activos')
  async handleGetActiveTransactions(client: Socket): Promise<Transaction[]> {
    return this.websocketService.getActiveTransactions();
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    console.log(`Message from client ${client.id}: ${payload}`);
    return 'Hello from server';
  }
}
