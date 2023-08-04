/*
Cria uma função utilizando setTimeout que retorne uma promise com resolve e reject e chame esse método com then e catch.
*/

let objectIsOrange = (name, color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            color.toLowerCase() === "orange" ? resolve(`${name} is orange`) : reject(`${name} is not orange`);
        }, 2000);
    })
}

objectIsOrange('Tangerine', 'orange')
    .then(sucesso => console.log(sucesso))
    .catch(error => console.error(error));