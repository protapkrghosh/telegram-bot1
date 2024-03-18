import { useEffect, useRef } from "react";
import videoBg from "@/assets/videos/Gold.mp4"
import Container from "../Container/Container";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import img from '@/assets/ideas/imageremovebg.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Appreciate = () => {
  const vidRef = useRef();

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = false;
    }
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div className="overflow-hidden w-full max-h-[70vh] md:max-h-[90dvh] flex justify-center items-center relative">
        {/* video */}
        <div className="w-full h-[80vh] md:h-dvh">
          <video
            className="w-full h-full object-fill md:object-cover"
            muted
            autoPlay
            loop
            src={videoBg}
          ></video>
        </div>

        <div className="absolute w-full h-full bg-[#151414] bg-opacity-40">
          <Container>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 mt-10 2xl:mt-16">
              <div className="">
                <h1 className="text-[#EAE8E1] text-[40px] lg:text-[45px] 2xl:text-[47px] font-manrope font-semibold leading-[55px]">We would greatly <br /> appreciate hearing <br /> your ideas.</h1>
                
                <p className="text-[#EAE8E1] text-[18px] font-inter mt-4 mb-8">We eagerly await your valuable insight</p>

                {/* Custom Button */}
                <div className="flex items-center">
                  <a href="#" className="border border-[#3e3f3d] bg-[#383937a2] hover:bg-[#434642] p-[12px] 2xl:p-4 rounded-full mr-3 group duration-300">
                    <FaTelegramPlane className="text-[25px] text-[#FFFFFF] group-hover:scale-110 duration-300" />
                  </a>

                  <a href="#" className="border border-[#3e3f3d] bg-[#383937a2] hover:bg-[#434642] p-[13px] 2xl:p-4 rounded-full group duration-300">
                    <FaXTwitter className="text-[22px] text-[#FFFFFF] group-hover:scale-110 duration-300" />
                  </a>
                </div>
              </div>

              {/* Image */}
              <img src={img} alt="Image" className="scale-110 md:scale-100 w-[200px] lg:w-[250px] xl:w-[295px] 2xl:w-[300px]" />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Appreciate;
