import { Request, Response, NextFunction } from 'express'

export const home = (req: Request, res: Response) => {
  return res.status(200).json({
    text: 'Hello from express + ts',
  })
}
