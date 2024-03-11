import { createConnector } from '@tsingtao/websocket'

import { Application, FrontendServer } from 'tsingtao'

class Server extends FrontendServer {
    constructor(app: Application) {
        super(
            app,
            createConnector({
                listen: '10081',
            })
        )
    }
}

export function createServer(app: Application) {
    return new Server(app)
}
