
import React from "react";
import { VStack, Button, Box, Heading, Divider } from "@chakra-ui/react";
import FormField from "./FormField";

const DynamicForm = ({ schema, register, onSubmit, isRoot = true }) => {
  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      p={6}
      bg="black"
      boxShadow="lg"
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.300"
      width="100%"
      maxW="600px"
      mx="auto"
    >
      {isRoot && (
        <Heading size="md" mb={4} textAlign="center" color="teal.600">
          {schema.title || "Dynamic Form"}
        </Heading>
      )}

      <VStack spacing={5} align="stretch">
        {schema.fields.map((field) =>
          field.type === "section" ? (
            <Box key={field.name} p={4} bg="grey" borderRadius="md">
              <Heading size="sm" color="white" mb={2}>
                {field.label}
              </Heading>
              <Divider mb={3} />
              <DynamicForm schema={field} register={register} isRoot={false} />
            </Box>
          ) : (
            <FormField key={field.name} field={field} register={register} />
          )
        )}

        {isRoot && (
          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            width="full"
            _hover={{ bg: "teal.700" }}
          >
            Submit
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default DynamicForm;
