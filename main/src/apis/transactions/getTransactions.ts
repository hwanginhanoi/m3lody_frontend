// import axios from 'axios';
import responseData from '../../interfaces/responseData.ts';
async function getTransactions(){
    let url = "http://localhost:3001/transactions";
    try{
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: responseData = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data");
        }
        return responseFromServer.data;

    }catch(error){
    }
}

export default getTransactions;
