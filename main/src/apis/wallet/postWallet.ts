import responseData from '../../interfaces/responseData.ts';

//  function to get account detail from the server

async function postWallet(formdata: FormData){
    let url = "http://localhost:3001/wallet/addwallet";
    try{
        const response = await fetch(url,{
            method: 'POST',
            credentials: 'include',
            body: formdata,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: responseData = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data");
        }
        return responseFromServer.success;

    }catch(error){
    }
}

export default postWallet;