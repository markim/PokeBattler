// Example POST method implementation:
async function getCount(url = 'https://pokeapi.co/api/v2/pokemon') {
  // Default options are marked with *
  const response = await fetch(url
    /* , {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer'//, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   // body: JSON.stringify(data) // body data type must match "Content-Type" header
  } */);
  document.getElementById('count') = response.json().count;
  return response.json().count; // parses JSON response into native JavaScript objects
}