import React from "react";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import CopyToClipboardButton from "../CopyToCLipBoard";

const HeapSortExplanation = () => {
  const heapSortCode = `
    const heapSort = (arr) => {
      buildMaxHeap(arr);

      for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
      }
    };

    const buildMaxHeap = (arr) => {
      const n = arr.length;

      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
      }
    };

    const heapify = (arr, n, i) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }

      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }

      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
      }
    };
  `;

  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        Heap Sort
      </Typography>
      <ul>
        <li>Step 1: Build a max heap from the input array.</li>
        <li>Step 2: Swap the root (maximum element) with the last element and remove it from the heap.</li>
        <li>Step 3: Heapify the root element to maintain the max heap property.</li>
        <li>Step 4: Repeat steps 2 and 3 until the heap is empty.</li>
      </ul>
      <Typography variant="h5" textAlign={"center"} mt={3} mb={5}>
        Heap Sort Code
      </Typography>
      <CodeContainer>
        <ClipboardButtonContainer>
          <CopyToClipboardButton value={heapSortCode} />
        </ClipboardButtonContainer>
        <StyledPaper elevation={3}>
          <pre>{heapSortCode}</pre>
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

export default HeapSortExplanation;
