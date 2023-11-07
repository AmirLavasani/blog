'use client'

import { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'

function CalendlyWidget({ url }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Load the ReactCalendly library dynamically on the client side
    import('react-calendly')
      .then(() => {
        setLoaded(true)
      })
      .catch((error) => {
        console.error('Error loading Calendly:', error)
      })
  }, [])

  if (!loaded) {
    return <div>Loading Calendly...</div>
  }

  return (
      <InlineWidget
        url={url} 
        styles={{height: '750px', minWidth: '320px', backgroundColor: 'inherit'}}
        // pageSettings={{
        //   backgroundColor: '1c1e21',
        //   hideEventTypeDetails: false,
        //   hideLandingPageDetails: false,
        //   primaryColor: '00a2ff',
        //   textColor: 'f8f8f8'
        // }}
      />
  )
            
}

export default CalendlyWidget;