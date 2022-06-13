import {cost} from "./pricing"


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
    movieList: (movies : any) => movies.array.forEach((movie: { title: any }) => {
       ` ${movie.title} - ${cost}`
    }),
    balance: `Amount owed is ${cost}`,
    rewards: `You earned frequent renter points`
}