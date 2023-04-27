import { useState } from "react";
import { Heading, Container, Box, Input, Button } from "@chakra-ui/react";
function Login(props) {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleAuthentication = () => {
    if (
      (user.name === "kabir" && user.password === "kabir@123") ||
      (user.name === "admin" && user.password === "admin@123")
    ) {
    } else {
      alert("Enter Proper Crendentials");
    }
  };
  return (
    <Container mt="70px" boxShadow="dark-lg" p="20" rounded="md" bg="white">
      <Heading size="md">Login Form</Heading>
      <Box mt="25px">
        <Input
          placeholder="User Name"
          variant="flushed"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </Box>
      <Box mt="20px">
        <Input
          type="password"
          placeholder="Password"
          variant="flushed"
          value={user.password}
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
      </Box>
      <Box mt="20px">
        <Button
          colorScheme="black"
          variant="outline"
          onClick={() => {
            handleAuthentication();
          }}
        >
          Button
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
