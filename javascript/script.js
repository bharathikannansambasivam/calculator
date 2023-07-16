    var output = document.getElementById('output');
  
    function display(num) {
      output.value =  output.value  + num;
    }
  
    function Clear() {
      output.value = "";
    }
  
    function del() {
      output.value = output.value.slice(0, -1);
    }
  
    function equal() {
      try {
        output.value = eval(output.value);
      } catch {
        alert("Invalid number");
      }
    }
