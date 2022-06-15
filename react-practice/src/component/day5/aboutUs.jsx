import { useNavigate } from "react-router-dom";

function AboutUs(props) {
  const navigate = useNavigate();
  return (
    <>
      <h1>About about</h1>
      <button onClick={() => navigate("/")}>navigate to home</button>
      <button onClick={() => navigate("/contact")}>navigate to contact</button>
    </>
  );
}

export default AboutUs;
