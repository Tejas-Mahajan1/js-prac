function infixToPostfix(expression) {
  const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3
  };

  const isOperator = c => ['+', '-', '*', '/', '^'].includes(c);
  const isOperand = c => /[a-zA-Z0-9]/.test(c);
  const hasHigherPrecedence = (op1, op2) => precedence[op1] > precedence[op2];
  const hasEqualPrecedence = (op1, op2) => precedence[op1] === precedence[op2];
  const isLeftAssociative = op => op !== '^';

  let stack = [];
  let output = [];

  for (let i = 0; i < expression.length; i++) {
      let char = expression[i];

      if (isOperand(char)) {
          output.push(char);
      } else if (char === '(') {
          stack.push(char);
      } else if (char === ')') {
          while (stack.length && stack[stack.length - 1] !== '(') {
              output.push(stack.pop());
          }
          stack.pop(); // Remove '(' from stack
      } else if (isOperator(char)) {
          while (
              stack.length &&
              isOperator(stack[stack.length - 1]) &&
              ((isLeftAssociative(char) && hasHigherPrecedence(stack[stack.length - 1], char)) ||
                  (hasEqualPrecedence(stack[stack.length - 1], char) && isLeftAssociative(char)))
          ) {
              output.push(stack.pop());
          }
          stack.push(char);
      }
  }

  while (stack.length) {
      output.push(stack.pop());
  }

  return output.join('').replace(/,/g,'');
}

// Sample input
const expression = "A*B+C";
const postfixExpression = infixToPostfix(expression);
console.log(postfixExpression); // Output: "AB*C+"