import { configure, getLogger } from 'log4js'
import { ARGS } from 'tsingtao'

configure({
    appenders: {
        console: { type: 'console' },
        localfile: {
            type: 'file',
            filename: `./logs/${ARGS.id}.log`,
            maxLogSize: 10 * 1024 * 1024,
            backups: 5,
            compress: true,
            encoding: 'utf-8',
            mode: 0o0640,
            flags: 'w+',
        },
    },
    categories: {
        default: { appenders: ['console', 'localfile'], level: 'ALL' },
        websocket: { appenders: ['console', 'localfile'], level: 'ALL' },
    },
})

process.on('uncaughtException', (err) => getLogger('exception').error(err.message, err.stack))
process.on('unhandledRejection', (err, reason) => getLogger('exception').error(reason))
