let status = document.querySelector("#status");
   let friend = document.querySelector("#addFriend");



function statusUpdate(){
    let status = document.querySelector("#status");
    let friend = document.querySelector("#addFriend");
    let remove = document.querySelector("removed")
    status.innerHTML = "Friends";
    status.style.color = "green";
    friend.innerHTML = "✔ Friends";
    function removefriend(){
        friend.style.display = "none";
    }
    setTimeout(removefriend,5000);
    
}

