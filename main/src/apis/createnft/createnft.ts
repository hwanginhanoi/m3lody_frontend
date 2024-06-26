// import axios from 'axios';
import responseData from '../../interfaces/responseData';

// function to get account detail from the server

async function login(formData: FormData) {
    let url = "http://localhost:3001/createnft";
    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: "include",
            body: formData


        });

        if (!response.ok) {
            return false;
        }
        const responseFromServer: responseData = await response.json();
        if (!responseFromServer.success) {
            throw new Error("Can't retrieve data");
        }
        return responseFromServer.success;

    } catch (error) {
    }
}

export default login;
