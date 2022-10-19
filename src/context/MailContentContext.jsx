import { createContext, useContext, useState } from "react";

const MailContentContext = createContext();

export const MailContentProvider = ({ children }) => {
  const [mailContent, setMailContent] = useState({
    name: "",
    email: "",
    message: "",
  });

  const values = {
    mailContent,
    setMailContent,
  };

  return (
    <MailContentContext.Provider value={values}>
      {children}
    </MailContentContext.Provider>
  );
};

export const useMailContent = () => useContext(MailContentContext);
