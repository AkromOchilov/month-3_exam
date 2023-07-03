import { Request, Response, NextFunction } from 'express'
import carsModel from './../model/cars.model'


const GET = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const cars = await carsModel.GET()
        console.log(cars)
        if(!cars.length) {
            res.status(404).json({
                status:404,
                message:"DATA NOT FOUND"
            })
        }
        res.status(200).json({
            status:200,
            message:"success",
            data: cars
        })
    } catch (error) {
        console.log(error);
    }
}

const GET_SINGLE = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let {carId} = req.params
      const cars = await carsModel.GET_SINGLE(carId)
      console.log(cars)
      if(!cars.length) {
          res.status(404).json({
              status:404,
              message:"DATA NOT FOUND"
          })
      }
      res.status(200).json({
          status:200,
          message:"success",
          data: cars
      })
  } catch (error) {
      console.log(error);
  }
}

const POST = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const images = req.files as Express.Multer.File[];
      let data: any = [];
      for(let i in images){
        data.push(images[i])
      }
      console.log(data[0][0].filename)
      let {model, marka, tanirovka, motor, year, color, distance, gearbook, description, carPrice} = req.body
      let arr = [model, marka, motor, tanirovka, year, color, distance, gearbook, description, carPrice, data[0][0].filename, data[1][0].filename, data[2][0].filename]
       let newCar = await carsModel.POST(arr);
       console.log(newCar)
       res.status(200).json({status:200, message: 'ok', data: newCar})

    } catch (error) {
        console.log(error);
    }
}

const PUT = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let {carId} = req.params;
    let {tanirovka, color, distance, description} = req.body
     let car = await carsModel.PUT(tanirovka, color, distance, description, carId);
     res.status(200).json({status:200, message: 'ok', data: car})

  } catch (error) {
      console.log(error);
  }
}

const DELETE = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let {carId} = req.params

     let car = await carsModel.DELETE(carId);
     console.log(car)
     res.status(200).json({status:200, message: 'ok', data: car})

  } catch (error) {
      console.log(error);
  }
}



export default {
    GET,
    POST,
    PUT,
    DELETE,
    GET_SINGLE
}