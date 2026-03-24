import { useEffect } from 'react'

export default function PitchDeck() {
  useEffect(() => {
    // Load the standalone pitch deck HTML in an iframe-free way
    window.location.href = '/what-we-do-hk.html'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Loading pitch deck...</p>
    </div>
  )
}
