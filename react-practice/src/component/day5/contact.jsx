import { useNavigate } from "react-router-dom";

function Contact(props) {
  const navigate = useNavigate();
  return (
    <>
      <h1>contact about</h1>
      <button onClick={() => navigate("/")}>navigate to home</button>
      <button onClick={() => navigate("/about")}>navigate to about</button>
    </>
  );
}

export default Contact;
