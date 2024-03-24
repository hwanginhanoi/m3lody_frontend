// import axios from 'axios';
import responseData from '../../interfaces/responseData';

// function to get account detail from the server
async function login(username:string,password:string){
    let url = "http://localhost:3001/login";
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                username,
                password
            })


        });

        if (!response.ok) {
            return false;
        }
        const responseFromServer: responseData = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data");
        }
        return responseFromServer.success;

    }catch(error){
    }
}

export default login;
