(() => {

  angular.module('FractionCalc', [])
  
  .controller('CalcController', ['$scope', ($scope) => {
    $scope.fractions = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
    $scope.countedFractions = {}
    $scope.input = ''

    $scope.calculateFractions = (input) => {
      const cleanInput = $scope.validateInput(input)
      
      if (cleanInput) {
        let remainder = cleanInput
        const countedFractions = {}
        const sortedFractions = $scope.fractions.sort((a, b) => {
          return (b - a)
        })
  
        sortedFractions.forEach((fraction) => {
          if (remainder >= fraction) {
            countedFractions[fraction] = Math.floor(remainder / fraction)
            remainder = remainder % fraction
          }
        })
  
        if (remainder > 0) { 
          countedFractions.remainder = remainder
        }

        return countedFractions

      } else {
        return false
      }
    }

    $scope.validateInput = (input) => {
      const regex = /^(Rp|Rp )*(0)*([1-9]\d{0,2})((\.\d{3})*|([0-9]*))(,00)*$/

      if (regex.test(input)) {
        return input.toString().split(',')[0].replace(/\D/g, '')
      }
      return false
    }

    $scope.eventHandler = () => {
      const countedFractions = $scope.calculateFractions($scope.input)
      
      if (countedFractions) {
        $scope.countedFractions = Object.assign(countedFractions)
      } else {
        $scope.countedFractions = {}
        alert('Invalid input')
      }
    }

  }])

})()