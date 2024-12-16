import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

    export default function Menu(){

    return (


        <>
        <section id="menu" className=" w-full lg:w-[1920px] bg-white" >

        <div className="bg-[url('/Image/menu.png')] bg-cover bg-center w-full h-[250px]  md:h-[350px]  lg:h-[410px] flex justify-center items-center">
        
        
        <div className="text-center">

        <h1 className="text-white  text-[32px] md:text-[48px] lg:text-[56px] font-sans " >Our Menu</h1>
        <ul className="text-white flex justify-center space-x-2 mt-2    " >
            <li><a href="/hero" className="p-2 hover:text-[#ff9f0d] "> home  &gt; </a></li>
            <li><a href="/menu" className="hover:text-[#ff9f0d] p-2"> Menu</a></li>
        </ul>
        </div>
        
        </div>


<div className="w-full    flex justify-center items-center " >

<div className=" w-auto lg:w-[1320px] h-auto lg:h-[628px] grid grid-cols-1 md:grid-cols-2 lg:flex justify-between mt-24 p-6 lg:p-4 " >

<div>

    <img src="/menu-1.png" alt="menu1"  className="w-full lg:w-[468px]   h-auto lg:h-[626px]" />

</div>

<div  className="grid grid-cols-1 justify-between h-[628px]   mt-12 lg:mt-0 p-6  "  >

<h1 className=" text-[32px] md:text-[40px]  lg:text-[48px] font-sans font-bold text-[#333333]" >Stater Menu</h1>


  <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]  ">
      <div><h1 className="  text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]" >Berries and creme tart</h1>
                <p>Gorgonzola, ricotta, mozzarella, taleggio
                <br />
                700 call
            </p>
     </div>
     <div><h1 className="text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold  text-[#ff9f0d] " >43$</h1></div>
    </div>



    <div className="grid sm:grid grid-cols-1 lg:grid-cols-2 justify-between  w-[760px] h-[111px]  ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Tormentoso Bush Pizza Pintoage</h1>
                <p>Ground cumin, avocados, peeled and cubed
                <br />
                1000 call
            </p>
     </div>
     <div><h1 className=" text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >14$</h1></div>
    </div>


    <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]  " >Spicy Vegan Potato Curry</h1>
                <p>Spreadable cream cheese, crumbled blue cheese
                <br />
                560 call
            </p>
     </div>
     <div><h1 className=" text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >35$</h1></div>
    </div>


    <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Alder Grilled Chinook Salmon</h1>
                <p>Toasted French bread topped with romano, cheddar
                <br />
                650 call
            </p>
     </div>
     <div><h1 className=" text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >32$</h1></div>
    </div>
  </div>


</div>


</div>





<div className="w-full  flex justify-center items-center " >

<div className="w-auto lg:w-[1320px] h-auto lg:h-[628px] grid grid-cols-1 md:grid-cols-2 lg:flex justify-between mt-12 lg:mt-24 p-6 lg:p-4" >


<div  className="grid grid-cols-1 justify-between h-autolg:h-[628px] p-6 "  >

<h1 className=" text-[32px] md:text[40px] lg:text-[48px] font-sans font-bold text-[#333333]" >Main course</h1>


  <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className=" text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]" >Optic Big Breakfast Combo Menu</h1>
                <p>Toasted French bread topped with romano, cheddar
                <br />
                560 call
            </p>
     </div>
     <div className=" " ><h1 className=" text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold  text-[#ff9f0d] " >32$</h1></div>
    </div>



    <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-between  w-[760px] h-[111px]  ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Cashew Chicken With Stir-Fry</h1>
                <p>Gorgonzola, ricotta, mozzarella, taleggio
                <br />
                700 call
            </p>
     </div>
     <div><h1 className="  text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >43$</h1></div>
    </div>


    <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]  " > Vegetables & Green Salad</h1>
                <p>Ground cumin, avocados, peeled and cubed
                <br />
                1000 call
            </p>
     </div>
     <div><h1 className=" text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >14$</h1></div>
    </div>


    <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Spicy Vegan Potato Curry</h1>
                <p>Spreadable cream cheese, crumbled blue cheese
                <br />
                560 call
            </p>
     </div>
     <div><h1 className=" text-left lg:text-right text-[20px] md:text-[20px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >35$</h1></div>
    </div>
  </div>


  <div>

<img src="/menu-bur.png" alt="menu1"  className="w-full h-auto lg:w-[468px] lg:h-[626px]" />

</div>

</div>

</div>






<div className=" flex justify-center items-center w-full h-auto lg:w-[1920px] lg:h-[469px]  bg-[#151514] mt-16 p-6 ">


<div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gsp-4 mt-20     "  >
  <img src="/Chef.png" alt="shef" className=" p-4 lg:p-6 transform hover:scale-110 transition duration-500 ease-in-out " />
  <img src="/spoon1.png" alt="shef"className="p-4  lg:p-6 transform hover:scale-110 transition duration-500 ease-in-out" />
  <img src="/spoon2.png" alt="shef"className="p-4  lg:p-6 transform hover:scale-110 transition duration-500 ease-in-out" />
  <img src="/pizza.png" alt="shef"className="p-4  lg:p-6 transform hover:scale-110 transition duration-500 ease-in-out" />
