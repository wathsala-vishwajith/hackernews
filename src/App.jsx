import "./App.css";
import HackerNews from "./vite.svg";
import { Flex, Input, Grid, GridItem } from "@chakra-ui/react";
import Cards from "./assets/components/cards";

function App() {
  return (
    <>
      <Flex className="container" flexDirection={"row"}>
        <img src={HackerNews} className={"logo"} alt="HackerNews" width={40} />
        <Input className={"search"} placeholder="Search" />
      </Flex>
      <Grid className={"grid-container"} gap={5} width={"fit-content"}>
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
    </>
  );
}

export default App;

