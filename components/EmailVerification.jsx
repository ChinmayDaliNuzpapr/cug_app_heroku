import React from "react";

const EmailVerification = (props) => {
  return (
    <div className="">
      <div id="center_a_box" className="absolute">
      <div className = "flex justify-center">
      <img src="/emailVerification.gif"/>
      </div>
    
        <main className="w-full flex justify-center">
          <div className="flex flex-col md:w-2/5 p-3 space-y-5 rounded-xl border border-black bg-white shadow-md">
            <section className="text-sm font-thin text-orange-400">
              {Date()}
            </section>
            <section className="text-3xl font-bold">
              We have sent an Email Verification link onto your email
            </section>
            <section className="font-normal text-md text-gray-700">
              We request you to confirm the <br />
              authentication link sent on your email
            </section>
            <section className="font-bold text-lg text-blue-900">
              Nuzpapr-Technolabs
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmailVerification;
