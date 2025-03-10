import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import DynamicForm from "../components/DynamicForm";
import formSchema from "../data/formSchema.json";

const FormPage = () => {
  const [formData, setFormData] = useState(null);
  const { register, handleSubmit, reset } = useForm(); // Global useForm instance

  const handleFormSubmit = (data) => {
    console.log("Form Submitted:", data);
    setFormData(data);
    reset(); // Clear all form fields
  };

  return (
    <Box p={6}>
      {/* <Heading mb={4}>{formSchema.title}</Heading> */}
      {/* Pass register and reset from global useForm */}
      <DynamicForm schema={formSchema} register={register} onSubmit={handleSubmit(handleFormSubmit)} />

      {formData && (
        <Box mt={6} p={4} border="1px solid gray" borderRadius="md">
          <Heading size="md">Submitted Data:</Heading>
          <Divider my={2} />
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default FormPage;
