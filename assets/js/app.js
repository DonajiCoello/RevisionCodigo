const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog'); /* Esta mal la referencia, es sin # */
const $l = document.querySelector('.location'); /* No esta referenciada en el documento html */

/* Aqui le falta una funcion asincrona, await no esta dentro de una función asincrona */

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = `${data.name}`; /* Segun yo aquí, van estas comillas `` para concatenar, no las simples */
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err};` /* Esta mal el nombre de la variable, arriba esta declarada con $ */
}

displayUser('stolinski').catch(handleError);