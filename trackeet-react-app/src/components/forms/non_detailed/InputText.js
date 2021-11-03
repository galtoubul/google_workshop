import { Input } from "@chakra-ui/react";

const InputText = (props) => {
  return <Input placeholder={props.placeholder} size="md" />;
};

{
  /* <Field name="name" validate={validateOrderName}>
{({ field, form }) => (
  <FormControl isInvalid={form.errors.name && form.touched.name}>
    <Input {...field} id="orderName" placeholder="Order Name" />
    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
  </FormControl>
)}
</Field> */
}

export default InputText;
