import { useUserInformationContext } from "../../containers/userInformationContext";
import { ScanMissingOrderSerialNumberSnackbar } from "./scanMissingOrderSerialNumberSnachbar";
import { ScanSuccessSnackbar } from "./scanSuccessSnackbar";

const ScanSuccess = () => {
  const { formData } = useUserInformationContext();
  if (formData.order_serial_code === "")
    return <ScanMissingOrderSerialNumberSnackbar />;
  return <ScanSuccessSnackbar />;
};

export default ScanSuccess;
