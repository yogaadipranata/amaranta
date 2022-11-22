// Typed Animation
var typed = new Typed(".typedAnimation", {
  strings: ["Udah siap hadapi UTBK 2023?", "Mari raih cita bersama Amaranta"],
  typeSpeed: 60,
  delaySpeed: 100,
  loop: true,
});

// Sweetalert Pilih Paket
function paketAlert() {
  Swal.fire({
    title: "Apakah kamu yakin?",
    text: "Apakah kamu memilih paket ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Selamat!", "Kamu telah berlangganan.", "success");
    }
  });
}

// Sweetalert Login
const loginButton = document.querySelector("#loginButton");
const loginUsername = document.querySelector("#loginUsername");
const loginPassword = document.querySelector("#loginPassword");

loginButton.addEventListener("click", () => {
  if (loginUsername.value == "" || loginPassword == "") {
    Swal.fire("Tidak bisa login!", "Mohon masukkan username dan password dengan benar.", "error");
  } else {
    Swal.fire("Berhasil login!", "Selamat datang di Amaranta.", "success");
  }
});

//Sweetalert Sign Up
const signupButton = document.querySelector("#signupButton");
const nama = document.querySelector("#nama");
const signupEmail = document.querySelector("#signupEmail");
const signupUser = document.querySelector("#signupUser");
const signupPassword = document.querySelector("#signupPassword");

signupButton.addEventListener("click", () => {
  if (nama.value == "" || signupEmail.value == "" || signupUser.value == "" || signupPassword.value == "") {
    Swal.fire("Tidak bisa mendaftar!", "Mohon masukkan data anda dengan lengkap.", "error");
  } else {
    Swal.fire("Pendaftaran berhasil!", "Selamat datang di Amaranta.", "success");
  }
});

// Sweeralert Newsletter
const subButton = document.querySelector("#subButton");
const subEmail = document.querySelector("#subEmail");

subButton.addEventListener("click", () => {
  if (subEmail.value == "") {
    Swal.fire("Alamat email kosong!", "Mohon masukkan email anda.", "error");
  } else {
    Swal.fire("Berlangganan berhasil!", "Nantikan informasi terkini dari Amaranta.", "success");
  }
});
