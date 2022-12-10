const section=document.getElementsByName('section')
const ul=document.getElementsByClassName('NavBarItem')
let emp =[]

const Navfunc=()=>{
    for(let sec of section)
{
    let li=sec.attributes['data-nav'].nodeValue;
    console.log(li)    
    ul.innerHTML+=`<li><a href="" class="nav_item">${li}</a></li>`;
    emp.push(sec.offsetTop)

}

}
Navfunc();