import { createContext, useState } from "react";

const Data_box = createContext({});

const Data_provider = ({children}) =>
{

  const [ auth , set_auth ] = useState({});

  return(
    <Data_box.Provider
      value={{
        auth,
        set_auth
      }}
    >
      {children}
    </Data_box.Provider>
  )  
};

export { Data_box , Data_provider }