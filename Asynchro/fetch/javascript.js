const url ='https://jsonplaceholder.typicode.com/todos/1';

fetch(url).then(function(response){
    if(response.status===200){
        return response.json()
    }else{
        throw new Error('not found')
    }
    return (response.json());
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})
