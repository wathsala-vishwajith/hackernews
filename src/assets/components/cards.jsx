import { Card, CardBody, Flex } from "@chakra-ui/react";
import "../../App.css";

function Cards({ title, comments, user, time, points }) {
  return (
    <Card className="cards" width={"100%"}>
      <CardBody className="cardbody">
        <p className="cardtitle">{title}</p>
        <Flex gap={0} justifyContent={"space-evenly"} alignItems={"center"}>
          <p className="cardpoints">{points} points </p>
          <p className="carduser"> by {user} </p>
          <p className="cardtime"> 3 hours ago </p>
          <p className="cardcomments"> 22 comments</p>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Cards;
