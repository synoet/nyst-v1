import * as React from "react"

function Logo(props) {
  return (
    <svg width={45} height={45} viewBox="0 0 650 650" fill="none" {...props}>
      <path
        d="M130 0H0v130h130V0zM390 "
        fill="#8892B0"
      >
		  	  <animate attributeName="opacity" dur="8s" keyTimes="0;0.1;0.5;0.6;1" begin="1s;op.end+1s" values="0;1;1;0;0" repeatCount="indefinite"/>
	</path>
	<path
        d="M130 0H260v130h130V0zM650 "
        fill="#8892B0"
      >
		<animate attributeName="opacity" dur="5s" keyTimes="0;0.1;0.5;0.6;1" begin="2s;op.end+2s" values="0;1;1;0;0" repeatCount="indefinite"/>
	</path>
	<path
        d="M130 0H520v130h130V0zM130 "
        fill="#8892B0"
      >
		<animate attributeName="opacity" dur="5s" keyTimes="0;0.1;0.5;0.6;1" values="0;1;1;0;0" begin="4s;op.end+4s" repeatCount="indefinite"/>
	</path>
	<path
        d="M130 520H0v130h130V520z"
        fill="#8892B0"
      >
		<animate attributeName="opacity" dur="5s" keyTimes="0;0.1;0.5;0.6;1" values="0;1;1;0;0" begin="5s;op.end+5s" repeatCount="indefinite"/>
	</path>

      <path d="M650 520H520v130h130V520z" fill="#8892B0" >
	  <animate attributeName="opacity" dur="5s" keyTimes="0;0.1;0.5;0.6;1" values="0;1;1;0;0" begin="6s;op.end+6s" repeatCount="indefinite"/>
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

export default Logo
