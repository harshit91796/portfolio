import React from 'react'
import { CodeBlock, Line } from '../CodeBlock'

const K = ({ children }) => <span className="tok-kw">{children}</span>
const V = ({ children }) => <span className="tok-var">{children}</span>
const P = ({ children }) => <span className="tok-prop">{children}</span>
const S = ({ children }) => <span className="tok-str">{`'${children}'`}</span>
const C = ({ children }) => <span className="tok-cmt">{children}</span>
const Op = ({ children }) => <span className="tok-op">{children}</span>

const list = (items) =>
  items.flatMap((item, i) => [
    <S key={`s${i}`}>{item}</S>,
    i < items.length - 1 ? <Op key={`,${i}`}>{', '}</Op> : null,
  ])

function Skills() {
  return (
    <CodeBlock filename="skills.ts" language="typescript">
      <Line><C>// Tools I reach for, grouped by where they live in the stack.</C></Line>
      <Line><C>// Comfort level after each: 3 = production-ready, 2 = solid,</C></Line>
      <Line><C>// 1 = working knowledge.</C></Line>
      <Line />
      <Line><K>const</K> <V>skills</V> <Op>=</Op> {'{'}</Line>

      <Line indent={1}><P>languages</P>   <Op>: [</Op>{list(['JavaScript', 'TypeScript', 'HTML', 'CSS'])}<Op>],</Op>                        <C>// 3</C></Line>
      <Line indent={1}><P>frontend</P>    <Op>: [</Op>{list(['React.js', 'Next.js', 'React Native', 'Material-UI', 'Tailwind CSS'])}<Op>],</Op>  <C>// 3</C></Line>
      <Line indent={1}><P>backend</P>     <Op>: [</Op>{list(['Node.js', 'Express.js', 'Socket.io', 'REST APIs', 'JWT auth'])}<Op>],</Op>           <C>// 3</C></Line>
      <Line indent={1}><P>databases</P>   <Op>: [</Op>{list(['MongoDB', 'Redis', 'Supabase'])}<Op>],</Op>                                          <C>// 3</C></Line>
      <Line indent={1}><P>cloud</P>       <Op>: [</Op>{list(['AWS', 'Git', 'GitHub'])}<Op>],</Op>                                                  <C>// 2</C></Line>
      <Line indent={1}><P>fundamentals</P><Op>: [</Op>{list(['Data Structures', 'Algorithms', 'System Design'])}<Op>],</Op>                       <C>// 2</C></Line>

      <Line>{'}'} <K>as</K> <K>const</K><Op>;</Op></Line>
      <Line />
      <Line><K>export</K> <K>default</K> <V>skills</V><Op>;</Op></Line>
      <Line />
      <Line><C>// What I'm leveling up next: deeper TypeScript, system design</C></Line>
      <Line><C>// patterns, and observability (Grafana, OpenTelemetry).</C></Line>
    </CodeBlock>
  )
}

export default Skills
