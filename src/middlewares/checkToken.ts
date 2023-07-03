import {Request , Response , NextFunction} from "express"
import jwt from './../utils/jwt'


export default (req:Request, res:Response, next:NextFunction) => {
  try {
    const { token } = req.headers
    if(!token){
      return res.status(400).json({
        message: 'token is required'
      })
    }
    next()
  } catch (error) {
    console.log(error)
  }
}
