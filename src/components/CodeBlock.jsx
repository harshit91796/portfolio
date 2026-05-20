import React from 'react'

export const CodeBlock = ({ filename, language = 'javascript', children }) => (
  <div className="codeBlock" data-language={language}>
    {filename && (
      <div className="codeBlock__breadcrumb">
        <span className="codeBlock__crumb">portfolio</span>
        <span className="codeBlock__crumbSep">›</span>
        <span className="codeBlock__crumb">src</span>
        <span className="codeBlock__crumbSep">›</span>
        <span className="codeBlock__crumb codeBlock__crumb--file">{filename}</span>
      </div>
    )}
    <div className="codeBlock__scroll">
      <div className="codeBlock__code">{children}</div>
    </div>
  </div>
)

export const Line = ({ indent = 0, children }) => (
  <div className="codeBlock__line">
    {indent > 0 && <span className="codeBlock__indent">{'\u00A0'.repeat(indent * 2)}</span>}
    {children ?? '\u00A0'}
  </div>
)

export default CodeBlock
