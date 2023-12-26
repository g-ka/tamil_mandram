import { createContext, useState } from "react";

const Data_box = createContext({});

const Data_provider = ({children}) =>
{

  const [ auth , set_auth ] = useState({});
  const [ is_open, set_is_open ] = useState(false);

  return(
    <Data_box.Provider
      value={{
        auth, set_auth,
        is_open, set_is_open
      }}
    >
      {children}
    </Data_box.Provider>
  )  
};

export { Data_box , Data_provider }