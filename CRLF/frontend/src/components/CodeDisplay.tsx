import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeDisplayProps = {
  code: string;
  highlightedLines: number[];
};

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, highlightedLines }) => {
  return (
    <SyntaxHighlighter language="python" style={prism}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
