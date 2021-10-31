import React from 'react';
import useAuth from '../../hooks/useAuth';
import './AccountDetails.css'

const AccountDetails = () => {
  const {user,logOut} = useAuth(); 
  return (
    <main className="profile-page">
  <section className="relative block h-500-px w-12/12 overflow-hidden">
    <div className="absolute top-0 w-full h-full bg-center bg-cover account-details">
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px trs">
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src={user?.photoURL?user.photoURL:'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png'} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <button onClick={logOut} className="bg-red-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Log Out
                </button>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4">
                <div className="mr-4 p-3 text-center">
                  <span className="text-lg text-blueGray-400">Last Sign in at {user?.metadata.lastSignInTime}</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {user?.displayName}
            </h3>
            <div className="text-lg leading-normal mt-0 mb-2 text-blueGray-400">
              
              {user?.email}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              {user?.phoneNumber}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  A user is someone who employs or uses a particular thing, like a user of nicotine or a user of an internet site. ... To use something is to employ it or operate it, so a user is someone who uses or takes advantage of something. If you have a computer and use it for anything, you're a computer user.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
  );
};

export default AccountDetails;