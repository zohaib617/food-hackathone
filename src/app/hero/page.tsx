import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Hero() {
  return (
    
  <>

<section className="w-full lg:w-[1920px] " >

<div className="flex justify-center items-center w-full h-auto py-8 md:py-12 lg:h-[950px]">
  <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1320px] mx-auto h-auto lg:h-[900px]">
    {/* Left Vertical Divider */}
    <div className="flex flex-col justify-center items-center lg:mr-10 h-auto lg:h-[492px]">
      <div className="hidden lg:block  h-[150px] w-0 border-2"></div>
      <div className="  w-[25px] h-[107px] border-blue-400">
        <img src="/icon.png" alt="icon" className="hidden lg:block    mt-2 object-contain" />
      </div>
      <div className="hidden lg:block h-[150px] w-0 border-2"></div>
    </div>

    {/* Center Text div */}
    <div className="text-center lg:text-left w-full max-w-[472px] h-auto mb-8 lg:mb-0">
      <img src="/head.png" alt="" className="w-[249px] h-[40px] mx-auto lg:mx-0" />
      <div className="mt-4">
        <h1 className="text-[#ff9f0d] text-[30px] md:text-[40px] lg:text-[60px] font-sans font-bold leading-tight">
          Th<span className="text-white">e Art of Speed Food Quality</span>
        </h1>
        <p className="text-white mt-4 text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <button className="mt-6 w-[160px] md:w-[190px] h-[50px] md:h-[60px] bg-[#ff9f0d] text-white rounded-3xl">
          See More
        </button>
      </div>
    </div>

    {/* Right Image div */}
    <div className="w-full max-w-[877px] h-auto">
      <img src="/image.png" alt="image" className="w-full h-full object-contain" />
    </div>
  </div>
</div>

  
<div className="flex justify-center items-center w-full h-auto py-8 md:py-12">
  <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1320px] mx-auto h-auto lg:h-[562px] gap-8">
    {/* Left Content div */}
    <div className="w-full max-w-[562px] h-auto text-center lg:text-left">
      <img src="/head2.png" alt="" className="w-[91px] h-[40px] mx-auto lg:mx-0" />
      <div className="mt-4">
        <h1 className="text-[#ff9f0d] text-[28px] md:text-[36px] lg:text-[48px] font-sans font-bold leading-tight">
          We <span className="text-white">Create the Best Foody Product</span>
        </h1>
        <p className="text-white mt-5 text-sm md:text-base lg:text-lg font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
          mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <ul className="mt-5 space-y-4">
          <li className="text-[14px] md:text-[16px] lg:text-[18px] text-white font-sans">
            ✔ Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="text-[14px] md:text-[16px] lg:text-[18px] text-white font-sans">
            ✔ Quisque diam pellentesque bibendum non dui volutpat fringilla.
          </li>
          <li className="text-[14px] md:text-[16px] lg:text-[18px] text-white font-sans">
            ✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>
        <button className="mt-8 w-[160px] md:w-[190px] h-[50px] md:h-[60px] bg-[#ff9f0d] text-white rounded-3xl">
          See More
        </button>
      </div>
    </div>

    {/* Right Image div */}
    <div className="w-full max-w-[660px] h-auto">
      <img src="/food1.png" alt="food" className="w-full h-auto p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out" />
      <div className="flex flex-wrap justify-center lg:justify-between gap-4 mt-4">
        <img src="/food2.png" alt="food" className="w-[150px] md:w-[200px] lg:w-[322px] h-auto p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out" />
        <img src="/food3.png" alt="food" className="w-[150px] md:w-[200px] lg:w-[322px] h-auto p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out" />
      </div>
    </div>
  </div>
</div>

<div className="flex justify-center items-center mt-10">
  <img src="/food-head.png" alt="" className="w-auto h-auto max-w-[200px] md:max-w-[300px]" />
</div>
<h1 className="text-[28px] md:text-[40px] lg:text-[56px] font-sans font-bold text-[#ff9f0d] text-center mt-6">
  Ch<span className="text-white">oose Food Item</span>
</h1>

<div className="flex justify-center items-center w-full h-auto lg:w-[1920px] lg:h-[700px] mt-12">
  <div className="flex justify-center items-center w-full lg:w-[1792px] h-auto lg:h-[803px]">
    {/* Food Items Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto px-4 md:px-12">
      <img src="/food-item1.png" alt="food-item" className=" p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out" />
      <img src="/food-item2.png" alt="food-item" className=" p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out" />
      <img src="/food-item3.png" alt="food-item" className=" p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out" />
      <img src="/food-item4.png" alt="food-item" className=" p-2 object-contain transform hover:scale-110 transition duration-500 ease-in-out" />
    </div>

    {/* Rotated Background Image */}
    <div className="absolute -rotate-12 w-[300px] md:w-[444px] h-auto opacity-10 -bottom-20 md:bottom-0 md:right-10">
      <img src="/food-bg.png" alt="background" className="w-full h-auto object-contain" />
    </div>
  </div>
</div>



<div className="flex justify-center items-center w-full h-auto py-12">
  <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1320px] mx-auto">
    {/* Left div: Image Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4 md:px-12 lg:flex flex-wrap ">
<img src="/unplash1.png" alt="unplash" className="p-2 w-[362px] h-[356px] transform hover:scale-110 transition duration-500 ease-in-out" />
<img src="/unplash2.png" alt="unplash" className="p-2 w-[281px] mt-32 h-[231px] transform hover:scale-110 transition duration-500 ease-in-out" />
<img src="/unplash3.png" alt="unplash" className="p-2 w-[244px] h-[306px] transform hover:scale-110 transition duration-500 ease-in-out" />
<img src="/unplash4.png" alt="unplash" className="p-2 w-[221px] h-[226px] transform hover:scale-110 transition duration-500 ease-in-out" />
<div>
<img src="/unplash5.png" alt="unplash" className="p-2 w-[161px] h-[166px] transform hover:scale-110 transition duration-500 ease-in-out" />
<img src="/unplash6.png" alt="unplash" className="p-2 w-[161px] h-[166px] transform hover:scale-110 transition duration-500 ease-in-out" />
</div>
    </div>

    {/* Right div: Content */}
    <div className="w-full lg:w-[550px] p-6 lg:p-0 mt-10 lg:mt-0 text-center lg:text-left">
      <img src="/unplash-head.png" alt="heading" className="mx-auto lg:mx-0 w-auto max-w-[300px] lg:max-w-full h-auto" />
      <h1 className="text-[32px] sm:text-[40px] lg:text-[56px] font-sans font-bold text-[#ff9f0d] mt-4">
        Ex<span className="text-white">traordinary Taste And Experienced</span>
      </h1>
      <p className="text-white mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
        fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
        mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>

      
      <div className="flex justify-between items-center w-full max-w-[374px] mx-auto lg:mx-0 h-auto mt-8 ">
        {[
          { img: "/Hamburger.png", text: "Fast Food" },
          { img: "/Cookie.png", text: "Lunch" },
          { img: "/Wine.png", text: "Dinner" },
        ].map((item, index) => (
          <div key={index} className="bg-[#ff9f0d] w-[90px] sm:w-[102px] h-auto p-4 flex flex-col items-center rounded-lg">
            <img src={item.img} alt={item.text} className="w-[40px] sm:w-[50px] h-auto" />
            <h1 className="text-white text-[12px] sm:text-[14px] font-light mt-2">{item.text}</h1>
          </div>
        ))}
      </div>

      {/* Experience div */}
      <div className="flex justify-between items-center w-full max-w-[374px] h-auto border-2 bg-slate-50 mt-8 mx-auto lg:mx-0 ">
        <div className="bg-[#ff9f0d] w-[10px] h-full"></div>
        <h1 className="text-[#ff9f0d] text-[32px] sm:text-[40px] lg:text-[48px] font-bold w-auto">30+</h1>
        <div className="ml-4">
          <h1 className="text-[#1E1E1E] text-sm sm:text-base lg:text-lg leading-tight">
            Years Of <span className="font-semibold text-[16px] sm:text-[18px] lg:text-[20px]">Experience</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</div>
