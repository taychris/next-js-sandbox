import { useState } from 'react'

const Index = ({ summaryInfo }) => {
  const [summary, setSummary] = useState({})

  return (
    <div className="mt-16">
        <button onClick={() => {console.log(summaryInfo)}}>Click me</button>
    </div>
  )
}

export default Index