import './../scss/style.scss'

document.addEventListener("DOMContentLoaded", function() {
  // const header = document.queryselector
  const header = document.querySelector(".header-alt")
  console.log(header)

  const current_url = window.location.pathname
  if (current_url === "/") {
    header.classList.add("header-alt--home")
  }
  console.log(current_url)
});
