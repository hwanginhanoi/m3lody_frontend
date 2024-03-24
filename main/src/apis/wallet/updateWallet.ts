import responseData from "../../interfaces/responseData.ts";

async function updateWallet(formdata: FormData ) {
    let url = "http://localhost:3001/wallet/updatewallet";
    try {
        const response = await fetch(url, {
            method: "POST",
            credentials: "include",
            body: formdata,
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

export default updateWallet;