import app from './app'

const PORT = process.env.PORT || '4400'

app.listen(PORT, () => {
  console.log(`🛡️ Server listening on: http://localhost:${PORT}`)
})
