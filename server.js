const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = process.env.PORT || 3013


app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(require("./routes"))

//connect to mongoose

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network",

  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

)

//for debugging
mongoose.set("debug", true)

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`))
