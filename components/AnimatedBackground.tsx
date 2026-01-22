'use client'

/**
 * Composant d'arrière-plan avec quadrillage et effet fibre optique
 * - Quadrillage gris très clair sur fond blanc
 * - Traversées de lumière bleues/indigo animées
 * - Animations CSS performantes avec @keyframes
 * - Optimisé GPU avec transform3d et will-change
 */
export default function AnimatedBackground() {
  return (
    <>
      {/* Quadrillage de fond */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 200, 200, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 200, 200, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundColor: '#ffffff',
          willChange: 'transform'
        }}
      />
      
      {/* Lignes de lumière horizontales */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ willChange: 'transform' }}
      >
        <div className="fiber-light-horizontal fiber-light-1" style={{ transform: 'translate3d(0, 0, 0)' }} />
        <div className="fiber-light-horizontal fiber-light-2" style={{ transform: 'translate3d(0, 0, 0)' }} />
        <div className="fiber-light-horizontal fiber-light-3" style={{ transform: 'translate3d(0, 0, 0)' }} />
      </div>

      {/* Lignes de lumière verticales */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ willChange: 'transform' }}
      >
        <div className="fiber-light-vertical fiber-light-v1" style={{ transform: 'translate3d(0, 0, 0)' }} />
        <div className="fiber-light-vertical fiber-light-v2" style={{ transform: 'translate3d(0, 0, 0)' }} />
        <div className="fiber-light-vertical fiber-light-v3" style={{ transform: 'translate3d(0, 0, 0)' }} />
      </div>
    </>
  )
}
