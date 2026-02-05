import React from "react";
import call from "../img/phone.svg";
import message from "../img/Featured icon.svg";
import linkdln from "../img/linkedin 1.svg";
import { linkedlnlink } from "../constants";
const ReachOut = () => {
  return (
    <div className="flex flex-wrap justify-between max-[480px]:gap-[1.5rem]  mx-[1.25rem] md:mx-[5.5rem] mt-[2.5rem] md:mt-[5rem] " id="Contact">
      <section className="  max-[480px]:w-full max-[480px]:mx-[1.25rem] w-fit px-[1.25rem] py-[1.5rem] bg-[#F9FAFB]">
        <img className="pb-[3.94rem] " src={message} alt="message" />
        <h1 className="text-[#101828] text-base md:text-[1.25rem] font-medium leading-[1.875rem] fonr-DMSans">
          Send a mail to me
        </h1>
        <p className="pb-[1.25rem] text-[#475467]  font-DMSans text-[0.875rem] md:text-base leading-[normal] md:leading-[1.5rem] font-normal ">
          Got a project you want us to work on? <br /> <br />
          Hit me up !
        </p>
        <a
          className="no-underline font-semibold hover:text-[#7839EE] text-[#EF5DA8] text-[0.875rem] md:text-base leading-[1.5rem]"
          href="mailto:igedanielolumide@gmail.com"
        >
          igedanielolumide@gmail.com
        </a>
      </section>
      <section className=" max-[480px]:mx-[1.25rem]  max-[480px]:w-full w-fit px-[1.25rem] py-[1.5rem] bg-[#F9FAFB]">
      
        <img
          className="mb-[3.94rem] flex justify-center items-center w-[3rem] h-[3rem] p-[0.75rem] bg-[#00A991] rounded-[0.625rem]"
          src={call}
          alt="message"
        />
        <h1 className="text-[#101828] text-base md:text-[1.25rem] font-medium leading-[1.875rem] fonr-DMSans">
          Call me
        </h1>
        <p className="pb-[1.25rem] text-[#475467] font-DMSans text-[0.875rem] md:text-base leading-[normal] md:leading-[1.5rem] font-normal ">
          Got a project you want us to work on? <br /> <br />
          Hit me up !
        </p>
        <a
          className="no-underline text-[#00A991] font-semibold hover:text-[#7839EE]  text-[0.875rem] md:text-base leading-[1.5rem]"
          href="tel:+2348109206843"
        >
          +234 810 920 6843
        </a>
        <p>
        <a
          className="no-underline text-[#00A991] font-semibold hover:text-[#7839EE]  text-[0.875rem] md:text-base leading-[1.5rem]"
          href="tel:+14389362845"
        >
          +1 438 936 2845
        </a></p>
      </section>
      <section className=" max-[480px]:mx-[1.25rem]  max-[480px]:w-full w-fit  px-[1.25rem] py-[1.5rem] bg-[#F9FAFB]">
        <img className="pb-[3.94rem] " src={linkdln} alt="message" />
        <h1 className="text-[#101828] text-base md:text-[1.25rem] font-medium leading-[1.875rem] fonr-DMSans">
          Connect with me
        </h1>
        <p className="pb-[1.25rem] text-[#475467] font-DMSans text-[0.875rem] md:text-base leading-[normal] md:leading-[1.5rem] font-normal ">
          Got a project you want us to work on? <br /> <br />
          Hit me up !
        </p>
        <a
          className="no-underline text-[#0077B5] font-semibold hover:text-[#7839EE]  text-[0.875rem] md:text-base leading-[1.5rem]"
          href={linkedlnlink}
        >
My LinkedIn
        </a>
      </section>
    </div>
  );
};

export default ReachOut;
