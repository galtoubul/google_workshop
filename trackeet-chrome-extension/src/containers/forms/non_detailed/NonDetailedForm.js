/* eslint-disable no-var */
import AutocompleteInput from "../../../components/forms/non_detailed/AutocompleteInput.js";
import DatePickerInput from "../../../components/forms/non_detailed/DatePickerInput.js";
import "./NonDetailedForm.scss";
import Button from "@mui/material/Button";
import { useUserInformationContext } from "../../userInformationContext";
import { SelectButton } from "../../../components/selectButton/SelectButton";
import * as React from "react";
import { ScanSuccessSnackbar } from "../../../components/snackbar/scanSuccessSnackbar";
import { ScanMissingOrderSerialNumberSnackbar } from "../../../components/snackbar/scanMissingOrderSerialNumberSnachbar";
import { ScanNotSupportedWebsite } from "../../../components/snackbar/scanNotSupportedWebsite";
import { ScanNotSupportedLocation } from "../../../components/snackbar/scanNotSupportedLocation";

const NonDetailedForm = (props) => {
  const {
    api,
    setIsSendLoading,
    setIsSendFinish,
    setIsSendError,
    formData,
    resetForm,
    showCleanButton,
    isScanSuccess,
    isOrderSerialCodeMissing,
    isScanNotSupportedWebsite,
    isScanNotSupportedLocation,
    //isScanNotSupported,
    //setIsScanSuccess,
    //setIsScanMissingOrderSerialCode,
    //setIsScanNotSupportedLocation,
    //setIsScanNotSupportedWebsite,
  } = useUserInformationContext();
  const { setFormInformation } = props;

  const saveAction = async () => {
    setIsSendLoading(true);
    showCleanButton(false);
    try {
      await api.addCard(formData);
      setIsSendFinish(true);
      setIsSendError(false);
      setIsSendLoading(false);
      resetForm();
    } catch (e) {
      console.log(e);
      setIsSendError(true);
      setIsSendFinish(true);
      setIsSendLoading(false);
      resetForm();
    }
  };

  const {
    estimated_arrival_date,
    order_status,
    company,
    order_name,
    order_serial_code,
  } = formData;

  const companies = [
    { title: "Amazon" },
    { title: "Ebay" },
    { title: "Asos" },
    { title: "AliExpress" },
  ];

  return (
    <>
      {/* Snackbar*/}
      {isScanSuccess ? <ScanSuccessSnackbar /> : null}
      {isOrderSerialCodeMissing ? (
        <ScanMissingOrderSerialNumberSnackbar />
      ) : null}
      {isScanNotSupportedWebsite ? <ScanNotSupportedWebsite /> : null}
      {isScanNotSupportedLocation ? <ScanNotSupportedLocation /> : null}
      {/* Snackbar*/}
      <SelectButton
        value={order_status}
        setValue={setFormInformation("order_status")}
      />
      <AutocompleteInput
        label="Order Name"
        autocompleteList={[]}
        value={order_name}
        setValue={setFormInformation("order_name")}
      />
      <AutocompleteInput
        label="Company"
        autocompleteList={companies}
        value={company}
        setValue={setFormInformation("company")}
      />
      <AutocompleteInput
        label="Order Serial Code"
        autocompleteList={[]}
        value={order_serial_code}
        setValue={setFormInformation("order_serial_code")}
      />
      <DatePickerInput
        label="Estimated Arriving Date"
        value={estimated_arrival_date}
        setValue={setFormInformation("estimated_arrival_date")}
      />
      <Button
        onClick={saveAction}
        sx={{ margin: "2% 5%" }}
        variant="contained"
        size={"small"}
      >
        SAVE
      </Button>
    </>
  );
};

export default NonDetailedForm;
