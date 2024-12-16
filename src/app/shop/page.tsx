import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Stars from "../components/stars";

export default function Shop(){

    

    return(


        <>
        
        
        <section className="   w-full lg:w-[1920px]    bg-white"   >

        <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px]  md:h-[350px]  lg:h-[410px] flex justify-center items-center">
        
        
        <div className="text-center">

        <h1 className="text-white  text-[32px] md:text-[48px] lg:text-[56px] font-sans " >Shop</h1>
        <ul className="text-white flex justify-center space-x-2 mt-2    " >
            <li><a href="/hero" className=" hover:text-[#ff9f0d] ">home   </a></li>
            <li className="">&gt;</li>
            <li><a href="/blog" className="hover:text-[#ff9f0d] ">Shop Details</a></li>
        </ul>
        </div>
        
        </div>


        <div className="flex justify-center items-center w-[1920px] mt-24 " >
        <div className="  grid grid-cols-1 lg:flex w-full lg:w-[1320px] p-6 lg:p-0">

        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">

        <div className=" flex justify-center items-center w-[332px] h-[46px] m-4" >
            <h1 className="text-[20px]" >Sort By :</h1>
        <select name="" id="" className="w-[236px] h-[46px] bg-gray-200">
            <option value="Newst">Newst</option>
        </select>

        </div>




        <div className="flex justify-center items-center w-[332px] h-[46px] m-4" >
            <h1 className="text-[20px]" >Show :</h1>
        <select name="" id="" className="w-[236px] h-[46px] bg-gray-200">
            <option value="Defult">Default</option>
        </select>

        </div>




        <div className="w-[332px] h-[46px] " >

        </div>

        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask1.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Fresh Lime</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$38.00  
            <span className=" text-[16px] text-gray-500 p-2 line-through"> $45.00</span></h1>
        </div>


        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask3.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Chocolate Muffin</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$28.00  
            </h1>
        </div>



        <div className="transfrom hover:scale-110 transition duration-500 ease-out" ><img src="/mask2.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Burger</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$21.00  
        <span className=" text-[16px] text-gray-500 p-2 line-through"> $45.00</span>
            </h1>
        </div>

        

        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask4.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Country Burger</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$45.00  
        
            </h1>
        </div>


        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask5.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Drink</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$23.00  
        <span className=" text-[16px] text-gray-500 p-2 line-through"> $45.00</span>
            </h1>
        </div>


        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask6.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Pizza</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$43.00 </h1>
        </div>




        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask7.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Cheese Butter</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$10.00 </h1>
        </div>



        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask8.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Sandwiches</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$25.00 </h1>
        </div>

        
        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask9.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Chicken Chup</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$12.00 </h1>
        </div>

       
       
       
        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask4.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Country Burger</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$45.00  
        
            </h1>
        </div>


        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask5.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Drink</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$23.00  
        <span className=" text-[16px] text-gray-500 p-2 line-through"> $45.00</span>
            </h1>
        </div>


        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask6.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Pizza</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$43.00 </h1>
        </div>




        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask7.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Cheese Butter</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$10.00 </h1>
        </div>



        <div className="transfrom hover:scale-110 transition duration-500 ease-out"><img src="/mask8.png" alt="food" />
        <h1 className="text-[18px] font-sans font-bold">Sandwiches</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$25.00 </h1>
        </div>

        
        <div className="transfrom hover:scale-110 transition duration-500 ease-out"
        ><a href="/details" ><img src="/mask9.png" alt="food"  /></a>
        <h1 className="text-[18px] font-sans font-bold">Chicken Chup</h1>
        <h1 className="text-[#FF9F0D] text-[16px] p-2">$12.00 </h1>
        </div>

<div className="w-[306px] h-[51px] " ></div> 
<div className=" flex justify-between items-center  w-[306px] h-[51px] " >
<button className="w-[50px] h-[50px]  bg-[#ffffff] hover:bg-[#FF9F0D]" ><span className="text-3xl">&#11244;</span></button>

<button className=" text-black text-2xl w-[50px] h-[50px] bg-[#ffffff]  hover:bg-[#FF9F0D]" >1</button>

<button className=" text-black text-2xl w-[50px] h-[50px] bg-[#ffffff]  hover:bg-[#FF9F0D]" >2</button>

<button className=" text-black text-2xl w-[50px] h-[50px] bg-[#ffffff]  hover:bg-[#FF9F0D]" >3</button>

    <button className="w-[50px] h-[50px]  bg-[#ffffff] hover:bg-[#FF9F0D] " ><span className="text-3xl">&#11246;</span></button></div> 
<div className="w-[306px] h-[51px] " ></div>       
        </div>
                
                
        <div className="w-[312px]  " >

<div className="flex justify-center items-start mt-20" >

<input type="text" placeholder="Search Product" className="w-[248px] h-[46px] border-2 border-black" />
<div className=" flex justify-around items-center bg-[#ff9f0d] w-[46px] h-[46px] " >
    <button className=" w-[20px] h-[20px] transform hover:scale-150 transition duration-500 ease-in-out">🔍</button></div>

</div>


<div className=" w-[248px] h-[372px] " >
    
    <h1 className="text-[20px] font-sans font-bold text-black" >Category</h1>
    
    
    <form action="">

        <label className="text-[18px]  " >
            <input type="checkbox" name="optional1" className="mr-2 mt-5" />
            Sandwiches
        </label>
    <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional1" className="mr-2 mt-5" />
            Burger
        </label>
    
        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional1" className="mr-2 mt-5" />
            Chicken chup
        </label>
    

        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional1" className="mr-2 mt-5" />
            Drink
        </label>
        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional1" className="mr-2 mt-5" />
            Pizza 
        </label>

        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional1" className="mr-2 mt-5" />
            Thi
        </label>

        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional1" className="mr-2 mt-5" />
            Non Veg
        </label>

        <br />
        <label className="text-[18px] " >
            <input type="checkbox" name="optional1" className="mr-2 mt-5" />
            Uncategorized
        </label>



    </form>
</div>


<div className=" bg-[url('/rise.png')]  bg-cover bg-center w-[248px] h-[286px]"> 

<h1 className="text-[16px] text-white font-sans font-bold pt-6 pl-6 " >Perfect Test</h1>
<h1 className="text-[20px] font-sans font-bold text-white p-6 " >Classic Resturent</h1>
<h1 className="text-[#FF9F0D]  text-[16px] font-bold pl-6 ">45.00$</h1>

<button className="text-white text-[24px]  font-sans p-6 mt-12 transform hover:scale-110  " > shop Now <span className="border-2 border-white rounded-full m-2 p-1 " >→</span> </button>
  
  </div>

  <div className=" mt-12" >

<h1 className="text-[20px] font-bold font-sans p-4 " >Filter By Price</h1>
<input type="range"
className=" h-2 bg-[#FF9F0D] rounded-lg appearance-none cursor-pointer accent-gray-500
     focus:outline-none focus:ring-2 focus:ring-green-500"                                
                       />
        
                       <input type="range"
className=" h-2 bg-[#FF9F0D] rounded-lg appearance-none cursor-pointer accent-gray-500
     focus:outline-none focus:ring-2 focus:ring-green-500 "                                
                       />

                       <div className="flex justify-between p-4" ><h1 className="text-[#1E1E1E] text-[16px] font-sans font-bold " >
                        From $0 to $8000</h1>
                         <h1 className="text-[#1E1E1E] text-[16px] font-sans font-bold mr-6">Filter</h1></div>
                        </div>


                        <div className="mt-12"> 
                            <h1 className="text-[20px] font-bold font-sans" >Latest Products</h1>

<div className="flex" >
 <div><img src="/vec.png" alt="rating" className="p-4" /></div>
<div className="p-4">
 <h1 className="text-[#4F4F4F] text-[16px] font-bold font-sans " >Pizza</h1>
 <Stars/>
  <h1 className="text-[#4F4F4F] text-[14px] font-bold " >35$</h1>
  </div>
</div>


<div className="flex" >
 <div><img src="/vec.png" alt="rating" className="p-4" /></div>
<div className="p-4">
 <h1 className="text-[#4F4F4F] text-[16px] font-bold font-sans " >Cupchake</h1>
 <Stars/>
  <h1 className="text-[#4F4F4F] text-[14px] font-bold " >35$</h1>
  </div>
</div>


<div className="flex" >
 <div><img src="/vec.png" alt="rating" className="p-4" /></div>
<div className="p-4">
 <h1 className="text-[#4F4F4F] text-[16px] font-bold font-sans " >Cookies</h1>
 <Stars/>
  <h1 className="text-[#4F4F4F] text-[14px] font-bold " >35$</h1>
  </div>
</div>


<div className="flex" >
 <div><img src="/vec.png" alt="rating" className="p-4" /></div>
<div className="p-4">
 <h1 className="text-[#4F4F4F] text-[16px] font-bold font-sans " >Burger</h1>
 <Stars/>
  <h1 className="text-[#4F4F4F] text-[14px] font-bold " >35$</h1>
  </div>
</div>



<div>

    <h1 className="text-[20px] font-sans font-bold">Product Tags</h1>
<div className="grid grid-cols-1 ">
    
    <div className="p-4">
    <a href="" className="text-[20px]  hover:text-[#FF9F0D] font-sans " >Services</a>
    <a href="" className="text-[20px] p-4  hover:text-[#FF9F0D] font-sans ">Our Menu</a>
    <a href="" className="text-[20px]  hover:text-[#FF9F0D] font-sans ">Pizza</a>
    </div>
    
    <div className="p-4">
    <a href="" className="text-[20px]  hover:text-[#FF9F0D] font-sans " >Cup Cake</a>
    <a href="" className="text-[20px] p-4 hover:text-[#FF9F0D] font-sans ">Burger</a>
    <a href="" className="text-[20px]  hover:text-[#FF9F0D] font-sans ">Cookies</a>
    </div>
    <div className="p-4">
    <a href="/details" className="text-[20px]  hover:text-[#FF9F0D] font-sans ">Our Shop</a> 
    <a href="" className="text-[20px] pl-4 hover:text-[#FF9F0D] font-sans ">Tandoori Chicken</a>
    </div>
</div>
</div>
                            
                        </div>
    

        </div>
        

        </div>

        </div>    
 
 <Footer/>
        </section>
        
        
        
        
        
        
        
        </>
    )
}