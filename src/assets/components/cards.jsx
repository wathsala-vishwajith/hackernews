import { Card, CardBody, Flex } from "@chakra-ui/react";

function Cards() {
  return (
    <Card className="cards" width={"fit-content"}>
      <CardBody className="cardbody">
        <p className="cardtitle">The art of high performance computing</p>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <p className="cardpoints">181 points</p>
          <p className="carduser"> by rramadass</p>
          <p className="cardtime"> 3 hours ago</p>
          <p className="cardcomments"> 22 comments</p>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Cards;
