import express, { Application , Request , Response , NextFunction } from 'express';
import {resolve} from 'path'
import userRouter from './routes/admin.routes';
import categoryRouter from './routes/category.routes';
import carRouter from './routes/cars.routes'
let app: Application = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(resolve('uploads')));

app.use(userRouter);
app.use(categoryRouter);
app.use(carRouter);


app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    res.status(400).json({ status: 400, message: err.message })
})

app.listen(4000 , () => console.log("server running"))