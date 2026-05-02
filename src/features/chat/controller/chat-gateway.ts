import { Server } from "socket.io";
import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";

    @WebSocketGateway({
        cors: { origin: '*'},
    })
    export class ChatGateway {
        @WebSocketServer()
        server!: Server;

        @SubscribeMessage('uzchess-client')
        handelMessage(@MessageBody() message: string) {
            this.server.emit('uzchess-server', `Respone: ${message}`);
        }
    }
