import { createConnection } from 'mongoose'

const Mongoose = createConnection(process.env.MONGO_URI || 'mongodb://localhost:27017/gamedb')

export default Mongoose
