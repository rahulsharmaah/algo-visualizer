import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Heading = styled("h2")`
  text-align: center;
`;

const HeapSortComplexity = () => {
  return (
    <div>
      <Heading>Time and Space Complexity</Heading>
      <p>
        Heap Sort has the following time and space complexity characteristics:
      </p>
      <ul>
        <li>
          Time Complexity: <strong>O(n log n)</strong> - Heap Sort consistently
          has a time complexity of O(n log n) for all cases (worst, average,
          and best), making it efficient.
        </li>
        <li>
          Space Complexity: <strong>O(1)</strong> - Heap Sort is an in-place
          sorting algorithm and does not require additional memory for sorting.
        </li>
      </ul>
      <p>
        Heap Sort's efficient time complexity and in-place sorting nature make
        it a suitable choice for sorting large datasets.
      </p>
    </div>
  );
};

export default HeapSortComplexity;
