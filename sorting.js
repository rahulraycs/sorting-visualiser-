
function output(){
  document.getElementById("arr").innerHTML = "";

    var array=[];
    var len=20;

    var arr_size=document.querySelector("#arr_sz");
    arr_size.addEventListener("input",output);
    var no_of_bar=arr_size.value;
    var totalwidth=document.getElementById("arr").offsetWidth;
    console.log(totalwidth);
    for (var i=1;i<no_of_bar;i++)
    {
      var n=Math.floor(Math.random()*len);
      array.push(n);
      var count=totalwidth/no_of_bar;
      var element=document.createElement("div");
      element.style.height=`${n}cm`;
      element.style.width=`${count}px`;
      element.style.background="aqua";
        element.style.padding="1px";
      element.style.margin="1px";

      var addele=document.getElementById("arr");
      addele.appendChild(element);
    }
  }
