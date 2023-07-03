import { fetchData } from "./../utils/postgres"

const  GET = async() => {
    try {
        const categories = await fetchData("SELECT * FROM carModel")
        return categories
    }catch(error) {
      console.log(error)
    }
}

const  GET_SINGLE = async(categoryId: string) => {
  try {
      const categories = await fetchData("SELECT * FROM carModel where categoryId = $1", [categoryId])
      return categories
  }catch(error) {
    console.log(error)
  }
}

let POST = async(categoryName:string, categoryImg:string)=>{
  try{
    let newCategory = await fetchData("insert into carModel(categoryName) values ($1) returning *", [categoryName])
    return newCategory
  } catch(error) {
    console.log(error)
  }
}

let PUT = async(categoryName:string, categoryId:string)=>{
  try{
    let updateCategory = await fetchData("update carModel set categoryName = $1 where categoryId = $2 returning *", [categoryName, +categoryId])
    return updateCategory
  } catch(error) {
    console.log(error)
  }
}

let DELETE = async(categoryId:string)=>{
  try{
    let newCategory = await fetchData("delete from carModel where categoryId = $1", [categoryId])
    return newCategory
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