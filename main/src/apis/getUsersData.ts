// import axios from 'axios';
import responseData from '../interfaces/responseData';

// function to get user data from the server
async function getUsersData() {
    let url = "http://localhost:3001/users";
    try {
        const response = await fetch(url, {
            method: 'GET',
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

export default getUsersData;
