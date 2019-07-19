import { Request, Response } from 'express'
import { calculateNotes } from './cashService'
import { ApiResult, ApiError, ApiErrorResult } from '../../common/ApiResults'

export default function setupRoutes(app: any) {
  app.get('/', (req: Request, res: Response) => {
    res.send({
      message: 'hello from cash-machine api',
      date: new Date(),
    })
  })

  app.post(
    '/withdraw/:cashAmount',
    (
      req: { params: { cashAmount: number } },
      resp: {
        send: (result: ApiResult) => void
        status: any
      }
    ) => {
      console.log('Request /withdraw/:cashAmount', req.params.cashAmount)
      try {
        const cashAmount = req.params.cashAmount
        const notes = calculateNotes(cashAmount)
        resp.send({ data: notes })
      } catch (error) {
        console.error(error)
        resp.status(400).send({ error: error })
      }
    }
  )
}
