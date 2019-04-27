# Fraction Calculator

Fraction calculator is a simple app to calculate the minimum rupiah fractions needed for a certain amount of money.

### Requirement
Node.js version: 10+

### Running the app
First you need to build the app by running this command:
```sh
$ npm install
```

then, run the start command:
```sh
$ npm start
```
The application will run at 127.0.0.1:3000

### Test cases
##### Test case format
Input: amount of money

Output: {fraction: amount of fraction, ...}

##### Cases
Input: 100.000

Output: {100000: 1}


Input: Rp 170.000

Output: {20000: 1, 50000: 1, 100000: 1}


Input: Rp300001,00

Output: {100000: 3, remainder: 1}


Input: 7131110

Output: {100: 1, 1000: 1, 10000: 1, 20000: 1, 100000: 71, remainder: 10}


Input: 7.131110

Output: Invalid


Input: 71.31.110

Output: Invalid


Input: Rp 170.000,000

Output: Invalid


Input: 170.000,000 Rp

Output: Invalid


Input: 0007131110

Output: {100: 1, 1000: 1, 10000: 1, 20000: 1, 100000: 71, remainder: 10}