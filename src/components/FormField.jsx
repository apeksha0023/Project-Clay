import React from "react";
import { FormControl, FormLabel, Input, Select, Checkbox, Box } from "@chakra-ui/react";

const FormField = ({ field, register }) => {
  return (
    <FormControl isRequired={field.required} mb={4}>
      <FormLabel>{field.label}</FormLabel>

      {/* Render different field types based on the schema */}
      {field.type === "text" || field.type === "email" || field.type === "number" ? (
        <Input {...register(field.name, { required: field.required })} type={field.type} />
      ) : field.type === "select" ? (
        <Select {...register(field.name, { required: field.required })}>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      ) : field.type === "checkbox" ? (
        <Checkbox {...register(field.name)}>{field.label}</Checkbox>
      ) : null}
    </FormControl>
  );
};

export default FormField;
