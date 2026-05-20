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

function Experience() {
  return (
    <CodeBlock filename="experience.ts" language="typescript">
      <Line><C>// Where I've shipped, what I owned, and what I learned.</C></Line>
      <Line><C>// Most recent first.</C></Line>
      <Line />
      <Line><K>const</K> <V>experience</V> <Op>=</Op> <Op>[</Op></Line>

      {/* Meslogic */}
      <Line indent={1}>{'{'}</Line>
      <Line indent={2}><P>company</P><Op>:</Op>  <S>Meslogic IT Solution Pvt. Ltd.</S><Op>,</Op></Line>
      <Line indent={2}><P>role</P><Op>:</Op>     <S>Full-Stack Developer · Associate Developer</S><Op>,</Op></Line>
      <Line indent={2}><P>period</P><Op>:</Op>   <S>Jul 2024 – Apr 2026</S><Op>,</Op></Line>
      <Line indent={2}><P>stack</P><Op>:</Op>    <Op>[</Op>{list(['Node.js', 'Express.js', 'MongoDB', 'Redis', 'React.js', 'Next.js', 'TypeScript', 'JWT'])}<Op>],</Op></Line>
      <Line indent={2}><P>impact</P><Op>:</Op> <Op>[</Op></Line>
      <Line indent={3}><S>Cut average API response time by ~40% with Redis caching on hot endpoints</S><Op>,</Op></Line>
      <Line indent={3}><S>Designed MongoDB schemas + indexes; tuned queries for high-traffic routes</S><Op>,</Op></Line>
      <Line indent={3}><S>Built and maintained REST APIs in Node.js + Express with clean, modular architecture</S><Op>,</Op></Line>
      <Line indent={3}><S>Integrated JWT auth with role-based access across internal APIs</S><Op>,</Op></Line>
      <Line indent={3}><S>Shipped React.js and Next.js modules with reusable components</S><Op>,</Op></Line>
      <Line indent={3}><S>Worked in agile sprints — planning, code reviews, on-call bug resolution</S><Op>,</Op></Line>
      <Line indent={2}><Op>],</Op></Line>
      <Line indent={1}><Op>{'},'}</Op></Line>

      {/* FunctionUp */}
      <Line indent={1}>{'{'}</Line>
      <Line indent={2}><P>company</P><Op>:</Op>  <S>FunctionUp</S><Op>,</Op></Line>
      <Line indent={2}><P>role</P><Op>:</Op>     <S>Full-Stack Developer · Trainee</S><Op>,</Op></Line>
      <Line indent={2}><P>period</P><Op>:</Op>   <S>2023</S><Op>,</Op></Line>
      <Line indent={2}><P>stack</P><Op>:</Op>    <Op>[</Op>{list(['Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT'])}<Op>],</Op></Line>
      <Line indent={2}><P>impact</P><Op>:</Op> <Op>[</Op></Line>
      <Line indent={3}><S>Built RESTful APIs across multiple MERN projects, including vaccine slot booking and book management</S><Op>,</Op></Line>
      <Line indent={3}><S>Implemented JWT auth and validated end-to-end data integrity</S><Op>,</Op></Line>
      <Line indent={3}><S>Learned by shipping — pair-programming, code reviews, real team workflows</S><Op>,</Op></Line>
      <Line indent={2}><Op>],</Op></Line>
      <Line indent={1}><Op>{'},'}</Op></Line>

      <Line><Op>]</Op> <K>as</K> <K>const</K><Op>;</Op></Line>
      <Line />
      <Line><K>export</K> <K>default</K> <V>experience</V><Op>;</Op></Line>
    </CodeBlock>
  )
}

export default Experience
