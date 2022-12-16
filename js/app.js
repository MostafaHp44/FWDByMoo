const UlInnav =document.getElementById('NavBarItem')
const sections = document.getElementsByTagName('section');
const totop= document.getElementById('top')
let topbtn = document.getElementById("myBtn");
let number=1
const back = [];


const CreateNav = () => {
    for (let sec of sections) {
        let li = sec.attributes['data-nav'].nodeValue;
        console.dir(li)
        UlInnav.innerHTML += `<li><a href="" class="nav_item${number++}">${li}</a></li>`;
        back.push(sec.offsetTop);
    }
    // set our first li item active
}

CreateNav();

window.onscroll = ()=> {scrollFUN()};

const scrollFUN=()=> {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900 )
   {
    topbtn.style.display = "block";
  }
   else
    {
    topbtn.style.display = "none";
  }
}

// When I'M click on the button 
const ToTOP=()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}


if(UlInnav){
    UlInnav.addEventListener('click', (event) =>{ 
        event.preventDefault();
            if (event.target.nodeName == 'A') {
                for (let section of sections) {
     if (event.target.outerText == section.attributes['data-nav'].nodeValue) {
                        window.scrollTo({
                            top: section.offsetTop,
                            left: section.offsetLeft,
                            behavior: 'smooth'
                        })
                    }
                }
            }
        })
        
}



