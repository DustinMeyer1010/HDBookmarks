var coll = document.getElementsByClassName("collapsible");
var i;

document.getElementById("filter-search").focus();
document.getElementById("filter-search").select();


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function dropMenu(name) {
  const drop = document.getElementById(name)
  drop.children[1].style.display = "block"
}

function filterSearch() {

  const filter = document.getElementById("filter-search")
  const content = document.getElementById("content")
  if (filter.value == ""){
    for (let i =0; i < content.children.length; i++){
      content.children[i].children[1].style.display = "none"
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return
  }
  if (isLetter(filter.value[0])){
    var regex = new RegExp(filter.value.toLowerCase());
    const index = filter.value[0].charCodeAt(0)-96

    const child = content.children[index].children[1]
    child.style.display = "block"
    child.scrollIntoView({ behavior: 'smooth' });
    for (let i = 0; i < child.children.length; i++){
      if (!regex.test(child.children[i].firstChild.innerHTML.toLowerCase())){
        child.children[i].style.opacity = "0"
        setTimeout(function(){
          if(child.children[i].style.opacity == 0){
          child.children[i].style.display = "None"
          }

        }, 550)

      }
      else {

        child.children[i].style.display = "block"
        setTimeout(function(){
          child.children[i].style.opacity = "100"
        }, 50)

      }
    }
  }

}

function isLetter(char) {
  return /^[a-zA-Z]$/.test(char)
}