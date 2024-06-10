import HeaderL from '../Home/HeaderL'

const AboutUs = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-20 mb-40">
      <div className="w-1/2 pl-8 pr-8">
          <h2 className="text-8xl font-bold mb-4 text-blue-900">About Us</h2>
          <p className="text-4xl leading-7 mb-4">
          Where Imagination Meets Execution.
          </p>  
          <p className='text-gray-500 mt-5'>
          Optical Arc helps users all over the world to improve their business by using better software. We were founded in 2020 and since then we have been delivering the best apps for you.
          </p> 
        </div>
        <div className="w-1/2">
          <img src='src/Images/team.png' alt="About Us" className="w-full h-auto" />
        </div>
        
      </div>
    <HeaderL />

      <div className="flex items-center justify-center mt-20 mb-40">
        <div className="w-1/2">
          <img src='src/Images/abtus.png' alt="About Us" className="w-full h-auto" />
        </div>
        <div className="w-1/2 pl-8 pr-8">
          <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="text-lg leading-7 mb-4">
          Optical Arc is a team of trusted mobile app experts passionate about converting simple ideas to amazing mobile apps. Since our inception in 2009, we always aim to be part of successful entrepreneurial journeys by helping innovative people and businesses attain their dreams and vision in appifying their business.
          We have handled 350+ projects across the globe including Fortune 500 Companies. These projects include technologies based on iOS, Android, Firebase, React native, Corona, Xamarin and domains such as React ,Node.js, DBMS, JAVA etc….          </p>  
        </div>
      </div>
      
      <div className="flex justify-center mt-20 mb-40">
      <div className="w-1/2 pl-8 pr-8">
        <h2 className="text-3xl font-bold mb-7">Things that make our work beautiful</h2>
          <div className="text-lg leading-7">
          <div className="flex gap-5 flex-row mb-2">
            <img src="src/Images/bulb.jpg"  class=" w-10"/>
            <p>Create ideas for unique concepts</p>
          </div>
          <div className="flex gap-5 flex-row mb-2">
            <img src="src/Images/file.png"  class=" w-10"/>
            <p>Solve complex issues</p>
            </div>
          <div className="flex gap-5 flex-row mb-2">
            <img src="src/Images/people.jpg"  class=" w-10"/>
            <p>Collaborate with experts and professionals</p>
            </div>
          <div className="flex gap-5 flex-row mb-2">
            <img src="src/Images/time.png"  class=" w-10"/>
            <p>Fast iterating</p>
            </div>
          <div className="flex gap-5 flex-row mb-2">
            <img src="src/Images/benifits.png"  class=" w-10"/>
            <p>Deliver result-driven products</p>
          </div>
         
        </div>
        </div>
        <div className="w-1/2 pl-8 pr-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-7 mb-4">
          "At Optical Arc, we're on a mission to redefine possibilities in software solutions. We design, develop, and deliver exceptional products that exceed expectations, 
          focusing on reliability, scalability, and user-centricity. Committed to your success, we also offer remote staffing and leverage AI to empower your digital transformation. 
          Choose Optical Arc for innovation that goes beyond boundaries."        </p> 
        </div>
      </div>

      <div class = "bg-gray-100">
    <div class="max-w-6xl mx-auto py-12">
        <h1 class="text-5xl font-bold text-center mb-12">Our Team</h1>
        <div class="text-center mb-12">
            <img src="src/Images/opticalarc.jpg"  class="w-40 h-40 rounded-full mx-auto mb-4"/>
            <h2 class="text-xl font-semibold">Keshav Pathade</h2>
            <p class="text-gray-600">Director</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
                <img src="src/Images/1.jpg"  class="w-40 h-40 rounded-full mx-auto mb-4"/>
                <h3 class="text-lg font-semibold">ABC</h3>
                <p class="text-gray-600">Head of Business Development</p>
            </div>
            <div class="text-center">
                <img src="src/Images/2.jpg" class="w-40 h-40 rounded-full mx-auto mb-4"/>
                <h3 class="text-lg font-semibold">ABC</h3>
                <p class="text-gray-600">Account Manager</p>
            </div>
            <div class="text-center">
                <img src="src/Images/3.jpg"  class="w-40 h-40 rounded-full mx-auto mb-4"/>
                <h3 class="text-lg font-semibold">ABC</h3>
                <p class="text-gray-600">HR Manager</p>
            </div>
            <div class="text-center">
                <img src="src/Images/4.jpg" class="w-40 h-40 rounded-full mx-auto mb-4"/>
                <h3 class="text-lg font-semibold">ABC</h3>
                <p class="text-gray-600">Project Manager</p>
            </div>
        </div>
    </div>

   </div>   
    </div>
  )
}

export default AboutUs;    

