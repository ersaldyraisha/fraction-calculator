(() => {

  angular.module('fraction-calc', [])
  
  .controller('calcCtrl', ['$scope', ($scope) => {
    $scope.cleanInput = null
    $scope.fractions = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
    $scope.countedFractions = {}

    $scope.calculateFractions = () => {
      $scope.countedFractions = {}
      if ($scope.validateInput()) {
        const sortedFractions = $scope.fractions.sort((a, b) => {
          return (b - a)
        })
        
        let remainder = $scope.cleanInput
  
        sortedFractions.forEach((fraction) => {
          if (remainder >= fraction) {
            $scope.countedFractions[fraction] = Math.floor(remainder / fraction)
            remainder = remainder % fraction
          }
        })
  
        if (remainder > 0) 
          $scope.countedFractions.remainder = remainder      
      } else {
        alert('Invalid input')
      }
    }

    $scope.validateInput = () => {
      const regex = /^(Rp|Rp )*(0)*([1-9]\d{0,2})((\.\d{3})*|([0-9]*))(,00)*$/

      if (regex.test($scope.input)) {
        $scope.cleanInput = $scope.input.split(',')[0].replace(/\D/g, '')
        return true
      }
      return false
    }

  }])


})()