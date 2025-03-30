function calculateSum() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('greetingMessage').innerText = "请输入有效的数字";
      console.error("请输入有效的数字");
  } else {
      let sum = num1 + num2;
      alert(`两个数字的和是: ${sum}`);
  }
}