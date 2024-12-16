import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function About(){

    return(





        <section className="bg-white" >


<div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px]  md:h-[350px]  lg:h-[410px] flex justify-center items-center">
        
        
        <div className="text-center">

        <h1 className="text-white  text-[32px] md:text-[48px] lg:text-[56px] font-sans " > About Us</h1>
        <ul className="text-white flex justify-center space-x-2 mt-2    " >
            <li><a href="/hero" className="p-2 hover:text-[#ff9f0d] "> home  &gt; </a></li>
            <li><a href="/menu" className="hover:text-[#ff9f0d] p-2"> About</a></li>
        </ul>
        </div>
        
        </div>




<div className=" flex justify-center items-center mt-24">

<div className="  grid grid-cols-1 lg:flex justify-center items-center  w-full lg:w-[1320px]  ">


    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-0 lg:p-8 w-full lg:w-[669px] ">
<div><img src="/ab1.png" alt="food1 "className="p-8  pb-10" /></div>
<div><div><img src="/ab2.png" alt="food1" className="p-8"/></div>
<div><img src="/ab3.png" alt="food1" className="p-8"/></div>
</div>
    </div>
<div className="w-[526px] h-[366px]  p-6 lg:p-0" >
    
<h1 className="text-[#FF9F0D] text-[16px] ">About Us.......</h1>
<h1 className="  text-[32px] lg:text-[48px]  font-bold mt-4" >Food is an important 
part Of a balanced Diet</h1>
<p className="mt-4  text-sm lg:text-[14px] p-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
     
     
     <button className="bg-[#FF9F0D] w-[100px] h-[40px] lg:w-[195px] lg:h-[58px] text-white mt-4" >Show More</button>
     </div>

</div>

</div>



<Footer/>
        </section>
    )
}