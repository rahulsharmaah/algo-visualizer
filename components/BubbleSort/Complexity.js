import React from 'react';
import styled from 'styled-components';

const ComplexityInfo = () => {
  return (
    <div>
      <Heading>Time and Space Complexity</Heading>
      <p>
        Bubble Sort has the following time and space complexity characteristics:
      </p>
      <ul>
        <li>
          Time Complexity: <strong>O(n^2)</strong> - Bubble Sort has a quadratic time complexity, making it less efficient for large datasets, especially in the worst-case scenario.
        </li>
        <li>
          Space Complexity: <strong>O(1)</strong> - Bubble Sort is an in-place sorting algorithm, meaning it doesn't require additional memory to store temporary arrays. The space complexity is O(1).
        </li>
      </ul>
      <p>
        Bubble Sort's simplicity comes at the cost of efficiency. It is suitable for small datasets but not recommended for larger ones due to its slower performance compared to more efficient sorting algorithms like Merge Sort.
      </p>
    </div>
  );
};

const Heading = styled.h2`
  text-align: center;
`;

export default ComplexityInfo;
