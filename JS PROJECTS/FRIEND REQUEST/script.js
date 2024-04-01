let status = document.querySelector("#status");
   let friend = document.querySelector("#addFriend");



function statusUpdate(){
    let status = document.querySelector("#status");
    let friend = document.querySelector("#addFriend");
    status.innerHTML = "Friends";
    status.style.color = "green";
    friend.innerHTML = "✔ Friends";
    function removefriend(){
        friend.style.display = "none";
    }
    setTimeout(removefriend,5000);
    
}


let remove = document.querySelector("#removed")

remove.addEventListener("click", function(){
    let status = document.querySelector("#status");
    let friend = document.querySelector("#addFriend");

    status.innerHTML = "Stranger";
    status.style.color = "red";
    
})