import React, { useState, useEffect, useRef } from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import opticalarc from '../Images/opticalarc.jpg';

const NavList = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">Home</a>
        </Typography>
      </Link>
      <Link to="/Aboutus">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">About us</a>
        </Typography>
      </Link>
      <div
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        ref={dropdownRef}
      >
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-serif text-xl cursor-pointer"
        >
          <a className="flex items-center hover:text-blue-500 transition-colors">
            Services
          </a>
        </Typography>
        {isServicesOpen && (
          <div className="absolute left-0 mt-2 w-[40rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div className="py-1 grid grid-cols-3 gap-4 p-4">
              <div>
                <Typography variant="h6" className="font-bold mb-2 text-black">Industries</Typography>
                <Link to="/Automotive">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Automotive Industry</Typography>
                </Link>
                <Link to="/Automotive">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Ecommerce App Development</Typography>
                </Link>
                <Link to="/Automotive">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Banking and Finance App Development</Typography>
                </Link>
                <Link to="/MVPAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">MVP App Development</Typography>
                </Link>
                <Typography variant="h6" className="font-bold mb-2 text-black">Education</Typography>
                <Link to="/EducationAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Education App Development</Typography>
                </Link>
                <Link to="/LearningManagementSystem">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Learning Management System</Typography>
                </Link>
              </div>
              <div>
                <Typography variant="h6" className="font-bold mb-2 text-black">Solutions</Typography>
                <Link to="/EnterpriseMobileAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Enterprise Mobile App Development</Typography>
                </Link>
                <Link to="/TrackingAndDelivery">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Tracking and Delivery</Typography>
                </Link>
                <Link to="/MarketplaceAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Marketplace App Development</Typography>
                </Link>
                <Link to="/IoTAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">IoT App Development</Typography>
                </Link>
                <Link to="/OnDemandServicesAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">On Demand Services App Development</Typography>
                </Link>
                <Link to="/DonationAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Donation App Development</Typography>
                </Link>
                <Link to="/RedbytesChatbot">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Redbytes Chatbot</Typography>
                </Link>
              </div>
              <div>
                <Typography variant="h6" className="font-bold mb-2 text-black">Technology</Typography>
                <Link to="/iOSAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">iOS App Development</Typography>
                </Link>
                <Link to="/FirebaseDevelopmentServices">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Firebase Development Services</Typography>
                </Link>
                <Link to="/ReactNativeAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">React Native App Development</Typography>
                </Link>
                <Link to="/XamarinAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Xamarin App Development</Typography>
                </Link>
                <Link to="/AndroidAppDevelopment">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Android App Development</Typography>
                </Link>
                <Link to="/Outsystems">
                  <Typography as="a" className="block px-4 py-2 text-sm text-black hover:text-blue-500">Outsystems</Typography>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link to="/Portfolio">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">Portfolio</a>
        </Typography>
      </Link>
      <Link to="/Careers">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">Careers</a>
        </Typography>
      </Link>
      <Link to="/Contactus">
        <Typography as="li" variant="small" color="black" className="p-1 font-serif text-xl">
          <a className="flex items-center hover:text-blue-500 transition-colors">Contact us</a>
        </Typography>
      </Link>
    </ul>
  );
};

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto bg-blue-300 rounded-none">
      <div className="flex items-center justify-between">
        <div className="size-[6rem]">
          <img src={opticalarc} alt="Opticalarc Logo" />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {openNav && (
        <div className="lg:hidden">
          <NavList />
        </div>
      )}
    </Navbar>
  );
}

export default NavbarSimple;
