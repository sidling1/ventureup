const express = require('express')
const app = express()
const { PORT, CLIENT_URL } = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')

// Use user auth wherever you need to check if the user if logged in
const { userAuth } = require('./middlewares/auth-middleware')

//import passport middleware
require('./middlewares/passport-middleware')

//initialize middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin:'http://localhost:3000', credentials: true }))
app.use(passport.initialize())

//import routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')
const resourceRoutes = require('./routes/resource')

//initialize routes
app.use('/api', authRoutes)
app.use('/api/user',userAuth, userRoutes)

app.use('/api/resource',resourceRoutes)

//app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

appStart()
