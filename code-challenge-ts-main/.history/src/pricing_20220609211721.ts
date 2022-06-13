
export const cost = (customer: any, movies: any): Array<number> => {
    let thisAmount = 0;
    let theseAmounts = []
    for (let r of customer.rentals) {
        let movie = movies[r.movieID];
        
        switch (movie.isNew) {
            case false:
                thisAmount = 2;
                if (r.days > 2) {
                    thisAmount += (r.days - 2) * 1.5;
                }
                theseAmounts.push(thisAmount)
                break;

                case movie.isPremium && true:
                    thisAmount = r.days * 3;
                    theseAmounts.push(thisAmount)
                    break;
                    
                    case !movie.isPremium && true:
                        thisAmount = 1.5;
                        if (r.days > 3) {
                            thisAmount += (r.days - 3) * 1.5;
                        }
                        theseAmounts.push(thisAmount)
                        break;
                    }
                }
                return theseAmounts
            };
            
export const totalCost = (customer: any, movies: any): number => {               
    let thisAmount = 0;
    let totalAmount = 0;

    
        thisAmount = cost(customer, movies);
        totalAmount += thisAmount;
    
    return totalAmount;
    };

    export const points = (customer: any, movies: any): number => {
      
        let frequentRenterPoints = 0;
       
        for (let r of customer.rentals) {
          let movie = movies[r.movieID];

          frequentRenterPoints++;
          if (movie.isNew && !movie.isPremium && r.days > 2) frequentRenterPoints++;
          
        }
        return frequentRenterPoints
    }