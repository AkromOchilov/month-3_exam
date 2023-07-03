import { Request, Response, NextFunction } from 'express'
import categoryModel from './../model/category.model'


const GET = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const categories = await categoryModel.GET()
        console.log(categories)
        if(!categories.length) {
            res.status(404).json({
                status:404,
                message:"DATA NOT FOUND"
            })
        }
        res.status(200).json({
            status:200,
            message:"success",
            data: categories
        })
    } catch (error) {
        console.log(error);
    }
}

const GET_SINGLE = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let {categoryId} = req.params
      const cars = await categoryModel.GET_SINGLE(categoryId)
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
      let {categoryName} = req.body
       let category = await categoryModel.POST(categoryName, 'img.jpeg');
       console.log(category)
       res.status(200).json({status:200, message: 'ok', data: category})

    } catch (error) {
        console.log(error);
    }
}

const PUT = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let {categoryId} = req.params;
    let {categoryName} = req.body
     let category = await categoryModel.PUT(categoryName, categoryId);
     res.status(200).json({status:200, message: 'ok', data: 'category'})

  } catch (error) {
      console.log(error);
  }
}

const DELETE = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let {categoryId} = req.params

     let category = await categoryModel.DELETE(categoryId);
     console.log(category)
     res.status(200).json({status:200, message: 'ok', data: category})

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