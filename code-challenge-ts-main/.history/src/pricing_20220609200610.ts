export const totalCost = (customer: any, movies: any): number => {
    let totalAmount = 0;
    for (let r of customer.rentals) {
      let movie = movies[r.movieID];
      let thisAmount = 0;
  
      switch (movie.isNew) {
        case false:
          thisAmount = 2;
          if (r.days > 2) {
            thisAmount += (r.days - 2) * 1.5;
          }
          break;
        case movie.isPremium && true:
          thisAmount = r.days * 3;
          break;
        case !movie.isPremium && true:
          thisAmount = 1.5;
          if (r.days > 3) {
            thisAmount += (r.days - 3) * 1.5;
          }
          break;
      }
  
      totalAmount += thisAmount;
    }

    return totalAmount;
  };
export const cost = (customer: any, movies: any): number => {
    for (let r of customer.rentals) {
      let movie = movies[r.movieID];
      let thisAmount = 0;
  
      switch (movie.isNew) {
        case false:
          thisAmount = 2;
          if (r.days > 2) {
            thisAmount += (r.days - 2) * 1.5;
          }
          return thisAmount;
        case movie.isPremium && true:
          thisAmount = r.days * 3;
          return thisAmount;
        case !movie.isPremium && true:
          thisAmount = 1.5;
          if (r.days > 3) {
            thisAmount += (r.days - 3) * 1.5;
          }
          return thisAmount;
      }
      return thisAmount;
    }
        return 0
    };