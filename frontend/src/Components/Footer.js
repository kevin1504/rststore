import { Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" py="3" bgColor="gray.500">
      <Link>Copyright 2021 </Link>
      <Text>RST Store. All Rights Reserved.</Text>
    </Flex>
  );
};

export default Footer;
