alert("Hello World");
const example = () => {
    const fromInput = document.getElementById("AA").value;
    document.getElementById("CC").innerText = fromInput;
   }
   document.getElementById("BB").addEventListener("click", example)