describe('Controller: CalcController', () => { //describe your object type
  beforeEach(module('FractionCalc')) //load module

  describe('Test Cases', () => { //describe your app name
    let scope
    let controller

    beforeEach(inject(($controller, $rootScope) => { //initialize your filter
      $scope = $rootScope.$new()
      $controller('CalcController', { $scope })
    }))

    it('Should calculate correctly', () => {  //write tests
      expect($scope.calculateFractions('100.000')).toEqual({ 100000: 1 })
      expect($scope.calculateFractions('Rp 170.000')).toEqual({ 20000: 1, 50000: 1, 100000: 1 })
      expect($scope.calculateFractions('Rp300001,00')).toEqual({ 100000: 3, remainder: 1 })
      expect($scope.calculateFractions('7131110')).toEqual({ 100: 1, 1000: 1, 10000: 1, 20000: 1, 100000: 71, remainder: 10 })
      expect($scope.calculateFractions('7.131110')).toEqual(false)
      expect($scope.calculateFractions('71.31.110')).toEqual(false)
      expect($scope.calculateFractions('Rp 170.000,000')).toEqual(false)
      expect($scope.calculateFractions('170.000,000 Rp')).toEqual(false)
      expect($scope.calculateFractions('0007131110')).toEqual({ 100: 1, 1000: 1, 10000: 1, 20000: 1, 100000: 71, remainder: 10 })
      expect($scope.calculateFractions('-170000')).toEqual(false)
      expect($scope.calculateFractions('- 170.000,000')).toEqual(false)
    })
  })
})