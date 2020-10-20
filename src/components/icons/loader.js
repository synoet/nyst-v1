import * as React from "react"

function LoaderIcon(props) {
  return (
  <svg width={150} height={150} viewBox="0 0 650 650" fill="none" {...props}>
<path
  d="M130 0H0v130h130V0zM390 "
  fill="#8892B0"
  opacity = '0'
>
          <animate attributeName="opacity" dur="5s" keyTimes="0;0.1;0.5;0.6;1" begin="0s" values="0;1;1;1;1" />
</path>
<path
  d="M130 0H260v130h130V0zM650 "
  fill="#8892B0"
  opacity = '0'
>
  <animate attributeName="opacity" dur="5s" keyTimes="0;0.1;0.5;0.6;1" begin="1s" values="0;1;1;1;1" />
</path>
<path
  d="M130 0H520v130h130V0zM130 "
  fill="#8892B0"
  opacity = '0'
>
  <animate attributeName="opacity" dur="5s" keyTimes="0;0.1;0.5;0.6;1" values="0;1;1;1;1" begin="2s"/>
</path>
<path
  d="M130 520H0v130h130V520z"
  fill="#8892B0"
  opacity = '0'
>
  <animate attributeName="opacity" dur="5s" keyTimes="0;0.1;0.5;0.6;1" values="0;1;1;1;1" begin="3s"/>
</path>

<path d="M650 520H520v130h130V520z" fill="#8892B0" opacity = '0'>
<animate attributeName="opacity" dur="5s" keyTimes="0;0.1;0.5;0.6;1" values="0;1;1;1;1" begin="4s" />
</path>
<path d="M650 252.78H0V390h650V252.78z" fill="#64FFDA" >
{/* <animate attributeName="opacity" dur="8s" keyTimes="0;0.1;0.5;0.6;1" values="0;1;1;0;0" repeatCount="indefinite"/> */}
</path>
<path d="M390 375.56H260V650h130V375.56z" fill="#64FFDA" >
{/* <animate attributeName="opacity" dur="8s" keyTimes="0;0.1;0.5;0.6;1" values="0;1;1;0;0" repeatCount="indefinite"/> */}
</path>
</svg>
  )
  }

export default LoaderIcon