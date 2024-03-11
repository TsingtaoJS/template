import { Application, MonitorServer } from 'tsingtao'

class Server extends MonitorServer {
    constructor(app: Application) {
        super(app)
    }
}

export function createServer(app: Application) {
    return new Server(app)
}
