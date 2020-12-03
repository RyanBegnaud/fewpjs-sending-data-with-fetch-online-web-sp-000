let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}


function submitData(name,email) {
  let formData = {name: name, email: email}
  fetch("http://localhost:3000/users", configObj)
  
}