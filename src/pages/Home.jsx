import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={6}>
      <Button as={Link} to="/form" colorScheme="blue">
        Go to Form
      </Button>
    </Box>
  );
};

export default Home;
