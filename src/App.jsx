import "./App.css";
import HackerNews from "./vite.svg";
import { Flex, Input, Grid, GridItem, Center } from "@chakra-ui/react";
import Cards from "./assets/components/cards";
import { useState } from "react";
import axios from "axios";

function App() {
  const { pageItems, setPageItems } = useState([]);
  const items = getItems();
  console.log(items);

  return (
    <>
      <Flex className="container" flexDirection={"row"}>
        <img src={HackerNews} className={"logo"} alt="HackerNews" width={40} />
        <Input className={"search"} placeholder="Search" />
      </Flex>
      <Center>
        <Grid className={"grid-container"} gap={1} width={"100%"}>
          <GridItem>
            <Cards />
          </GridItem>
          <GridItem>
            <Cards />
          </GridItem>
          <GridItem>
            <Cards />
          </GridItem>
          <GridItem>
            <Cards />
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}

const getItems = async () => {
  const res = await axios.get(
    "http://hn.algolia.com/api/v1/search?tags=front_page"
  );
  return res;
};

export default App;

