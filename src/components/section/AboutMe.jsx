import React from 'react'
import { CodeBlock, Line } from '../CodeBlock'

const Cmt = ({ children }) => <span className="tok-cmt">{children}</span>
const Doc = ({ children }) => <span className="tok-doc">{children}</span>
const Tag = ({ children }) => <span className="tok-tag">{children}</span>

function AboutMe() {
  return (
    <CodeBlock filename="aboutMe.txt" language="markdown">
      <Line><Cmt>/**</Cmt></Line>
      <Line><Cmt>{' * '}</Cmt><Tag>@file</Tag><Doc>{'   aboutMe.txt'}</Doc></Line>
      <Line><Cmt>{' * '}</Cmt><Tag>@author</Tag><Doc>{' Harshit Rajput'}</Doc></Line>
      <Line><Cmt>{' * '}</Cmt><Tag>@role</Tag><Doc>{'   Full-Stack Developer · Bhopal, India'}</Doc></Line>
      <Line><Cmt>{' * '}</Cmt><Tag>@status</Tag><Doc>{' Open to opportunities'}</Doc></Line>
      <Line><Cmt>{' */'}</Cmt></Line>
      <Line />
      <Line><Cmt>// Hi, I'm Harshit — a Full-Stack Developer in Bhopal, MP.</Cmt></Line>
      <Line><Cmt>// I build Node.js + Express APIs that hold up under traffic,</Cmt></Line>
      <Line><Cmt>// and ship React / Next.js modules that don't break the design</Cmt></Line>
      <Line><Cmt>// system. ~2 years of production experience, MERN-first.</Cmt></Line>
      <Line />
      <Line><Cmt>// The short version: B.E. in Computer Science from SIRTS College</Cmt></Line>
      <Line><Cmt>// (2016–2020). MERN training at FunctionUp in 2023. Then</Cmt></Line>
      <Line><Cmt>// Associate Developer at Meslogic IT Solution from Jul 2024 to</Cmt></Line>
      <Line><Cmt>// Apr 2026 — owning backend services in a real production team.</Cmt></Line>
      <Line />
      <Line><Cmt>// What I actually shipped:</Cmt></Line>
      <Line><Cmt>//   · Added Redis caching to hot endpoints — cut average</Cmt></Line>
      <Line><Cmt>//     response time by <b>~40%</b>.</Cmt></Line>
      <Line><Cmt>//   · Designed MongoDB schemas + indexes that kept query times</Cmt></Line>
      <Line><Cmt>//     flat as datasets grew.</Cmt></Line>
      <Line><Cmt>//   · Built JWT auth with role-based access for APIs other</Cmt></Line>
      <Line><Cmt>//     teams now depend on.</Cmt></Line>
      <Line><Cmt>//   · Contributed React.js and Next.js modules with reusable</Cmt></Line>
      <Line><Cmt>//     components, agile sprints and honest code reviews.</Cmt></Line>
      <Line />
      <Line><Cmt>// Strongest on the backend (APIs, schema design, caching, auth),</Cmt></Line>
      <Line><Cmt>// equally happy in React / Next.js. Comfortable in TypeScript.</Cmt></Line>
      <Line><Cmt>// Currently sharpening DSA and system-design fundamentals.</Cmt></Line>
      <Line />
      <Line><Cmt>// What I'm looking for: a small team that ships, trusts me to</Cmt></Line>
      <Line><Cmt>// own work end-to-end, and gives me real problems. Bonus points</Cmt></Line>
      <Line><Cmt>// for performance engineering, TypeScript-first codebases, or</Cmt></Line>
      <Line><Cmt>// anything with real users on the line.</Cmt></Line>
      <Line />
      <Line><Cmt>// Away from the keyboard: music production, singing, football,</Cmt></Line>
      <Line><Cmt>// volleyball, badminton. Same instincts — timing, attention to</Cmt></Line>
      <Line><Cmt>// detail, showing up.</Cmt></Line>
      <Line />
      <Line><Cmt>// Want to talk? Hit </Cmt><Cmt>`</Cmt><Doc>Ctrl+J</Doc><Cmt>`</Cmt><Cmt> and run </Cmt><Cmt>`</Cmt><Doc>touch feedback.txt</Doc><Cmt>`</Cmt><Cmt> —</Cmt></Line>
      <Line><Cmt>// type a note, hit Send, it lands in my inbox.</Cmt></Line>
    </CodeBlock>
  )
}

export default AboutMe
