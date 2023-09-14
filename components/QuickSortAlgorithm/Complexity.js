import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Heading = styled("h2")`
  text-align: center;
`;

const QuickSortComplexity = () => {
  return (
    <div>
      <Heading>Time and Space Complexity</Heading>
      <Typography paragraph>
        Quick Sort has the following time and space complexity characteristics:
      </Typography>
      <ul>
        <li>
          Time Complexity: <strong>O(n log n)</strong> on average, but
          <strong> O(n^2)</strong> in the worst case when the pivot choice is
          not optimal. It's usually faster than Merge Sort for small datasets.
        </li>
        <li>
          Space Complexity: <strong>O(log n)</strong> due to the recursive
          stack. Quick Sort is memory-efficient compared to Merge Sort.
        </li>
      </ul>
      <Typography paragraph>
        Quick Sort's performance depends on the choice of the pivot element.
        When well-implemented, it's one of the fastest sorting algorithms
        available.
      </Typography>
    </div>
  );
};

export default QuickSortComplexity;
