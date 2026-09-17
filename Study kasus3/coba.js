const input1 = document.getElementById("angka1");
const input2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

function hitung() {
  const val1 = parseFloat(input1.value) || 0;
  const val2 = parseFloat(input2.value) || 0;
  hasil.textContent = val1 * val2;
}

input1.addEventListener("input", hitung);
input2.addEventListener("input", hitung);
