import Footer from "../components/footer"
export default function About() {
  return (
    <section className="bg-white">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[410px] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans"> About Us</h1>
          <ul className="text-white flex justify-center space-x-2 mt-2    ">
            <li>
              <a href="/hero" className="p-2 hover:text-[#ff9f0d] ">
                {" "}
                home &gt;{" "}
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-[#ff9f0d] p-2">
                {" "}
                About
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row justify-center items-center mt-12 lg:mt-24 px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-1/2 mb-8 lg:mb-0">
          <div>
            <img src="/ab1.png" alt="food1" className="w-full" />
          </div>
          <div className="space-y-4">
            <div>
              <img src="/ab2.png" alt="food2" className="w-full" />
            </div>
            <div>
              <img src="/ab3.png" alt="food3" className="w-full" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12 px-4 lg:px-0">
          <h2 className="text-[#FF9F0D] text-lg mb-2">About Us.......</h2>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Food is an important part of a balanced Diet</h1>
          <p className="mb-6 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae
            mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <div className="flex flex-wrap items-center">
            <button className="bg-[#FF9F0D] text-white px-6 py-3 mr-4 mb-4 lg:mb-0">Show More</button>
            <button className="flex items-center text-xl">
              <i className="fa fa-play-circle text-[#FF9F0D] mr-2"></i>
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-12 px-4 lg:px-0">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us</h1>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12 px-4 lg:px-0">
        <img src="/a-about.png" alt="food" className="w-full max-w-5xl" />
      </div>

      <div className="flex justify-center items-center mt-12 px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          {/* Repeat this structure for each item */}
          <div className="flex flex-col items-center text-center">
            <img src="/a-student.png" alt="about" className="mb-4" />
            <h2 className="text-xl font-bold mb-2">Best Chef</h2>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
              volutpat
            </p>
          </div>
          {/* ... other items ... */}
          <div className="flex flex-col items-center text-center">
            <img src="/a-coffy.png" alt="about" className="mb-4" />
            <h2 className="text-xl font-bold mb-2">120 Item food</h2>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
              volutpat
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/a-person.png" alt="about" className="mb-4" />
            <h2 className="text-xl font-bold mb-2">Clean Environment</h2>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
              volutpat
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-12 lg:py-24">
        <div className="bg-[#FF9F0DD9] py-12 lg:py-24">
          <div className="max-w-xl mx-auto text-center px-4 lg:px-0">
            <h1 className="text-3xl lg:text-4xl text-white font-bold mb-4">Team Member</h1>
            <p className="text-white mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 lg:px-0 -mt-8 lg:-mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Repeat this structure for each team member */}
            <div className="bg-white p-4 text-center shadow-lg">
              <img src="/a-owner.png" alt="chef" className="mx-auto mb-4" />
              <h2 className="text-xl font-bold">Mark Henry</h2>
              <p className="text-gray-500">Owner</p>
            </div>
            <div className="bg-white p-4 text-center shadow-lg">
              <img src="/a-owner.png" alt="chef" className="mx-auto mb-4" />
              <h2 className="text-xl font-bold">lucky Helan</h2>
              <p className="text-gray-500">Chef</p>
            </div>
            <div className="bg-white p-4 text-center shadow-lg">
              <img src="/a-owner.png" alt="chef" className="mx-auto mb-4" />
              <h2 className="text-xl font-bold">Moon Henry</h2>
              <p className="text-gray-500">Founder</p>
            </div>
            <div className="bg-white p-4 text-center shadow-lg">
              <img src="/a-owner.png" alt="chef" className="mx-auto mb-4" />
              <h2 className="text-xl font-bold">Tom Monrow</h2>
              <p className="text-gray-500">Specialist</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-0">
          <img src="/test-head.png" alt="test-head" className="mx-auto mb-8" />
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-12">What our clients are saying</h1>

          <div className="bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center mb-8">
              <img src="/profile.png" alt="" className="w-24 h-24 rounded-full mb-4" />
              <p className="text-center text-sm lg:text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
                mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
              <img src="/star.png" alt="" className="w-32 mb-2" />
              <h2 className="text-xl font-bold">Alamin Hasan</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Our Food Menu</h1>
            <p className="max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12">
            <button className="px-4 py-2 m-2 bg-[#FF9F0D] text-white rounded">Breakfast</button>
            <button className="px-4 py-2 m-2 bg-gray-200 rounded">Lunch</button>
            <button className="px-4 py-2 m-2 bg-gray-200 rounded">Dinner</button>
            <button className="px-4 py-2 m-2 bg-gray-200 rounded">Dessert</button>
            <button className="px-4 py-2 m-2 bg-gray-200 rounded">Drink</button>
            <button className="px-4 py-2 m-2 bg-gray-200 rounded">Snack</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Repeat this structure for each menu item */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h2>
                <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm text-gray-600">560 cal</p>
              </div>
              <span className="text-xl font-bold text-[#ff9f0d]">$32</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h2>
                <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm text-gray-600">560 cal</p>
              </div>
              <span className="text-xl font-bold text-[#ff9f0d]">$32</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h2>
                <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm text-gray-600">560 cal</p>
              </div>
              <span className="text-xl font-bold text-[#ff9f0d]">$32</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2 hover:text-[#ff9f0d]">Alder Grilled Chinook Salmon</h2>
                <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm text-gray-600">560 cal</p>
              </div>
              <span className="text-xl font-bold text-[#ff9f0d]">$32</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}

