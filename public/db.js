let db;
const request = indexedDB.open("budget", 1);


request.onupgradeneeded = ({ target }) => {

};


function checkDatabase() {
   
  }

  window.addEventListener("online", checkDatabase);