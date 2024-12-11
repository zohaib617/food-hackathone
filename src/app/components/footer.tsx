export default function Footer(){


    return(

            <>

        <section className=" flex justify-center w-full h-auto bg-[#151514]  lg:w-[1920px] lg:h-[700px] mt-16 lg:mt-24" >

            
            <div><div className="flex justify-between w-full h-auto lg:w-[1170px] lg:h-[142px] mt-16 lg:mt-16  " >
                <div className=" w-full lg:w-[458px] p-8 lg:p-0 " >
                    <h1 className=" text-[24px]   lg:text-[32px] font-bold font-sans text-[#ff9f0d]" >St<span className="text-white" >ill You Need Our Support ?</span></h1>
                    <p className="text-white " >Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 lg:flex  w-full h-auto lg:w-[459px] lg:h-[59px]  ">
                    <input type="text" placeholder="Enter Your Email" className="text-white w-[459px] h-[59px] bg-[#ff9f0d]" />
                        <button className="   w-full h-auto lg:w-[163px] lg:h-[59px] transform hover:scale-110 transition duration-500 ease-in-out bg-white" >Subcribe Now</button>
                    </div>
                    

            </div>
            
            <div className=" w-full lg:w-[1170px] border-2 border-[#ff9f0d] " ></div>
            
            
            <div className=" grid grid-cols-1 md:grid-cols-2  gap-4 p-8  lg:flex justify-between  mt-12" >
                <div >
                    <h1 className="text-[24px] text-white font-sans font-bold" >About Us.</h1>
                    <div className="text-white w-[312px] h-[95px] text-[14px] font-sans mt-8 " ><p>orporate clients and leisure travelers has
                        been relying on Groundlink for dependab
                        safe, and professional chauffeured car
                        service in major cities across World.</p></div>
                    <div className="flex mt-10 ">
                        <img src="/Watch.png" alt="" className="w-[78px] h-[72px]" />
                    <p className="text-white w-[149px] h-[74px] text-[14px] ml-2  ">Opening Houres Mon - Sat(8.00 - 6.00) Sunday - Closed</p>
                    </div>
                </div>
            
            
            <div className="w-[143px]" >
            
            <ul className="text-white font-sans text-[20px]">
            <li className=" text-[24px] text-white font-sans font-bold" ><a href="">Useful Links</a></li>
                <li className="mt-5" ><a href="">About</a></li>

                <li className="mt-5" ><a href="">News</a></li>
                <li className="mt-5" ><a href="">Partners</a></li>
                <li className="mt-5" ><a href="">Team</a></li>
                <li className="mt-5" ><a href="">Menu</a></li>
                <li className="mt-5" ><a href="">Contacts</a></li>
            </ul>
            </div>
            
            

            <div className="w-[169px]" >
            
            
            <ul className=" text-white font-sans text-[20px]">
            <li className=" text-[24px] text-white font-sans font-bold" ><a href="">Help?</a></li>
                <li className="mt-5" ><a href="">Faq</a></li>
                <li className="mt-5" ><a href="">Trem & Conditions</a></li>
                <li className="mt-5" ><a href="">Reporting</a></li>
                <li className="mt-5" ><a href="">Documentation</a></li>
                <li className="mt-5" ><a href="">Suport & Policy</a></li>
                <li className="mt-5" ><a href="">Privcy</a></li>
            </ul>
            </div>


            <div className="w-[273px]" >
                <h1 className="text-[24px] text-white font-sans font-bold" >Recent Post</h1>
                <div>
                    <img src="/comp1.png" alt="compo" className="mt-5 p-2 transform hover:scale-110 transition duration-500 ease-in-out"  />
                    <img src="/comp2.png" alt="compo"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" />
                    <img src="/comp3.png" alt="compo"className="p-2 transform hover:scale-110 transition duration-500 ease-in-out" />
                </div>
            </div>
            
            
            </div>
            
            
        
            </div>
        </section>
                
                <div className=" flex justify-center items-center w-full h-auto lg:w-[1920px] lg:h-[99px]  bg-[#4F4F4F]"  >
                    <div className=" grid grid-cols-1 text-center p-6 lg:p-4 lg:flex justify-between items-center w-full h-auto lg:w-[1318px] lg:h-[33px]" >
                        <p className="text-white text-[12px] lg:text-[16px] ">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                    
                    <div><img src="/social.png" alt="" className=" ml-12 lg:m-l0 p-4 lg:p-0" /></div>
                    </div>
                </div>
                </>
    )
}