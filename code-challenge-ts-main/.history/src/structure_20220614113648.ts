import {cost} from "./pricing"
import {totalCost} from "./pricing"
import {points} from "./pricing"

export const structure = {
    heading: `Rental Record for`,
    movieList: (customer: any, movies : any): string => {
        let result = ``
        for (let r in customer.rentals) {
        let movie = movies[customer.rentals[r].movieID];
        let costs = cost(customer, movies);
        if (r + 1 !== customer.rentals.length){
            result += `\t<li>${movie.title}<em>${costs[Number(r)]}</em></li>\n`;
        }
        else {
            result += `\t<li>${movie.title}<em>${costs[Number(r)]}</em></li>`;         
        }
    }
        return result
},
    balance: (customer: any, movies : any): string => `Amount owed is <em> ${totalCost(customer, movies)} </em>`,
    rewards: (customer: any, movies : any): string => `You earned <em> ${points(customer, movies)} </em> frequent renter points `
}