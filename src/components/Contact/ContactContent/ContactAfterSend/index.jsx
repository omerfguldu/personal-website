import "./index.scss";
import { useMailContent } from "../../../../context/MailContentContext";

function ContactAfterSend() {
  const { setIsEmailSent } = useMailContent();
  const onNewMail = () => {
    setIsEmailSent(false);
  };
  return (
    <div className="after-send-container">
      <div className="info-container">
        <p className="main-text">Thank you! 🤘</p>
        <div className="info-text">
          Your message has been accepted. You will receive answer really soon!
        </div>
        <a className="btn-new-message primary-button" onClick={onNewMail}>
          send-new-message
        </a>
      </div>
    </div>
  );
}

export default ContactAfterSend;
