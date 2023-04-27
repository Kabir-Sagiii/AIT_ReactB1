import React from "react";
import "./Filter.css";
import { Box, Checkbox, Heading } from "@chakra-ui/react";

function Filter({ filterTitle, checkboxList }) {
  return (
    <div className="filterBy">
      <div>
        <Heading size="md">{filterTitle}</Heading>
      </div>
      <div className="filterContainer">
        <div>
          {checkboxList.map((list, index) => {
            return (
              <Box mb={2} key={index + 1}>
                <Checkbox>{list.title}</Checkbox>
              </Box>
            );
          })}
        </div>
        <div>
          {checkboxList.map((list, index) => {
            return (
              <Box mb={2} key={index + 1}>
                <p>{list.price}</p>
              </Box>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;
