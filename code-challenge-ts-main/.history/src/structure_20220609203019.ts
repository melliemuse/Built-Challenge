import {cost} from "./pricing"
import {totalCost} from "./pricing"
import {points} from "./pricing"


// let result = statement(customer, movies).Split('/n');

// <h1>statement.result <em>statement.customer</em></h1>
// <ul>
//     <li>The Fellowship of the Ring - 3.5</li>
//     <li>The Two Towers - 15</li>
//     <li>The Return of the King - 3</li>
// <ul>
// <p>Amount owed is <em>21.5</em></p>
// <p>You earned <em>4</em> frequent renter points</p>
export const structure = {
    heading: `Rental Record for`,
    movieList: (customer: any, movies : any): string => {
        let result = ``
        for (let r of customer.rentals) {
        let movie = movies[r.movieID];
        result += `<li>\t${movie.title}\t<em>${cost(customer, movies)}</em>\n</li>`;
    }
        return result
},
    balance: (customer: any, movies : any): string => `Amount owed is ${totalCost(customer, movies)}`,
    rewards: (customer: any, movies : any): string => `You earned frequent renter points ${points(customer, movies)}`
}