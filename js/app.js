const UlInnav =document.getElementById('NavBarItem')
const sections = document.getElementsByTagName('section');
let number=1
const sectionsOffsetTopVAL = [];


const CreateNav = () => {
    for (let section of sections) {
        let li = section.attributes['data-nav'].nodeValue;
        console.dir(li)
        UlInnav.innerHTML += `<li><a href="" class="nav_item${number++}">${li}</a></li>`;
        sectionsOffsetTopVAL.push(section.offsetTop);
    }
    // set our first li item active
}

CreateNav();


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



