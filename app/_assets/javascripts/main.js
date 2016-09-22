// (c) Sebastian Saier

'use strict';

const hello = 'whhaaaaat';

console.log(`${hello} world!`);

const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner, i) => ({name: winner, race, place: i + 1})); // we need to wrap the object in a set of parenthesis because otherwise it would expect an actual function block instead of an object literal

const ages = [23,62,45,234,2,62,234,62,34];

const old = ages.filter(age => age >= 60);
console.log(old);
