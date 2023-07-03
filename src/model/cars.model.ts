import { fetchData } from "./../utils/postgres"

const  GET = async() => {
    try {
        const categories = await fetchData("SELECT * FROM cars")
        return categories
    }catch(error) {
      console.log(error)
    }
}

const  GET_SINGLE = async(carId: string) => {
  try {
      const categories = await fetchData("SELECT * FROM cars where carId = $1", [carId])
      return categories
  }catch(error) {
    console.log(error)
  }
}

let POST = async(arr: (number | string)[])=>{
  try{
    let newCar = await fetchData("insert into cars(model, marka, motor, year, color, distance, gearbook, description, carPrice, carImage, carImageInner) values ($1,$2,$3,$4,$5,$6,$7,$8,$9, $10, $11) returning *", arr)
    return newCar
  } catch(error) {
    console.log(error)
  }
}

let PUT = async(tanirovka: string, color: string, distance: string, description: string, carId: string)=>{
  try{
    let updateCategory = await fetchData("update cars set tanirovka = $1, color = $2, distance = $3, description = $4 where carId = $5 returning *", [tanirovka, color, distance, description, +carId])
    return updateCategory
  } catch(error) {
    console.log(error)
  }
}

let DELETE = async(carId:string)=>{
  try{
    let car = await fetchData("delete from cars where carId = $1", [+carId])
    return car
  } catch(error) {
    console.log(error)
  }
}


export default {
    GET,
    POST,
    DELETE,
    PUT,
    GET_SINGLE
}