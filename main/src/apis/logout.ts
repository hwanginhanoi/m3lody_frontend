// import axios from 'axios';
import responseData from '../interfaces/responseData';
async function logout(){
    let url = "http://localhost:3001/logout";
    try{
        const response = await fetch(url,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }

        });

        if (!response.ok) {
            return false;
        }
        const responseFromServer: responseData = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data");
        }
        return true

    }catch(error){
    }
}

export default logout;
