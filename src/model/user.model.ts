import { fetchData } from "./../utils/postgres"

const  LOGIN = async(username:string, password:string) => {
    try {
        const user = await fetchData("SELECT * FROM users WHERE username = $1 AND password = $2" , [username , password])
        return user
    }catch(error) {
      console.log(error)
    }
}


export default {
    LOGIN
}