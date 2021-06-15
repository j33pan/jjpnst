import React from "react";
import { Auth } from "aws-amplify";
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currUser, setCurruser] = React.useState(null);

  const getCurrUser = async () => {
    try {
      const response = await Auth.currentAuthenticatedUser();
      setCurruser(response);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setCurruser(null);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getCurrUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
