import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

    export default function Menu(){

    return (


        <>
        <section id="menu" className=" w-full lg:w-[1920px] bg-white" >

        <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px]  md:h-[350px]  lg:h-[410px] flex justify-center items-center">
        
        
        <div className="text-center">

        <h1 className="text-white  text-[32px] md:text-[48px] lg:text-[56px] font-sans " >Our Menu</h1>
        <ul className="text-white flex justify-center space-x-2 mt-2    " >
            <li><a href="" className="p-2 hover:text-[#ff9f0d] "> home  &gt; </a></li>
            <li><a href="" className="hover:text-[#ff9f0d] p-2"> Menu</a></li>
        </ul>
        </div>
        
        </div>


<div className="w-full  flex justify-center items-center " >

<div className="w-[1320px] h-[628px]  flex justify-between mt-24" >

<div>

    <img src="/menu-1.png" alt="menu1"  className="w-[468px] h-[626px]" />

</div>

<div  className="grid grid-cols-1 justify-between h-[628px]  "  >

<h1 className="text-[48px] font-sans font-bold text-[#333333]" >Stater Menu</h1>


  <div className="grid grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]" >Berries and creme tart</h1>
                <p>Gorgonzola, ricotta, mozzarella, taleggio
                <br />
                700 call
            </p>
     </div>
     <div><h1 className=" text-right text-[24px] font-sans font-bold  text-[#ff9f0d] " >43$</h1></div>
    </div>



    <div className="grid grid-cols-2 justify-between  w-[760px] h-[111px]  ">
      <div><h1 className="text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Tormentoso Bush Pizza Pintoage</h1>
                <p>Ground cumin, avocados, peeled and cubed
                <br />
                1000 call
            </p>
     </div>
     <div><h1 className=" text-right text-[24px] font-sans font-bold text-[#ff9f0d] " >14$</h1></div>
    </div>


    <div className="grid grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]  " >Spicy Vegan Potato Curry</h1>
                <p>Spreadable cream cheese, crumbled blue cheese
                <br />
                560 call
            </p>
     </div>
     <div><h1 className=" text-right text-[24px] font-sans font-bold text-[#ff9f0d] " >35$</h1></div>
    </div>


    <div className="grid grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Alder Grilled Chinook Salmon</h1>
                <p>Toasted French bread topped with romano, cheddar
                <br />
                650 call
            </p>
     </div>
     <div><h1 className=" text-right text-[24px] font-sans font-bold text-[#ff9f0d] " >32$</h1></div>
    </div>
  </div>


</div>


</div>





<div className="w-full  flex justify-center items-center " >

<div className="w-[1320px] h-[628px]  flex justify-between mt-24" >


<div  className="grid grid-cols-1 justify-between h-[628px]  "  >

<h1 className="text-[48px] font-sans font-bold text-[#333333]" >Main course</h1>


  <div className="grid grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]" >Optic Big Breakfast Combo Menu</h1>
                <p>Toasted French bread topped with romano, cheddar
                <br />
                560 call
            </p>
     </div>
     <div><h1 className=" text-right text-[24px] font-sans font-bold  text-[#ff9f0d] " >32$</h1></div>
    </div>



    <div className="grid grid-cols-2 justify-between  w-[760px] h-[111px]  ">
      <div><h1 className="text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Cashew Chicken With Stir-Fry</h1>
                <p>Gorgonzola, ricotta, mozzarella, taleggio
                <br />
                700 call
            </p>
     </div>
     <div><h1 className=" text-right text-[24px] font-sans font-bold text-[#ff9f0d] " >43$</h1></div>
    </div>


    <div className="grid grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d]  " > Vegetables & Green Salad</h1>
                <p>Ground cumin, avocados, peeled and cubed
                <br />
                1000 call
            </p>
     </div>
     <div><h1 className=" text-right text-[24px] font-sans font-bold text-[#ff9f0d] " >14$</h1></div>
    </div>


    <div className="grid grid-cols-2  w-[760px] h-[111px]   ">
      <div><h1 className="text-[24px] font-sans font-semibold text-[#333333] hover:text-[#ff9f0d] " >Spicy Vegan Potato Curry</h1>
                <p>Spreadable cream cheese, crumbled blue cheese
                <br />
                560 call
            </p>
     </div>
     <div><h1 className=" text-right text-[24px] font-sans font-bold text-[#ff9f0d] " >35$</h1></div>
    </div>
  </div>


  <div>

<img src="/menu-bur.png" alt="menu1"  className="w-[468px] h-[626px]" />

</div>

</div>


</div>






        <Footer/>
        </section>
        
          
        </>
    )
}

