(() => {
  
  const fractions = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
  
  const convert = (input) => {
    const sortedFractions = fractions.sort((a, b) => {
      return (b - a)
    })
    
    let remainder = input
    let countedFractions = {
      remainder: 0
    }
    
    sortedFractions.forEach((fraction)=>{
      countedFractions[fraction] = 0
    })

    sortedFractions.forEach((fraction) => {
      if (remainder >= fraction) {
        countedFractions[fraction] = Math.floor(remainder/fraction)
        remainder = remainder % fraction
      }
    })

    countedFractions.remainder = remainder
  
    return countedFractions
  }

})()