import Navbar  from "../components/navbar";
import Footer from "../components/footer";




export default function Error(){



    return(


<section className=" bg-white" >


<div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px]  md:h-[350px]  lg:h-[410px] flex justify-center items-center">
        
        
        <div className="text-center">

        <h1 className="text-white  text-[32px] md:text-[48px] lg:text-[56px] font-sans " >404 Error </h1>
        <ul className="text-white flex justify-center space-x-2 mt-2    " >
            <li><a href="/hero" className="p-2 hover:text-[#ff9f0d] "> home &gt; </a></li>
            <li><a href="/menu" className="hover:text-[#ff9f0d] p-2">404</a></li>
        </ul>
        </div>
        
        </div>


<div className="  flex justify-center items-center " >

<div className="  flex flex-col justify-between text-center items-center w-full lg:w-[424px] mt-24 lg:p-0  p-6    " >
<h1 className="lg:text-left  w-[360px] text-[20px] font-sans font-bold" >Sign Up</h1>
<input type="text" placeholder="👤 Name" className="  w-[250px] h-[40px] lg:w-[360px] lg:h-[44px] border-2 border-gray-400 text-xl m-5" />
<input type="text" placeholder="✉️ Email" className=" w-[250px]  h-[40px] lg:w-[360px] lg:h-[44px] border-2 border-gray-400 text-xl m-5" />
<input type="text" placeholder="🔒 Password" className=" w-[250px]  h-[40px] lg:w-[360px] lg:h-[44px] border-2 border-gray-400 text-xl m-5" />

<form action=""  >

<label className="text-[18px] p-4 m-5 mr-0 lg:mr-44 ">
<input type="checkbox" name="optional1" className=" w-[20px] h-[20px] mr-2    "  />
Remember me?
</label>

</form>


<button className="bg-[#ff9f0d] w-[250px]  lg:w-[360px] h-[44px] text-white m-5" >Sign Up</button>
<h1 className="mr-0 lg:ml-44 text-[#828282] " >Forget password?</h1>




<div>
<h1 className="text-[16px] text-center mt-6" >OR</h1>

<div className=" flex  items-center w-[360px] h-[44px] border-2  border-[#E0E0E0] m-5" ><img src="/a-google.png" alt="" className="   w-[20px] h-[20px]" /> 
<h1 className="text-center text-[#4F4F4F] text-[16px] font-sans ml-24 ">Sign Up With Google</h1></div>

<div className=" flex  items-center w-[360px] h-[44px] border-2 border-[#E0E0E0] m-5" ><img src="/a-apple.png" alt="" className="text-center  text-[#4F4F4F] text-[16px] w-[20px] h-[20px]" /> 
<h1 className="text-center text-[#4F4F4F] text-[16px] font-sans ml-24" >Sign Up With Apple</h1></div>

</div>


</div>



</div>



<Footer/>

</section>




    )
}