</div>


</div>



<div className="w-full    flex justify-center items-center " >

<div className=" w-auto lg:w-[1320px] h-auto lg:h-[628px] grid grid-cols-1 md:grid-cols-2 lg:flex justify-between mt-24 p-6 lg:p-4 " >

<div>

    <img src="/cake.png" alt="menu1"  className="w-full lg:w-[468px]   h-auto lg:h-[626px]" />

</div>

<div  className="grid grid-cols-1 justify-between h-[628px]   mt-12 lg:mt-0 p-6  "  >

<h1 className=" text-[32px] md:text-[40px]  lg:text-[48px] font-sans font-bold text-[#333333]" >Dessert</h1>


  <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]  ">
      <div><h1 className="  text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]" >Fig and lemon cake</h1>
                <p>Toasted French bread topped with romano, cheddar
                <br />
                560 call
            </p>
     </div>
     <div><h1 className="text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold  text-[#ff9f0d] " >32$</h1></div>
    </div>



    <div className="grid sm:grid grid-cols-1 lg:grid-cols-2 justify-between  w-[760px] h-[111px]  ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Creamy mascarpone cake</h1>
                <p>Gorgonzola, ricotta, mozzarella, taleggio
                <br />
                700 call
            </p>
     </div>
     <div><h1 className=" text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >43$</h1></div>
    </div>


    <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]  " >Pastry, blueberries, lemon juice</h1>
                <p>Ground cumin, avocados, peeled and cubed
                <br />
                1000 call
            </p>
     </div>
     <div><h1 className=" text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >14$</h1></div>
    </div>


    <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Pain au chocolat</h1>
                <p>Spreadable cream cheese, crumbled blue cheese
                <br />
                560 call
            </p>
     </div>
     <div><h1 className=" text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >35$</h1></div>
    </div>
  </div>


</div>


</div>





<div className="w-full  flex justify-center items-center " >

<div className="w-auto lg:w-[1320px] h-auto lg:h-[628px] grid grid-cols-1 md:grid-cols-2 lg:flex justify-between mt-12 lg:mt-24 p-6 lg:p-4" >


<div  className="grid grid-cols-1 justify-between h-autolg:h-[628px] p-6 "  >

<h1 className=" text-[32px] md:text[40px] lg:text-[48px] font-sans font-bold text-[#333333]" >Drinks</h1>


  <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className=" text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]" >Caffè macchiato</h1>
                <p>Toasted French bread topped with romano, cheddar
                <br />
                560 call
            </p>
     </div>
     <div className=" " ><h1 className=" text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold  text-[#ff9f0d] " >32$</h1></div>
    </div>



    <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-between  w-[760px] h-[111px]  ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Aperol Spritz Capacianno</h1>
                <p>Gorgonzola, ricotta, mozzarella, taleggio
                <br />
                700 call
            </p>
     </div>
     <div><h1 className="  text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >43$</h1></div>
    </div>


    <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]  " > Caffe Latte Campuri</h1>
                <p>Ground cumin, avocados, peeled and cubed
                <br />
                1000 call
            </p>
     </div>
     <div><h1 className=" text-left lg:text-right text-[20px] md:text-[23px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >14$</h1></div>
    </div>


    <div className="grid sm:grid-cols-1 lg:grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[20px] md:text-[23px] lg:text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Tormentoso BushTea Pintoage</h1>
                <p>Spreadable cream cheese, crumbled blue cheese
                <br />
                560 call
            </p>
     </div>
     <div><h1 className=" text-left lg:text-right text-[20px] md:text-[20px] lg:text-[24px] font-sans font-bold text-[#ff9f0d] " >35$</h1></div>
    </div>
  </div>


  <div>

<img src="/drink.png" alt="menu1"  className="w-full h-auto lg:w-[468px] lg:h-[626px]" />

</div>

</div>

</div>




<div className=" w-full lg:w-[1920px]  lg:mt-24 mt-16 flex justify-center items-center " >


<div className="  " >
<div><h1 className="text-center text-[12px] lg:text-[14px] " >Partners & Clients</h1></div>
<div><h1 className="  text-[28px] md:text-[36] lg:text-[48px] font-sans font-bold text-center" >We work with the best pepole</h1></div>
<div className=" grid  grid-cols-1   md:grid-cols-2  lg:flex p-6 lg:ml-0 ml-14" >
  <img src="/partner1.png" alt="partners" className="p-6  w-[230px] h-[140px] "  />
  <img src="/partner2.png" alt="partners" className="p-6  w-[230px] h-[140px]  " />
  <img src="/partner3.png" alt="partners" className="p-6  w-[230px] h-[140px] " />
  <img src="/partner4.png" alt="partners" className="p-6  w-[230px] h-[140px] " />
  <img src="/partner5.png" alt="partners" className="p-6  w-[230px] h-[140px]  " />
  <img src="/partner6.png" alt="partners" className="p-6  w-[230px] h-[140px]  " />
</div>

</div>


</div>



        <Footer/>
        </section>
        
          
        </>
    )
}

