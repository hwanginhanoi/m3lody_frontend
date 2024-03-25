// import axios from 'axios';
import responseData from '../../interfaces/responseData.ts';

async function purchase(input: string) {
    let url = "http://localhost:3001/purchase";

    try {

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: input
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

export default purchase;
