// user details section

const user_container = document.querySelector(".user");

const userName = "MercyShark"
// const userName = "DarshitVara"
const userImage = `https://avatars.githubusercontent.com/u/125804877?v=4`

user_container.innerHTML += `<img class=" user-img rounded-circle img-fluid" src=${userImage} alt="Title" />`
user_container.innerHTML += `<h1 class="username text-white"> ${userName}</h1>`


















// user following details section 
const container = document.querySelector(".card-columns");

const requestURL = `https://api.github.com/users/${userName}/following`
const options ={
    method : "GET"
}


fetchData(requestURL)

async function fetchData(requestURL) {
    try{
        let response = await fetch(requestURL,options)
        let responseText = await response.json()

        console.log(responseText)

        if(responseText.status != 404){
            ExtractData(responseText)
            // console.log("here")
        }
        else{
            container.innerHTML += "<h1 text-white>  User Not Found</h1>"
        }

    }
    catch(e){
        console.log(e)
    }
}
function ExtractData(response){
    for(var key in response){
        let userID = response[key].login
        let userAvatar = response[key].avatar_url


        displayData(userID,userAvatar)
    }
}   
function displayData(userID,userAvatar){
    const user = document.querySelector(".username")

    user.textContent = userName;

    let userCard = `<div class="card text-white ">
                <img class="card-img-top" src=${userAvatar} alt="Title" />
                <div class="card-body">
                    <h4 class="card-title text-dark text-center">${userID}</h4>
                </div>
            </div>`
    
    container.innerHTML += userCard;
}