import "./index.scss";
import { useMailContent } from "../../../../context/MailContentContext";

function ContactAfterSend() {
  const { setIsEmailSent } = useMailContent();
  const onNewMail = () => {
    setIsEmailSent(false);
  };
  return (
    <div>
      <button onClick={onNewMail}>send new mail</button>
    </div>
  );
}

export default ContactAfterSend;
