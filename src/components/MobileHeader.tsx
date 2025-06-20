export default function MobileHeader({
  feature,
  handleGptClick,
  setShowMenu,
  showMenu,
  signOutUser,
  user,
}: any) {
  return (
    <div className="flex absolute w-full p-2 bg-gradient-to-b from-10%  from-black z-20 justify-between align-middle  ">
      <div>
        {user.accesstoken && (
          <button
            className="cursor-pointer py-2 px-4 rounded-lg bg-gradient-to-bl from-blue-900 to-red-500 text-white hover:scale-105 duration-300 text-xs  shadow-md shadow-red-500/50 "
            onClick={() => handleGptClick()}
          >
            {feature.gptSearch ? "Homepage" : "AI Search"}
          </button>
        )}
      </div>
      <div className="">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
          className="md:w-36 sm:w-28 w-28 "
        />
      </div>
      <div
        className="relative flex items-center"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        {user.accesstoken && (
          <>
            {/* Avatar */}
            <img
              src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTfUlmnFRKf_OEUhru2aqso39FKxONTd5Dt_sWnNj5wAg4bbMBZ8sgZupTfnB9IQ8tmWcrzRiyZsCp1bLKb_n7VrnTw3_Ovw7Q.png?r=bd7"
              alt="User"
              className="w-7 h-7 cursor-pointer duration-300 hover:scale-105"
            />

            {/* Dropdown */}
            {showMenu && (
              <div className="absolute top-[2%] right-0 bg-gray-800 text-white rounded-md opacity-90 z-50 w-36 ">
                <button
                  onClick={signOutUser}
                  // onMouseEnter={() => setShowMenu(true)}
                  // onMouseLeave={() => setShowMenu(false)}
                  className="hover:cursor-pointer block w-full text-left px-4 py-2 hover:bg-gray-800"
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
