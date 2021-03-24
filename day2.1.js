const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]  

function createArrayOfArrays(x){
    return x.map(country => [country.toLowerCase(), country.substring(0, 3), country.length])
}
console.log(createArrayOfArrays(countries));