const UlInnav  = document.getElementById('NavBarItem')
const ul_nav   = document.getElementById('NavBarItem').childNodes
const sections = document.getElementsByTagName('section');
const totop    = document.getElementById('top')
let topbtn     = document.getElementById("myBtn");
let number=1
const back = [];
let activeSection;
let activesec_i;
const smallmenu = document.querySelector('.convertm');
const head = document.querySelector('.HeaderNav');



smallmenu.addEventListener('click', (e) => {
    head.classList.toggle("open");
})


const CreateNav = () => {
    for (let sec of sections) {
        let li = sec.attributes['data-nav'].nodeValue;
        console.dir(li)
        UlInnav.innerHTML += `<li><a href="">${li}</a></li>`;
        back.push(sec.offsetTop);
    }
    UlInnav.childNodes[0].classList.add(`nav_item_active`);
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
const ToTOP=() => window.scrollTo({ top: 0,	behavior: "smooth" });



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

window.addEventListener('scroll', (event) => {

    if (back && window.pageYOffset >= back[0]) 
    {
        back.map((value, index) => {
            if (value <= window.pageYOffset + 150) {
                activeSection = sections[index];
                activesec_i = index;
            }
        })

        if (activeSection.classList.contains("your-active-class")) 
        {
            return
        }
         else 
         {
            for (let section of sections) {
                section.classList.remove("your-active-class")
            }
            for (let li of ul_nav) {
                li.classList.remove(`nav_item_active`)
            }
            activeSection.classList.add("your-active-class") 
            ul_nav[activesec_i].classList.add(`nav_item_active`)
        }
    }
})


