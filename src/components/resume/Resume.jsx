import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Certifications
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[30%] translate-x-[-25%] border-2 border-gray-100 rounded-3xl py-1 px-10 font-semibold text-xl text-yellow-500">
              Cloud Computing
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-7 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                AWS Cloud Practioner
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Amazon Web Services
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2023 - June 2026
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                I am proud to have achieved the AWS Cloud Practitioner certification, which has provided me with a strong foundation in cloud computing. As a lifelong learner, I am dedicated to ongoing professional development and look forward to further developing my expertise in this field.
                </p>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[25%] translate-x-[-20%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
           Enterprise Programming
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.3rem] font-semibold sm:text-xl">
                Red Hat Certified Enterprise Application Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                 RedHat
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  August 2023 - August 2026
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                I am proud to have achieved the Red Hat Certified Enterprise Application Developer certification, which has provided me with a strong foundation in enterprise application development. As a lifelong learner, I am dedicated to ongoing professional development and look forward to further developing my expertise in this field.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      
      </div>
    </div>
  );
};

export default Resume;
