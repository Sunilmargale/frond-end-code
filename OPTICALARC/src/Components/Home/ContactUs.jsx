import {
    Card,
    CardBody,
    Typography,
    
  } from "@material-tailwind/react";
  import { Input } from "@material-tailwind/react";
  import {useRef} from "react"
  import emailjs from '@emailjs/browser';
  
  
  const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ynmx3oj', 'template_o3f0ufy', form.current, {
        publicKey: 'E-s2TiiRkbTEwB44F',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
<div className="mt-10">
  <div className="text-5xl text-center underline underline-offset-8 ">Get In Touch</div>
  <div className="flex items-center justify-center ml-20 mr-20 gap-10"> 
      <div class="bg-white rounded-lg max-w-xl mx-auto shadow-xl p-10 mt-40 ">
        <h2 class="text-2xl font-semibold mb-4">Contact Details</h2>
        <p class="text-gray-600 mb-4">We would love to speak with you. Fill out the form provided below or email us your request to <a href="mailto:info@opticalarc.com" class="text-blue-600">info@opticalarc.com</a></p>
        
        <div class="space-y-4">
            <div class="flex items-center">
                <img className="h-6 w-6 mr-2" src="src/Images/home.png" />      
                <span className="text-gray-700">314, 315, Gera’s Imperium Alpha, Eon Free Zone Rd, Rajaram Patil Nagar, Kharadi, Pune, Maharashtra 411014</span>
            </div>
            <div class="flex items-center">
                <img className="h-6 w-6  mr-2" src="src/Images/phone.jpg" />
                <span className="text-gray-700">Phone: 089996 13069</span>
            </div>
            <div class="flex items-center">
                <img className="h-6 w-6 mr-2 " src="src/Images/emaill.png" />
                <span className="text-gray-700">Email: <a href="mailto:info@opticalarc.com" class="text-blue-600">info@opticalarc.com</a></span>
            </div>
        </div>

        
      </div>
      <div className="flex justify-center mt-[8rem] mb-[8rem]">
        <Card className="w-full max-w-[50rem] p-5 shadow-xl">
          <CardBody className="mb-6 p-0">
            <Typography variant="h3" className="text-center flex justify-center items-center">
          <img src='src/Images/WhatsAppp.png' alt="whats" className="w-28" />   Still in doubt? We are here to help you out!
            </Typography>
            <form ref={form} onSubmit={sendEmail} >
            <div className=" flex justify-center flex-col gap-3 items-center mt-10 border-spacing-3">
              <div className="w-72">
                <Input label="Name" type="text" name="to_name"/>
              </div>
              <div className="w-72">
                <Input label="Number" type="number" name="message"  />
              </div>
              <div className="w-72 ">
                <Input label="email" type="email" name="from_name" />
              </div>
              <div className="bg-orange-500 w-52 rounded-xl m-5">
              <Input type="submit" value="Contactus" className="m-2  border-none"/>
              </div>
            </div>
            </form>
          
          </CardBody>
        </Card>
      </div>


    </div>
    <div className="app">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4708784999343!2d73.94672727501393!3d18.552798082547003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c34a95da0099%3A0x66edab93b328b0be!2sWorld%20Trade%20Center%2C%20Tower%201!5e0!3m2!1sen!2sin!4v1717405232723!5m2!1sen!2sin" 
        width="1500"
        height="450" 
        style={{ border : "0"}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        >
    </iframe>
    </div>
  </div>  
    );
  };
  
  export default ContactUs;