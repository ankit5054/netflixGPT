import React from "react";

const Header = () => {
  return (
    <div className="flex absolute w-full px-8 py-5 bg-gradient-to-b from-10%  from-black z-20 justify-between">
      <div>
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
          className="w-52  "
        />
      </div>
      <div>
        <img
          src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTfUlmnFRKf_OEUhru2aqso39FKxONTd5Dt_sWnNj5wAg4bbMBZ8sgZupTfnB9IQ8tmWcrzRiyZsCp1bLKb_n7VrnTw3_Ovw7Q.png?r=bd7"
          alt=""
          className="w-16"
        />
      </div>
    </div>
  );
};

export default Header;
