import { useParams } from "react-router-dom";

const RoutingParameter = () => {
  const params = useParams();
  console.log(params);

  const getDynamiocData = () => {
    const { appliance } = params;
    if (appliance === "mixer") {
      return <h1>current appliance is {appliance} and it use for mixing</h1>;
    } else if (appliance === "mobile") {
      return <h1>current appliance is {appliance} and is use for calling</h1>;
    } else {
      return <h1>current Appliance: {appliance}</h1>;
    }
  };
  return <>{getDynamiocData()}</>;
};

export default RoutingParameter;
