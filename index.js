// Add your code here
function submitData(userName, userEmail) {
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
        }),
      };
      
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.body.append(object.id);
        //console.log(object.id);
      })
      .catch(function (error) {
        document.body.append(error.message);
        console.log(error.message);
      });
}
