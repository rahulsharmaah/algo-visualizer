import React from "react";
import bubbleSortExplanation from "./bubbleSortExplanation";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import CopyToClipboardButton from "../CopyToCLipBoard";

const BubbleSortExplanation = () => {
  const bubbleSortCode = `const bubbleSort = (arr) => {
    const n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
      swapped = false;

      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }

      // If no two elements were swapped in the inner loop, the array is already sorted
      if (!swapped) {
        break;
      }
    }

    return arr;
  };
  `;

  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        {bubbleSortExplanation.title}
      </Typography>
      <ul>
        {bubbleSortExplanation.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <Typography variant="h5" textAlign={"center"} mt={3} mb={5}>
        Bubble Sort Code
      </Typography>
      <CodeContainer>
        <ClipboardButtonContainer>
          <CopyToClipboardButton value={bubbleSortCode} />
        </ClipboardButtonContainer>
        <StyledPaper elevation={3}>
          <pre>{bubbleSortCode}</pre>
        </StyledPaper>
      </CodeContainer>
      <h2>Example</h2>
      <p>Input: {JSON.stringify(bubbleSortExplanation.example.input)}</p>
      <p>Output: {JSON.stringify(bubbleSortExplanation.example.output)}</p>
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

export default BubbleSortExplanation;
