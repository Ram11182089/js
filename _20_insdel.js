// let p=document.createElement("p")
// p.innerHTML="I have been inserted by <b>ram</b>"
// p.setAttribute("class","created")
// document.querySelector(".con").prepend(p)

const hi=document.querySelector(".con")
hi.insertAdjacentElement("afterend","<b>i am saiyan</b>")

document.body.children[0].remove