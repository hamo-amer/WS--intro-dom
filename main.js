// var mainelement=document.getElementById("main")

// console.log(mainelement)

// var Name=document.getElementsByClassName('name')

// console.log(Name[0])

// var title=document.getElementsByTagName("h1")

// console.log(title)

// var element=document.querySelector("#event")

// console.log(element)

// var btns=document.querySelectorAll("button")
// console.log(btns)

// var title2=document.createElement("h2")
// title2.innerHTML="this is title"
// document.getElementById("demo").appendChild(title2)

// document.querySelector("h1").style.color="blue"
var name=""
function sayHello(){
    if(name) alert("Hello from "+name)
    else alert("Enter your name..")
    
}
function getName(){
    var x=document.getElementById("fname")
   name=x.value
}

var plus=document.getElementsByClassName("btn-plus")
var counter=document.getElementsByClassName("counter")
var minus=document.getElementsByClassName("btn-minus")

// plus[0].addEventListener("click",function(){
// counter[0].innerHTML=Number(counter[0].innerHTML)+1
// })

// minus[0].addEventListener("click",function(){
//     if(Number(counter[0].innerHTML)>0)  counter[0].innerHTML=Number(counter[0].innerHTML)-1
//  else counter[0].innerHTML=0
// })
for(var i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
        // console.log(this.nextElementSibling)
        this.nextElementSibling.innerHTML=Number(this.nextElementSibling.innerHTML)+1
})
minus[i].addEventListener("click",function(){
    console.log(this.previousElementSibling)
    if(Number(this.previousElementSibling.innerHTML)>0)  this.previousElementSibling.innerHTML=Number(this.previousElementSibling.innerHTML)-1
 else this.previousElementSibling.innerHTML=0
})
}