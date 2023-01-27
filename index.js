const form = document.getElementsByTagName('form')[0];
console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();
    request.open('POST', 'server.php');

    // request.setRequestHeader('Content-type', 'multipart/form-data');
    request.setRequestHeader('Content-type', 'application/json')
    const formData = new FormData(form);


    const obj = {};
    formData.forEach((value, key) => {
        obj[key] = value
    })
    const jsonData = JSON.stringify(obj)

    fetch('server.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: jsonData,
    })
    .then(data => {
        return new Promise((res, rej) => {
            if (data.status == 404) {
                rej(data.text())
            }
            res(data.text())
        })
    })
    .then(data => {
        console.log(data);
        form.reset();
    })
    .catch(err => console.error(err))
    // request.send(jsonData);
    // console.log(jsonData);
    // request.addEventListener('load', () => {
    //     if (request.status === 200) {
    //         console.log(request.response);
    //     }
    // })
})


const inputRu = document.getElementById('ru');
const inputUsd = document.getElementById('usd');


// inputRu.addEventListener('input', () =>{
//     const request = new XMLHttpRequest();
//     request.open('GET', 'current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', (e) => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request.response);
//             const data = JSON.parse(request.response);
//             inputUsd.value = inputRu.value * data.current.USD;
//         } else {
//             inputUsd.value = '(((';
//         }
//     });
// })
// inputRu.addEventListener('input', () => {
//     let p = fetch('current.json');
//     p.then(res => {
//         return res.json();
//     })
//     .then(data => {
//         inputUsd.value = inputRu.value * data.current.USD;
//     })
//     .catch(() => {
//         inputUsd.value = '(((';
//     })
// })



// setInterval(() => {
//     console.log("hi");
// }, 2000);



function myFetch() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({name: 'Alex'}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => {
        return response.json();
    })
    .then(json => {
        console.log(json);
    });
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function myPhpFetch() {
    
}


function fetchFilter() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((jsonData) => {
        console.log(jsonData[61].id.toString().length);
        let jnew = jsonData.filter((item) => {
            return item.id.toString().length < 2;
        })
        console.log(jnew);
        const jnew1 = JSON.parse(JSON.stringify(jnew));
        
        jnew1.map(item => {
            item.title = item.title.split(' ').join('');
            return item;
        })
        console.log(jnew1);
        console.log(jnew.some(item => (item.body.includes('quia'))));
        console.log(jnew.every(item => (item.body.includes('quia'))));
        console.log(jnew.every(item => (item.userId == 1)));
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const sum = arr.reduce((sum, current) => sum + current, 3); // последний аргумент это начальное значение
        console.log(sum);

        const objekt = {
            iven: 'per',
            flex: 'per',
            cat: 'ani',
            dog: 'ani'
        };

        console.log(Object.entries(objekt)
        .filter(item => item[1] === 'per')
        .map(item => item[0]))
    });
}