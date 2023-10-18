function createUser() {
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("pass").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(mail, pass)
    .then((res) => {
      alert("ok");
      document.getElementById("closeReg").click();
    })
    .catch((err) => {
      alert("Error");
    });
}
