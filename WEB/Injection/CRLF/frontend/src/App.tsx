import React from 'react';
import {Homevuln} from './components/Homevuln'
import {ScanResult} from './data/ScanResult'
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { EditorView } from '@codemirror/view';
import { classname } from '@uiw/codemirror-extensions-classname';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { Layout, Menu, theme, Input, Col, Row, Typography, Button, Popover, Space, Divider, Tag } from 'antd';

function App() {

  const editor = CodeMirror

  const classnameExt = classname({
    add: (lineNumber: number) => {
      if (lineNumber == 3) {
        return 'line-color';
      }
    },
  });

  return (
    <Row style={{ height: '100%' }} gutter={32}>
      <Homevuln Scanresult = { ScanResult }/>
      <Col span={12} style={{ height: '100%', overflow: 'auto' }}>
        <CodeMirror
        value="def python_code():"
        height="200px"
        theme={tokyoNight}
        extensions={[classnameExt, langs.python()]}
        />
      </Col>
    </Row>
  );
};

export default App;
