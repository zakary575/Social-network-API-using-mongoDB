const connection = require('../config/connection')
const { User } = require('../models')

connection.once('open', async () => {
    console.log('connected')
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray()
    if (userCheck.length) {
        await connection.dropCollection('users')
    }
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray()
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts')
    }
    let reactionsCheck = await connection.db.listCollections({ name: 'reactions' }).toArray()
    if (reactionsCheck.length) {
        await connection.dropCollection('reactions')
    }
    const users = [
        {
            username: "ZakaryJohnson",
            email: "zakaryjohnson@gmail.com",
        },
        {
            username: "Zak123",
            email: "zak123@gmail.com",
        },
        {
            username: "SamuelJohnson",
            email: "samueljohnsonr@gmail.com",
        }
    ]

    const seedUsers = await User.create(users)
  
    console.info('Seeding complete! 🌱');
    process.exit(0);
})