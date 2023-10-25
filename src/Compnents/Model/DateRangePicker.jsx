import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { getFormatedDate } from "../../Constants/constants";

const DateRangePicker = ({ startDate, endDate }) => {
  return (
    <Flex margin={{ base: "auto", md: 0 }}>
      <Text mb={{ base: 2, md: 0 }}>
        {`${getFormatedDate(startDate)} - ${getFormatedDate(endDate)}`}
      </Text>
    </Flex>
  );
};

export default DateRangePicker;
