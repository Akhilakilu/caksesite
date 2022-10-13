const p1=document.getElementById("searching1")
const p2=document.getElementById("searching2")
const p3=document.getElementById("searching3")
const p4=document.getElementById("searching4")
const p5=document.getElementById("searching5")
const p6=document.getElementById("searching6")
const p7=document.getElementById("searching7")
const p8=document.getElementById("searching8")
const p9=document.getElementById("searching9")
const p10=document.getElementById("searching10")
const p11=document.getElementById("searching11")
const p12=document.getElementById("searching12")
const p13=document.getElementById("searching13")
const p14=document.getElementById("searching14")
const p15=document.getElementById("searching15")
const p16=document.getElementById("searching16")
const p17=document.getElementById("searching17")
const p18=document.getElementById("searching18")
const p20=document.getElementById("searching19")


const special=/[\[{(.+*?|$^)}]/g
function search(){

console.log("search");
let input=document.getElementById("searchBoxid").value;

console.log(input);
if(input!==""){
    if(special.test(input))input=input.replace(special,"\\$&");
    let regExp=new RegExp(input,"gi");
    console.log(regExp);

    p1.innerHTML=(p1.textContent).replace(regExp,"<mark>$&</mark>");
    p2.innerHTML=(p2.textContent).replace(regExp,"<mark>$&</mark>");
    p3.innerHTML=(p3.textContent).replace(regExp,"<mark>$&</mark>");
    p4.innerHTML=(p4.textContent).replace(regExp,"<mark>$&</mark>");
    p5.innerHTML=(p5.textContent).replace(regExp,"<mark>$&</mark>");
    p6.innerHTML=(p6.textContent).replace(regExp,"<mark>$&</mark>");
    p7.innerHTML=(p7.textContent).replace(regExp,"<mark>$&</mark>");
    p8.innerHTML=(p8.textContent).replace(regExp,"<mark>$&</mark>");
    p9.innerHTML=(p9.textContent).replace(regExp,"<mark>$&</mark>");
    p10.innerHTML=(p10.textContent).replace(regExp,"<mark>$&</mark>");
    p11.innerHTML=(p11.textContent).replace(regExp,"<mark>$&</mark>");
    p12.innerHTML=(p12.textContent).replace(regExp,"<mark>$&</mark>");
    p13.innerHTML=(p13.textContent).replace(regExp,"<mark>$&</mark>");
    p14.innerHTML=(p14.textContent).replace(regExp,"<mark>$&</mark>");
    p15.innerHTML=(p15.textContent).replace(regExp,"<mark>$&</mark>");
    p16.innerHTML=(p16.textContent).replace(regExp,"<mark>$&</mark>");
    p17.innerHTML=(p17.textContent).replace(regExp,"<mark>$&</mark>");
    p18.innerHTML=(p18.textContent).replace(regExp,"<mark>$&</mark>");
    p19.innerHTML=(p19.textContent).replace(regExp,"<mark>$&</mark>");


}


}