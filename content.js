async function random_confession() { 
  var elems = document.body.getElementsByTagName("section"); 
  var index = Math.floor(Math.random()*(0-elems.length+1))+elems.length; 
  var elem = elems[index];
  elem.id = Math.random(); 
  elem.scrollIntoView({block: "center"}); 
  elem.style.border = "thick solid #0000FF"; await new Promise(r =>   setTimeout(r, 500));
  elem.style.border = "";
}

var link = document.createElement('div');
link.classList.add('Nav_navItem__DxdR6');
link.href = '#section1';
link.textContent = 'Random';
document.getElementsByClassName('Nav_header__1ec4y')[0].appendChild(link);

link.addEventListener("click", random_confession);