<div className=" flex justify-center items-center w-full h-auto lg:w-[1920px] lg:h-[469px]  ">


<div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gsp-4 mt-20     "  >
  <img src="/chef.png" alt="shef" className=" p-4 lg:p-6 transform hover:scale-110 transition duration-500 ease-in-out " />
  <img src="/spoon1.png" alt="shef"className="p-4  lg:p-6 transform hover:scale-110 transition duration-500 ease-in-out" />
  <img src="/spoon2.png" alt="shef"className="p-4  lg:p-6 transform hover:scale-110 transition duration-500 ease-in-out" />
  <img src="/pizza.png" alt="shef"className="p-4  lg:p-6 transform hover:scale-110 transition duration-500 ease-in-out" />
</div>
</div>





<div className=" flex justify-center items-center lg:mt-24 w-full lg:w-[1920px]" >


  <div className="  w-full lg:w-[1320px] h-auto lg:h-[656px]   "> 
            <div className=" flex justify-center items-center lg:flex lg:justify-center lg:items-center" >
              <img src="/Choose-head.png" alt="choos and pick" className="" />
            </div>
            <h1 className=" flex justify-center items-center text-cener text-[48px] text-[#ff9f0d] font-sans font-bold lg:mt-12" >Fr<span className="text-white" >om Our Menu</span></h1>
    
    <div>

      <ul className="sm:col-span-1 md:col-4  mt-12 ml-12 md:bg-gary-700 md:w-[400px]   sm:bg-gray-950  lg:bg-[#151514]   sm:w-[200px] 
        lg:flex justify-between items-center lg:mt-8 lg:w-[1056px] lg:h-[28px]  ">

        <li className=" text-white text-[20px] hover:text-[#ff9f0d]"  ><a href="">Breakfast</a></li>
        <li className=" text-white text-[20px] hover:text-[#ff9f0d]"  ><a href="">Lunch</a></li>
        <li className=" text-white text-[20px] hover:text-[#ff9f0d]"  ><a href="">Dinner</a></li>
        <li className=" text-white text-[20px] hover:text-[#ff9f0d]"  ><a href="">Desret</a></li>
        <li className=" text-white text-[20px] hover:text-[#ff9f0d]"  ><a href="">Drink</a></li>
        <li className=" text-white text-[20px] hover:text-[#ff9f0d]"  ><a href="">Snack</a></li>
        <li className=" text-white text-[20px] hover:text-[#ff9f0d]"  ><a href="">Soups</a></li>
      </ul>
    </div>
