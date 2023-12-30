import { Card, CardBody, Flex, GridItem } from "@chakra-ui/react";
import "../../App.css";
import ReactTimeAgo from "react-time-ago";

function Cards({ key, data }) {
  const date = new Date(data.created_at);
  return (
    <GridItem key={key}>
      <Card className="cards" width={"100%"}>
        <CardBody className="cardbody">
          <p className="cardtitle">{data.title}</p>
          <Flex gap={0} justifyContent={"space-evenly"} alignItems={"center"}>
            <p className="cardpoints"> {data.points} points </p>
            <p className="carduser"> by {data.author}</p>
            <p className="cardtime">
              {" "}
              <ReactTimeAgo date={date} locale="en-US" />
            </p>
            <p className="cardcomments"> {data.num_comments} comments</p>
          </Flex>
        </CardBody>
      </Card>
    </GridItem>
  );
}

export default Cards;
