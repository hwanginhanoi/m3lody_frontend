// import axios from 'axios';
import responseData from '../../interfaces/responseData.ts';
// function to get account detail from the server
async function updateSecurity(formData: FormData){
    let url = "http://localhost:3001/updateAccount/updatesecurity";
    try{
        const response = await fetch(url,{
            method: 'POST',
            credentials: 'include',
            body: formData


        });

        if (!response.ok) {
            return false;
        }
        const responseFromServer: responseData = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data");
        }
        console.log(responseFromServer.data);
        return true;

    }catch(error){

    }
}

export default updateSecurity;
