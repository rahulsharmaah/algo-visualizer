import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Heading = styled("h2")`
  text-align: center;
`;

const SelectionSortComplexity = () => {
  return (
    <div>
      <Heading>Time and Space Complexity</Heading>
      <p>
        Selection Sort has the following time and space complexity
        characteristics:
      </p>
      <ul>
        <li>
          Time Complexity: <strong>O(n^2)</strong> - Selection Sort has a
          quadratic time complexity for all cases (worst, average, and best),
          making it inefficient for large datasets.
        </li>
        <li>
          Space Complexity: <strong>O(1)</strong> - Selection Sort is an
          in-place sorting algorithm and does not require additional memory for
          sorting.
        </li>
      </ul>
      <p>
        Selection Sort is straightforward but not suitable for large datasets
        due to its quadratic time complexity.
      </p>
    </div>
  );
};

export default SelectionSortComplexity;
