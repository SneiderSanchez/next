import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  res.setHeader('content-type', 'application/json')
  if (allEntries) {
    res.statusCode = 200
    res.end(
      JSON.stringify({
        data: allEntries,
        length: allEntries.length,
        error: false,
      })
    )
  }
  res.statusCode = 500
  res.end(JSON.stringify({ error: true }))
}

export default allAvos
