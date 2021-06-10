





function delay() {
  return new Promise(resolve => setTimeout(resolve,25));
}



  async function swap(el1,el2)
    {


      el1.style.background="yellow";
      el2.style.background="yellow";

      await delay();
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);


      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");


      el1.style.height = transform2;
      el2.style.height = transform1;

      await delay();
      el1.style.background="aqua";
      el2.style.background="aqua";

      await delay();





    }






async function bub()
{

  children = document.getElementById("arr").getElementsByTagName("div");


  var i;


  for(i=0; i<children.length; i++)
  {
    for(var j=0;j<(children.length-i-1);j++)
      {



          if (children[j].offsetHeight>children[j+1].offsetHeight)
          {
            await swap(children[j],children[j+1]);

          }

        }


        children[j].style.background="#3bff6f";


    }
  }
