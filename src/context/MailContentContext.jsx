import { createContext, useContext, useState } from "react";

const MailContentContext = createContext();

export const MailContentProvider = ({ children }) => {
  const [mailContent, setMailContent] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);

  const values = {
    mailContent,
    setMailContent,
    isEmailSent,
    setIsEmailSent,
  };

  return (
    <MailContentContext.Provider value={values}>
      {children}
    </MailContentContext.Provider>
  );
};

export const useMailContent = () => useContext(MailContentContext);
