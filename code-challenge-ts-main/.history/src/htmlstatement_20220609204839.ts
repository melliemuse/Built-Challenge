import { structure } from "./structure";

export function htmlstatement(customer: any, movies: any): string {
  let statement = `<h1> ${structure.heading} <em> ${customer.name}</em></h1>
<ul> ${structure.movieList(customer, movies)}</ul>
<p> ${structure.balance(customer, movies)}</p>
<p> ${structure.rewards(customer, movies)}</p>
  `
  return statement
}
