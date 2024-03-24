// import axios from 'axios';
import responseData from '../../interfaces/responseData.ts';
async function updateAccount(formData: FormData){
    let url = "http://localhost:3001/updateAccount/";
    try{
        const response = await fetch(url,{
            method: 'POST',
            credentials: 'include',
            body: formData


        });

        if (!response.ok) {

            throw new Error(`HTTP error! Status: ${response.status}`);

        }
        const responseFromServer: responseData = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data");
        }
        console.log(responseFromServer.data);
        return responseFromServer.success;

    }catch(error){

    }
}

export default updateAccount;
