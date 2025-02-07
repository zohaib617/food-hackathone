import Navbar  from "../components/navbar";
import Footer from "../components/footer";




export default function MyError(){



    return(


<section className=" bg-white  w-full lg:w-[1920px]" >


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


<div className=" flex flex-col justify-between  items-center w-full lg:w-[630px]    mt-24 p-7 " >



    <h1 className=" text-[60px] lg:text-[96px] text-[#FF9F0D] font-bold" >404</h1>

<h1 className=" text-[24px] lg:text-[32px] font-sans font-bold  text-center" >Oops! Look likes something going wrong</h1>
<p className="text-[#4F4F4F] w-full lg:w-[490px] text-center p-4" >Page Cannot be found! we’ll have it figured out in no time.
Menwhile, cheek out these fresh ideas:</p>

<a href="/hero"><button className="bg-[#ff9f09] w-[150px] h-[44px] lg:w-[197px] lg:h-[58px] text-white" >Go To Home</button>
</a>
</div>


</div>



<Footer/>

</section>




    )
}