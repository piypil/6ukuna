import React from 'react';
import {Homevuln} from './components/Homevuln'
import {ScanResult} from './data/ScanResult'
import CodeDisplay from './components/CodeDisplay';
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { EditorView } from '@codemirror/view';
import { classname } from '@uiw/codemirror-extensions-classname';

function App() {
  const code = `def ebanina():`;
  const highlightedLines = [0]; // Список строк, которые нужно подсветить красным

  const themeDemo = EditorView.baseTheme({
    '&dark .line-color': { backgroundColor: 'orange' },
    '&light .line-color': { backgroundColor: 'orange' },
  });

  const classnameExt = classname({
    add: (lineNumber: number) => {
      if (lineNumber == 3) {
        return 'line-color';
      }
    },
  });

  return (
    <div className="text-3xl font-bold underline">
      <h1>Пример подсветки синтаксиса Python</h1>
      <CodeDisplay code={code} highlightedLines={highlightedLines} />
      <Homevuln Scanresult = { ScanResult }/>
      <CodeMirror
      value="def python_code():"
      height="200px"
      extensions={[themeDemo, classnameExt, langs.python()]}
    />
    </div>
  );
};

export default App;
