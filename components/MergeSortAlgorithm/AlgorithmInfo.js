import React from "react";
import mergeSortExplanation from "./mergeSortExplanation";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import CopyToClipboardButton from "../CopyToCLipBoard";

const MergeSortCode = () => {
  const mergeSortCode = `const merge = (arr, left, middle, right) => {
    const n1 = middle - left + 1;
    const n2 = right - middle;
  
    const leftArr = new Array(n1);
    const rightArr = new Array(n2);
  
    for (let i = 0; i < n1; i++) leftArr[i] = arr[left + i];
    for (let i = 0; i < n2; i++) rightArr[i] = arr[middle + 1 + i];
  
    let i = 0;
    let j = 0;
    let k = left;
  
    while (i < n1 && j < n2) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }
  
    while (i < n1) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }
  
    while (j < n2) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  };
  
  const mergeSortHelper = (arr, left, right) => {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);
      mergeSortHelper(arr, left, middle);
      mergeSortHelper(arr, middle + 1, right);
      merge(arr, left, middle, right);
    }
  };
  
  const mergeSort = (arr) => {
    mergeSortHelper(arr, 0, arr.length - 1);
  };
  `;
  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        {mergeSortExplanation.title}
      </Typography>
      <ul>
        {mergeSortExplanation.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <Typography variant="h5" textAlign={"center"} mt={3} mb={5}>
        Merge Sort Code
      </Typography>
      <CodeContainer>
        <ClipboardButtonContainer>
          <CopyToClipboardButton value={mergeSortCode} />
        </ClipboardButtonContainer>
        <StyledPaper elevation={3}>
        <pre>
        {mergeSortCode}
        </pre>
        </StyledPaper>
      </CodeContainer>
      <h2>Example</h2>
      <p>Input: {JSON.stringify(mergeSortExplanation.example.input)}</p>
      <p>Output: {JSON.stringify(mergeSortExplanation.example.output)}</p>
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

export default MergeSortCode;
