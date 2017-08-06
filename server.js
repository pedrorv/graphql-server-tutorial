const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema')

const app = express()
const PORT = process.env.PORT || 8080

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
)

app.get('/', (req, res) => res.send('test'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
