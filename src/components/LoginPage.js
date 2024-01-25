/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";

const LoginPage = () => {
  return (
    <div className="w-full flex md:flex-row flex-col">
      <div className="md:w-1/2 bg-blue-600 flex md:justify-center  md:items-center">
        <div className="md:gap-0 md:h-screen h-20 flex flex-row md:flex-col md:justify-center md:items-center items-end">
          <div className="md:z-0 z-20 md:absolute md:top-10 md:left-10 p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[81px] md:h-[81px] w-[30px] h-[30px]"
              viewBox="0 0 81 81"
              fill="none"
            >
              <circle cx="40.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[87px] md:h-[81px] w-[35px] h-[30px]"
                viewBox="0 0 80 30"
                fill="none"
              >
                <path
                  d="M2.02979 11.0531L32.0871 25.7478L58.8048 3.70578L84.8545 17.0646"
                  stroke="#605BFF"
                  stroke-width="6"
                />
              </svg>
            </svg>
          </div>
          <div>
            <h1 className="md:absolute text-[#FFF] md:text-[72px] text-3xl py-4">
              BASE
            </h1>
          </div>
        </div>

        <div className="absolute flex justify-center items-center md:text-white text-gray-600 justify-evenly gap-[40px] pt-6 max-w-[200px] w-full hover:scale-110 hover:shadow-gray-300 duration-100 ease-in md:bottom-[10%] md:bottom-[6%] bottom-[-8%] left-[25%] md:left-auto">
          <a
            href="https://github.com/ShantinathK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-[44px] h-[44px] cursor-pointer hover:scale-[1.1] hover:text-slate-200 hover:shadow-gray-300 duration-100 ease-in" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle className="w-[44px] h-[44px] cursor-pointer hover:scale-[1.1] hover:text-slate-200 hover:shadow-gray-300 duration-100 ease-in" />
          </a>
          <a
            href="https://www.linkedin.com/in/shantinath-k-47a8a71b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-[44px] h-[44px] cursor-pointer hover:scale-[1.1] hover:text-slate-200 hover:shadow-gray-300 duration-100 ease-in" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <IoLogoDiscord className="w-[44px] h-[44px] cursor-pointer hover:scale-[1.1] hover:text-slate-200 hover:shadow-gray-300 duration-100 ease-in" />
          </a>
        </div>
      </div>

      {/* Sign In */}
      <div className="md:w-1/2 h-[100vh] bg-slate-100 flex justify-center md:items-center items-start ">
        <div className="flex md:w-[50vh] w-full  flex-col justify-centeritems-center md:py-12 lg:px-8 mx-5 md:mx-1">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <h1 className="md:mt-10 mt-2 text-start md:text-[36px] text-[30px] font-bold leading-20 tracking-tight text-gray-900">
                Sign In
              </h1>
              <h1 className="md:text-[16px] text-[12px]">Sign in to your account</h1>
            </div>
            <div className="flex lg:flex-row flex-col gap-2">
              <div className="md:mt-4 mt-2 flex items-center justify-center md:gap-2 gap-1 p-2 shadow rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1163_66)">
                    <path
                      d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H7.87695V9.39229H12.1957C12.1087 10.0985 11.6385 11.1621 10.5936 11.8768L10.579 11.972L12.9053 13.7331L13.0665 13.7488C14.5467 12.4129 15.4001 10.4474 15.4001 8.116Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M7.87696 15.6037C9.9928 15.6037 11.7691 14.923 13.0665 13.7488L10.5936 11.8768C9.93187 12.3278 9.04371 12.6426 7.87696 12.6426C5.80464 12.6426 4.04578 11.3068 3.4188 9.4604L3.32689 9.46803L0.907916 11.2974L0.876282 11.3834C2.16495 13.8849 4.81197 15.6037 7.87696 15.6037Z"
                      fill="#34A853"
                    />
                    <path
                      d="M3.41874 9.4604C3.2533 8.98391 3.15756 8.47335 3.15756 7.94583C3.15756 7.41825 3.2533 6.90775 3.41003 6.43126L3.40565 6.32978L0.95636 4.47101L0.876224 4.50826C0.345103 5.54634 0.0403442 6.71206 0.0403442 7.94583C0.0403442 9.1796 0.345103 10.3453 0.876224 11.3833L3.41874 9.4604Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M7.87696 3.24898C9.34847 3.24898 10.3411 3.87011 10.9071 4.38918L13.1187 2.279C11.7604 1.04523 9.9928 0.287949 7.87696 0.287949C4.81197 0.287949 2.16495 2.0067 0.876282 4.50826L3.41009 6.43127C4.04578 4.58487 5.80464 3.24898 7.87696 3.24898Z"
                      fill="#EB4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1163_66">
                      <rect
                        width="15.3686"
                        height="15.3686"
                        fill="white"
                        transform="translate(0.0396118 0.287949)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h1>Sign in with Google</h1>
              </div>
              <div className="md:mt-4 mt-2 flex items-center justify-center md:gap-2 gap-1 p-2 shadow rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1163_74)">
                    <path
                      d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z"
                      fill="#999999"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1163_74">
                      <rect
                        width="12.6242"
                        height="15.3686"
                        fill="white"
                        transform="translate(0.568054 0.190186)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h1>Sign in with Apple</h1>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-5">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="user"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="user"
                    name="user"
                    type="text"
                    autoComplete="user"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-md font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex md:flex-row flex-col justify-center items-center gap-2">
            <p className="mt-1 md:mt-10 md:leading-6 leading-4 text-center text-sm text-gray-500">
              Don't have an account?
            </p>
            <p className="md:mt-10 font-semibold text-sm md:leading-6 leading-4 text-center text-indigo-600 hover:text-indigo-500">
              Register here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
