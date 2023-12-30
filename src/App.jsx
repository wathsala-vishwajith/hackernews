import "./App.css";
import HackerNews from "./vite.svg";
import { Flex, Input, Grid, GridItem, Center } from "@chakra-ui/react";
import Cards from "./assets/components/cards";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pageItems, setPageItems] = useState([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://hn.algolia.com/api/v1/search?tags=front_page"
        );
        setPageItems(res.data.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <>
      <Flex className="container" flexDirection={"row"}>
        <img src={HackerNews} className={"logo"} alt="HackerNews" width={40} />
        <Input className={"search"} placeholder="Search" />
      </Flex>
      <Center>
        <Grid className={"grid-container"} gap={1} width={"100%"}>
          {pageItems.map((item, index) => (
            <Cards key={index} data={item} />
          ))}
        </Grid>
      </Center>
    </>
  );
}

export default App;

