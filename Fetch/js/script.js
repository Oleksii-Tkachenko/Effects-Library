// GET request

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((myJson) => console.log(myJson));

// GET request / async / await / error 

const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, ststus: ${res.status}`);
    }

    const some = await res.json();
    return some;
};

getResource('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => console.log('Success', res))
    .catch(error => console.error(error));


// POST request / headers

let url = 'https://jsonplaceholder.typicode.com/posts',
    data = {username: 'example'};

fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then((response) => response.json())
    .then((myJson) => console.log('Success', myJson))
    .catch(error => console.error('Error', error));

