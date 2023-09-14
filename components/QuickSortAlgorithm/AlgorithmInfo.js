import React from "react";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import CopyToClipboardButton from "../CopyToCLipBoard";

const QuickSortExplanation = () => {
  const quickSortCode = `
    const quickSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }
    
      const pivot = arr[0];
      const left = [];
      const right = [];
    
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    
      return [...quickSort(left), pivot, ...quickSort(right)];
    };
  `;

  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        Quick Sort
      </Typography>
      <ul>
        <li>Step 1: Select a pivot element from the array.</li>
        <li>Step 2: Partition the array into two sub-arrays.</li>
        <li>Step 3: Recursively apply Quick Sort to both sub-arrays.</li>
        <li>Step 4: Combine the sorted sub-arrays and the pivot.</li>
      </ul>
      <Typography variant="h5" textAlign={"center"} mt={3} mb={5}>
        Quick Sort Code
      </Typography>
      <CodeContainer>
        <ClipboardButtonContainer>
          <CopyToClipboardButton value={quickSortCode} />
        </ClipboardButtonContainer>
        <StyledPaper elevation={3}>
          <pre>{quickSortCode}</pre>
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

export default QuickSortExplanation;