<div className="grid sm:grid-cols-1 md:grid-cols-1  lg:flex justify-center items-center gap-4  mt-24 p-6 lg:p-0" >
  
<div><img src="/dinner.png" alt="" /></div>


<div className="mt-12 lg:mt-0 md:mt-4" >
  <img src="/letus1.png"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" alt="" />
<img src="/letus2.png" className="p-2 transform hover:scale-110 transition duration-500 ease-in-out"  alt="" />
<img src="/letus3.png"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" alt="" />
<img src="/letus4.png"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" alt="" />
</div>
<div className="mt-12 lg:mt-0 md:mt-4" >
  <img src="/letus6.png"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" alt="" />
  <img src="/letus7.png"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" alt="" />
  <img src="/letus8.png"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" alt="" />
  <img src="/letus9.png"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" alt="" />
</div>


</div>
</div>



</div>


<div className=" flex justify-center items-center w-full lg:w-[1920px] mt-24 " >
  <div className="w-full lg:w-[1764px] h-auto lg:h-[657px]" >
<div className="flex justify-center items-center" ><img src="/Chefs-head.png" alt="Chefs-head" /></div>

<div className="flex justify-center items-center" > 
<h1 className=" text-[32px] sm:text-[40px] lg:text-[56px] font-sans font-bold text-[#ff9f0d]  mt-4" >
  Me<span className="text-white" >et Our Chef</span></h1>
  </div>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center gap-4 p-6 lg-p-0  mt-6 lg:mt-12" >
  <img src="/cheff1.png" alt="pic"className="p-2 md:p-0 transform hover:scale-110 transition duration-500 ease-in-out " />
  <img src="/cheff2.png" alt="pic"className="p-2 md:p-0 transform hover:scale-110 transition duration-500 ease-in-out" />
  <img src="/cheff3.png" alt="pic"className="p-2 md:p-0 transform hover:scale-110 transition duration-500 ease-in-out" />
  <img src="/cheff4.png" alt="pic"className="p-2 md:p-0 transform hover:scale-110 transition duration-500 ease-in-out" />
</div>
<div className=" hidden lg:block lg:rotate-12 lg:mb-24  opacity-3" ><img src="/bgflw.png" alt="" /></div>
  </div>
  
</div>
<div className="flex justify-center items-center" ><button className="text-white w-[155px] h-[50] rounded-3xl border-2 border-[#ff9f0d] " >
  See More</button></div>


<div className="mt-12 p-6 " ><img src="/test-head.png" alt="test-head" /></div>
<div><h1 className=" p-6 w-auto mt-2 text-[30px] md:text-[40px] 
lg:text-[60px] font-sans font-bold leading-tight text-white" >What our client are saying</h1>
</div>


<div className=" w-full lg:w-[1920px] flex justify-center items-center " >  
<div className=" w-full h-auto lg:w-[869px] lg:h-[451px]  bg-white mt-12 p-6 lg:p-0" >

<div className="rotate-90 w-[250px] ml-20  lg:ml-72  mb-12 mt-6 lg:mt-0 " >
  <img src="/profile.png" alt="" className=" w-[80px] lg:w-[120px] -rotate-90" /></div>
  <p className="text-sm lg:text-lg p-4  " >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi\
  , et ac dapibus sit eu velit in consequat.</p>
  <img src="/star.png"  alt=""className=" w-[80px] lg:w-[150px] ml-40 lg:ml-96 items-center  mt-2" />
  <h1 className="text-[24px] font-bold font-sans text-black ml-28 lg:ml-96 lg:mt-4" >Alamin Hasan</h1>
</div>


</div>









<div className=" w-full h-auto lg:w-[1920px] lg:h-[558px] mt-20  p-6 lg-p-4 ">
  <img src="/main.png" alt="" className=" w-full h-auto lg:w-[1918px] lg:h-[558px]" />
</div>
<div className=" w-full lg:w-[1920px] flex justify-center items-center mt-24">


  <div className=" w-full h-auto  lg:w-[1320px] lg:h-[732px] " >

<div className="flex justify-center items-center" ><img src="/blog.png" alt="" /></div>
<h1 className=" text-[#ff9f0d] text-center text-[30px] mt-12 md:text-[40px] lg:text-[60px] font-sans font-bold leading-tight" >
  Le<span className="text-white" >test News & Blog</span></h1>

<div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:flex gap-4 lg:mt-10 mt-5 p-6 lg:p-0 " >
  <img src="/Blog1.png" alt="blog" className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" />+
<img src="/Blog2.png" alt="blog"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" />
<img src="/Blog3.png" alt="blog"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out " /></div>

  </div>



</div>
  
<Footer/>

</section>
  </>
  
  );
}
