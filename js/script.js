function handleNav(position) {
  return document.getElementById("nav").style.transform = `translateX(${position}%)`
}

function openNav() {
  handleNav(0)
}

function closeNav() {
  handleNav(100)
}