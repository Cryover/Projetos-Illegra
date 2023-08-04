/*
A função abaixo não está retornando nada, ache o erro e corrija:

function doHomeWork(materia) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (materia === ‘matematica’) {
        return 'Tarefa completa com sucesso'
      }

        return new Error( 'Eu só sei matemática :(' )
      }, 3000)
  })
}

doHomeWork('matematica')
.then(sucesso => console.log(sucesso))
.catch(error => console.error(error))
*/

function doHomeWork(materia) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (materia === 'matematica') {
                return resolve('Tarefa completa com sucesso')
            }

            return reject(new Error('Eu só sei matemática :('))
        }, 3000)
    })
}

doHomeWork('matematica')
    .then(sucesso => console.log(sucesso))
    .catch(error => console.error(error))