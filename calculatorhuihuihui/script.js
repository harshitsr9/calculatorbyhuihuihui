let result = '';

function appendNumber(number) {
  result += number;
  document.getElementById('result').value = result;
}

function appendOperator(operator) {
  if (result !== '') {
    result += ' ' + operator + ' ';
    document.getElementById('result').value = result;
  }
}

function clearResult() {
  result = '';
  document.getElementById('result').value = result;
}

function calculate() {
  try {
    result = eval(result).toString();
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
