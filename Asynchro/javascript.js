const getTodos = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  request.onload = function () {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);

      // for (let d of data) {
      //   console.log(d);
      // }
    } else {
      console.log("not found...", undefined);
    }
  };
};
const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";
getTodos(url1, function (error, data) {
  if (error) {
    console.log("no Data ...");
  } else {
    console.log(data);
    getTodos(url2, function (error, data) {
      if (error) {
        console.log("no Data ...");
      } else {
        console.log(data);
        getTodos(url3, function (error, data) {
          if (error) {
            console.log("no Data ...");
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});


const getTodoos = function(){
  return new Promise(function(resolve,reject){
      //request done
      if(true){
        resolve(data);
      }else{
        reject(error);
      }
  });
}

getTodoos().then(function(data){
  console.log(data);
}).catch(function(error){
  console.log(error);
})