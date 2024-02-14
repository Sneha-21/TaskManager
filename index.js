const app = require('./app')
const PORT = process.env.PORT
const { connectDB } = require('./config/dbConfig')

connectDB()

app.listen(PORT,() => {
    console.log(`Server is running on PORT : ${PORT}`)
})
