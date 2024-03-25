// import axios from 'axios';
import responseData from '../../interfaces/responseData.ts';

async function getOwnerNFTWID(id: number) {
    // let intID = parseInt(id);
    let url = `http://localhost:3001/wallet/walletinfor/${id}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);

        }
        const responseFromServer: responseData = await response.json();
        console.log(responseFromServer);
        if (!responseFromServer.success) {
            throw new Error("Can't retrieve data");
        }


        return responseFromServer;
    } catch (error) {
    }
}

export default getOwnerNFTWID;
