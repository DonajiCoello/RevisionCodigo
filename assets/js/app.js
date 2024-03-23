const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); /* Van con un . porque el query
Selector referencia las clases */
const $b = document.querySelector('.blog'); /* Esta mal la referencia, es sin # */
const $l = document.querySelector('.location'); /* No esta referenciada en el documento html */

/* Aqui le falta una funcion asincrona, await no esta dentro de una función asincrona */

async function displayUser(username) {
  
  $n.textContent = 'cargando...';
  try{ /* Se agrega el try para poner que se cumpla una condicion */
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); /* Falta guardar el await en un json, que nos va a devolver un string y asignarlo a una variable  */
  console.log(data);
  $n.textContent = data.name; /* Se quitan comillas y lo de ${} pues vamos a acceder al name de data, que es el json */
  $b.textContent = data.blog;
  $l.textContent = data.location;
  } catch{throw Error("error");} /* Si no se cumple la condicion se pone un catch  */
} 
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; /* Esta mal el nombre de la variable, arriba esta declarada con $ */
}
displayUser('stolinski').catch(handleError);