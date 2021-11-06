// import { FormControl, FormErrorMessage, Button, Input } from "@chakra-ui/react";
// import { Formik, Form, Field } from "formik";
import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import InputText from "../../../components/forms/non_detailed/InputText";
import InputAutocomplete from "../../../components/forms/non_detailed/InputAutocomplete";

// const validateOrderName = function (value) {
//   let error;
//   if (!value) {
//     error = "Order name is required";
//   }

//   return error;
// };

const companies = [
  { value: "amazon", label: "Amazon" },
  { value: "ebay", label: "Ebay" },
  { value: "fedex", label: "Fedex" },
  { value: "nike", label: "Nike" },
  { value: "asos", label: "Asos" },
  { value: "aliExpress", label: "Ali Express" },
  { value: "apple", label: "Apple" },
];

const NonDetailedForm = () => {
  return (
    <Formik>
      {(props) => (
        <Form>
          <InputAutocomplete placeholder="Company Name" list={companies} />
          <InputText placeholder="Order Name" />
          <Button mt={4} colorScheme="teal">
            SAVE
          </Button>
          <Button mt={4} colorScheme="teal">
            ADVANCED
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default NonDetailedForm;
