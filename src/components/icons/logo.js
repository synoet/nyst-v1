import * as React from "react"

function Logo(props) {
  return (
    <svg width={40} height={40} viewBox="0 0 650 650" fill="none" {...props}>
      <path
        d="M130 0H0v130h130V0zM390 0H260v130h130V0zM650 0H520v130h130V0zM130 520H0v130h130V520z"
        fill="#8892B0"
      />
      <path d="M390 520H260v130h130V520z" fill="#000" />
      <path d="M650 520H520v130h130V520z" fill="#8892B0" />
      <path d="M650 252.78H0V390h650V252.78z" fill="#64FFDA" />
      <path d="M390 375.56H260V650h130V375.56z" fill="#64FFDA" />
    </svg>
  )
}

export default Logo
