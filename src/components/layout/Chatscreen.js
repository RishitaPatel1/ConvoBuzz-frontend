function Chatscreen() {
  return (
    <>
      <div className=" w-1/3  flex flex-col border  h-[calc(100vh_-_115px)]">
        <div className="py-2 px-3 bg-[#BDCDD6]  flex flex-row justify-between items-center">
          <div className="flex-1">
            <span className=" text-[25px] text-black ">Chats</span>
          </div>

          <div className="flex ">
            <div>
              <button
                className="flex  p-2 top-2 rounded-xl text-black hover:bg-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
                <svg
                  className="inline  w-6 h-6 "
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.70312 16C2.3125 16 1.95312 15.9297 1.625 15.7891C1.29688 15.6432 1.01042 15.4453 0.765625 15.1953C0.526042 14.9453 0.338542 14.6536 0.203125 14.3203C0.0677083 13.9818 0 13.625 0 13.25V8V2.73438C0 2.34375 0.0703125 1.98177 0.210938 1.64844C0.351562 1.3099 0.544271 1.02083 0.789062 0.78125C1.03906 0.536458 1.33073 0.346354 1.66406 0.210938C2.0026 0.0703125 2.36719 0 2.75781 0H6.1875H7.80469C7.84635 0 7.88542 0 7.92188 0C7.95833 0 7.9974 0.00260417 8.03906 0.0078125C8.1901 0.0182292 8.3151 0.0833333 8.41406 0.203125C8.51823 0.317708 8.5651 0.450521 8.55469 0.601562C8.54427 0.747396 8.48438 0.869792 8.375 0.96875C8.27083 1.06771 8.14323 1.11719 7.99219 1.11719H7.90625H2.82031C2.59115 1.10677 2.36979 1.14323 2.15625 1.22656C1.94792 1.3099 1.76302 1.43229 1.60156 1.59375C1.44531 1.74479 1.32292 1.91927 1.23438 2.11719C1.15104 2.3151 1.10938 2.52344 1.10938 2.74219V13.2188C1.10938 13.4427 1.14844 13.651 1.22656 13.8438C1.30469 14.0365 1.41146 14.2083 1.54688 14.3594C1.6875 14.5052 1.85156 14.625 2.03906 14.7188C2.22656 14.8125 2.43229 14.8698 2.65625 14.8906H2.75H13.2422C13.4818 14.8906 13.7031 14.8438 13.9062 14.75C14.1094 14.6562 14.2839 14.5312 14.4297 14.375C14.5755 14.2188 14.6875 14.0391 14.7656 13.8359C14.849 13.6276 14.8906 13.4062 14.8906 13.1719V8.02344C14.8854 7.8724 14.9349 7.74219 15.0391 7.63281C15.1432 7.51823 15.2708 7.45833 15.4219 7.45312C15.5885 7.45312 15.7266 7.50781 15.8359 7.61719C15.9453 7.72135 16 7.85938 16 8.03125V11.0938V13.2891C16 13.6693 15.9297 14.026 15.7891 14.3594C15.6484 14.6875 15.4557 14.974 15.2109 15.2188C14.9661 15.4583 14.6797 15.6484 14.3516 15.7891C14.0234 15.9297 13.6719 16 13.2969 16H7.30469H2.70312ZM3.54688 12.1016C3.53125 11.9453 3.54167 11.7995 3.57812 11.6641C3.68229 11.112 3.80469 10.5651 3.94531 10.0234C4.09115 9.48177 4.25 8.94271 4.42188 8.40625C4.48958 8.22396 4.58333 8.07292 4.70312 7.95312C5.89583 6.75521 7.07812 5.5651 8.25 4.38281C9.42708 3.20052 10.612 2.01042 11.8047 0.8125C12.0391 0.572917 12.2969 0.390625 12.5781 0.265625C12.8646 0.140625 13.1745 0.0755208 13.5078 0.0703125C13.7891 0.0598958 14.0599 0.104167 14.3203 0.203125C14.5859 0.296875 14.8255 0.434896 15.0391 0.617188C15.2734 0.809896 15.4635 1.03906 15.6094 1.30469C15.7604 1.5651 15.8568 1.84635 15.8984 2.14844C15.9089 2.20573 15.9141 2.26042 15.9141 2.3125C15.9193 2.35938 15.9245 2.40365 15.9297 2.44531C15.9297 2.77865 15.8646 3.09635 15.7344 3.39844C15.6094 3.70052 15.4271 3.96875 15.1875 4.20312C14.1562 5.23958 13.1302 6.27083 12.1094 7.29688C11.0938 8.32292 10.0703 9.35417 9.03906 10.3906C8.86719 10.5677 8.69531 10.7422 8.52344 10.9141C8.35677 11.0859 8.1849 11.2552 8.00781 11.4219C7.9349 11.5 7.85417 11.5547 7.76562 11.5859C7.18229 11.7786 6.59635 11.9557 6.00781 12.1172C5.41927 12.2734 4.82292 12.4115 4.21875 12.5312C4.19271 12.5365 4.15365 12.5391 4.10156 12.5391C3.95052 12.5391 3.82292 12.4948 3.71875 12.4062C3.61979 12.3125 3.5625 12.2109 3.54688 12.1016ZM12.6328 1.55469C10.2526 3.9349 7.8776 6.32552 5.50781 8.72656C5.47135 8.75781 5.44792 8.79948 5.4375 8.85156C5.38021 9.0651 5.32552 9.27865 5.27344 9.49219C5.22135 9.70052 5.16667 9.91406 5.10938 10.1328C5.06771 10.3151 5.02344 10.4948 4.97656 10.6719C4.9349 10.849 4.89062 11.0286 4.84375 11.2109C4.85938 11.2109 4.8724 11.2109 4.88281 11.2109C4.89323 11.2057 4.90365 11.2031 4.91406 11.2031C5.29948 11.1042 5.68229 11.0078 6.0625 10.9141C6.44271 10.8151 6.82292 10.7161 7.20312 10.6172C7.26042 10.5964 7.30208 10.5729 7.32812 10.5469L14.4062 3.42188C14.5625 3.26562 14.6745 3.09375 14.7422 2.90625C14.8151 2.71875 14.8359 2.51562 14.8047 2.29688C14.7526 1.95312 14.6042 1.68229 14.3594 1.48438C14.1198 1.28125 13.8307 1.17969 13.4922 1.17969C13.1536 1.17969 12.8672 1.30469 12.6328 1.55469Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <div>
              <button
                className="flex  p-2 top-2 rounded-xl text-black hover:bg-gray-300 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
                <svg
                  className="inline  w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="6"
                    cy="12"
                    r="1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="18"
                    cy="12"
                    r="1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="py-2 px-2 bg-[#BDCDD6] ">
          <form>
            <div className="relative search-box chat-search-box ">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
                <button type="submit">
                  <svg
                    className="absolute  top-2.5 w-5 h-5 "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M20 20L17 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </span>

              <input
                type="text"
                className="w-full rounded-xl bg-[#EBEBEB] focus:outline-none pl-8 px-2 py-2 h-10 "
                placeholder="Search or start new chat"
              />
            </div>
          </form>
        </div>

        <div className="bg-[#F2EFEF]flex-1 overflow-auto ">
          <div className="px-3 flex items-center bg-[#F2EFEF] hover:bg-[#DFEBF2] ">
            <div>
              <img
                className=" w-10 h-10 rounded-full "
                src="./images/icons/avatar.svg"
              />
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">Manan Patel</p>
                <p className="text-xs text-grey-darkest">12:45 pm</p>
              </div>
            </div>

          </div>

          <div className="bg-[#F2EFEF] px-3 flex items-center hover:bg-[#DFEBF2] ">
            <div>
              <img className="h-10 w-10 rounded-full" src="./images/icons/avatar.svg"/>
            </div>

            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">
                  Masum Patel
                </p>
                <p className="text-xs text-grey-darkest">
                  12:45 pm
                </p>
              </div>
            </div>
          </div>


          <div className="bg-[#F2EFEF] hover:bg-[#DFEBF2] px-3 flex items-center  ">
            <div>
              <img className="h-10 w-10 rounded-full" src="./images/icons/avatar.svg"/>
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">
                  Rishita patel
                </p>
                <p className="text-xs text-grey-darkest">
                  12:45 pm
                </p>
              </div>
            </div>
          </div>


          <div className=" px-3 flex items-center bg-[#F2EFEF] hover:bg-[#DFEBF2]">
            <div>
              <img className="h-10 w-10 rounded-full" src="./images/icons/avatar.svg"/>
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">
                  Patel
                </p>
                <p className="text-xs text-grey-darkest">
                  12:45 pm
                </p>
              </div>
            </div>
          </div>

          <div className=" px-3 flex items-center bg-[#F2EFEF] hover:bg-[#DFEBF2]">
            <div>
              <img className="h-10 w-10 rounded-full" src="./images/icons/avatar.svg"/>
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">
                  Nikunj
                </p>
                <p className="text-xs text-grey-darkest">
                  12:45 pm
                </p>
              </div>
            </div>
          </div>

          <div className=" px-3 flex items-center bg-[#F2EFEF] hover:bg-[#DFEBF2]">
            <div>
              <img className="h-10 w-10 rounded-full" src="./images/icons/avatar.svg"/>
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">
                  Ram
                </p>
                <p className="text-xs text-grey-darkest">
                  12:45 pm
                </p>
              </div>
            </div>
          </div>

          <div className=" px-3 flex items-center bg-[#F2EFEF] hover:bg-[#DFEBF2] ">
            <div>
              <img className="h-10 w-10 rounded-full" src="./images/icons/avatar.svg"/>
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">
                  Ram
                </p>
                <p className="text-xs text-grey-darkest">
                  12:45 pm
                </p>
              </div>
            </div>
          </div>


          <div className=" px-3 flex items-center bg-[#F2EFEF] hover:bg-[#DFEBF2]">
            <div>
              <img className="h-10 w-10 rounded-full" src="./images/icons/avatar.svg"/>
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">
                  Ram
                </p>
                <p className="text-xs text-grey-darkest">
                  12:45 pm
                </p>
              </div>
            </div>
          </div>


          <div className=" px-3 flex items-center bg-[#F2EFEF] hover:bg-[#DFEBF2] ">
            <div>
              <img className="h-10 w-10 rounded-full" src="./images/icons/avatar.svg"/>
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">
                  Ram
                </p>
                <p className="text-xs text-grey-darkest">
                  12:45 pm
                </p>
              </div>
            </div>
          </div>

          <div className=" px-3 flex items-center bg-[#F2EFEF] hover:bg-[#DFEBF2]">
            <div>
              <img className="h-10 w-10 rounded-full" src="./images/icons/avatar.svg"/>
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">
                  Ram
                </p>
                <p className="text-xs text-grey-darkest">
                  12:45 pm
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Chatscreen;
