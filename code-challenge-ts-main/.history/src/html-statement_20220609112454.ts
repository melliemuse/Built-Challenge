import { statement } from "./statement";

let result = statement(customer, movies).Split('/n');

<h1>statement.result <em>statement.customer</em></h1>
<ul>
    <li>The Fellowship of the Ring - 3.5</li>
    <li>The Two Towers - 15</li>
    <li>The Return of the King - 3</li>
<ul>
<p>Amount owed is <em>21.5</em></p>
<p>You earned <em>4</em> frequent renter points</p>

export const htmlstatement = (customer: any, movies: any): string => {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;
    for (let r of customer.rentals) {
      let movie = movies[r.movieID];
      let thisAmount = 0;
  
      switch (movie.code) {
        case MovieCode.REGULAR:
          thisAmount = 2;
          if (r.days > 2) {
            thisAmount += (r.days - 2) * 1.5;
          }
          break;
        case MovieCode.NEW:
          thisAmount = r.days * 3;
          break;
        case MovieCode.CHILDRENS:
          thisAmount = 1.5;
          if (r.days > 3) {
            thisAmount += (r.days - 3) * 1.5;
          }
          break;
      }
  
      frequentRenterPoints++;
      if (movie.code === MovieCode.NEW && r.days > 2) frequentRenterPoints++;
  
      result += `\t${movie.title}\t${thisAmount}\n`;
      totalAmount += thisAmount;
    }
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;
  
    return result;
  };
  