# Fraction Calculator

Fraction calculator is a simple app to calculate the minimum rupiah fractions needed for a certain amount of money.

### Requirement
Node.js version: 10+

### Running the app
To run this app, you need to build it first.
```sh
$ npm run build
```

then, run the start command.
```sh
$ npm start
```
The application will run at 127.0.0.1:3000

### Running the test
To run the test cases, you need to install all the node-modules in development mode.
```sh
$ npm install
```

Then, run the test command.
```sh
$ npm test
```


### Test cases
#### Test case format
Input #: amount of money

Output #: {fraction: amount of fraction, ...}

#### Cases
Input 1: 100.000

Output 1: {100000: 1}


Input 2: Rp 170.000

Output 2: {20000: 1, 50000: 1, 100000: 1}


Input 3: Rp300001,00

Output 3: {100000: 3, remainder: 1}


Input 4: 7131110

Output 4: {100: 1, 1000: 1, 10000: 1, 20000: 1, 100000: 71, remainder: 10}


Input 5: 7.131110

Output 5: Invalid


Input 6: 71.31.110

Output 6: Invalid


Input 7: Rp 170.000,000

Output 7: Invalid


Input 8: 170.000,000 Rp

Output 8: Invalid


Input 9: 0007131110

Output 9: {100: 1, 1000: 1, 10000: 1, 20000: 1, 100000: 71, remainder: 10}