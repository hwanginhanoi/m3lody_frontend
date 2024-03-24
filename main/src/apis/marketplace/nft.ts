// import axios from 'axios';
import responseData from '../interfaces/responseData';

async function nft(id:string) {
    let url = `http://localhost:3001/marketplace/${id}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }

        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: responseData = await response.json();
        if (!responseFromServer.success) {
            throw new Error("Can't retrieve data");
        }
        return responseFromServer.data;

    } catch (error) {
    }
}

export default nft;
