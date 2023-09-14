import React from "react";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import CopyToClipboardButton from "../CopyToCLipBoard";

const SelectionSortExplanation = () => {
  const selectionSortCode = `
    const selectionSort = (arr) => {
      const n = arr.length;

      for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }

        if (minIndex !== i) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
      }
    };
  `;

  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        Selection Sort
      </Typography>
      <ul>
        <li>Step 1: Find the minimum element in the unsorted part of the array.</li>
        <li>Step 2: Swap it with the first element in the unsorted part.</li>
        <li>Step 3: Repeat steps 1 and 2 for the entire array until sorted.</li>
      </ul>
      <Typography variant="h5" textAlign={"center"} mt={3} mb={5}>
        Selection Sort Code
      </Typography>
      <CodeContainer>
        <ClipboardButtonContainer>
          <CopyToClipboardButton value={selectionSortCode} />
        </ClipboardButtonContainer>
        <StyledPaper elevation={3}>
          <pre>{selectionSortCode}</pre>
        </StyledPaper>
      </CodeContainer>
      <h2>Example</h2>
      <p>Input: [38, 27, 43, 3, 9, 82, 10]</p>
      <p>Output: [3, 9, 10, 27, 38, 43, 82]</p>
    </Container>
  );
};

const Container = styled("div")`
  padding: 20px;
`;

const CodeContainer = styled("div")`
  position: relative;
`;

const ClipboardButtonContainer = styled("div")`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const StyledPaper = styled(Paper)`
  padding: 16px;
  overflow-x: auto;
  font-size: 16px;
`;

export default SelectionSortExplanation;
