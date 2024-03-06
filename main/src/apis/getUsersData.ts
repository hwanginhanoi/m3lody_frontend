export default function getUsersData(){
    let users = fetch('http://localhost:3001/users').then(res => res.json())
    console.log(users)

}