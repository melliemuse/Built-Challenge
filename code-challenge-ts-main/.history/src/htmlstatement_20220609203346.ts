import { statement } from "./statement";
import { structure } from "./structure";

// let result = statement(customer, movies).Split('/n');

// <h1>statement.result <em>statement.customer</em></h1>
// <ul>
//     <li>The Fellowship of the Ring - 3.5</li>
//     <li>The Two Towers - 15</li>
//     <li>The Return of the King - 3</li>
// <ul>
// <p>Amount owed is <em>21.5</em></p>
// <p>You earned <em>4</em> frequent renter points</p>

export function htmlstatement(customer: any, movies: any): string {
  let statement = `<h1> ${structure.heading} <em> ${customer.name} </em></h1>
<ul> ${structure.movieList(customer, movies)} </ul>
<p> ${structure.balance(customer, movies)}</p>
<p> ${structure.rewards(customer, movies)} </p>
  `
  return statement
  // splitStatement[0] = `<h1>${splitStatement[0]}<h1>`;
  // return splitStatement.join('/n');
}
