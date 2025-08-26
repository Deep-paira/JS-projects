function generateQR() {

  const input = document.getElementById("qrInput").value.trim();
  const alertBox = document.getElementById("alertMsg");
  const qrOutput = document.getElementById("qrcode");

  if (input === "") {
    alertBox.style.display = "block";
    qrOutput.innerHTML = "";
    qrOutput.classList.remove("show");
    return;
  } else {
    alertBox.style.display = "none";
  }

  qrOutput.innerHTML = "<img src='https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + encodeURIComponent(input) + "' alt='QR Code' style='border-radius:10px; box-shadow:0 6px 20px rgba(0,0,0,0.4); background:#fff; padding:10px;'>";
  qrOutput.classList.remove("show");
  setTimeout(() => qrOutput.classList.add("show"), 400);
}