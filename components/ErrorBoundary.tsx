'use client'

import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * Error Boundary pour capturer les erreurs dans les composants enfants
 * Empêche que toute l'application crash si un composant échoue
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log l'erreur pour analyse (peut être envoyé à un service de monitoring)
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Afficher le fallback personnalisé ou un message par défaut
      return this.props.fallback || (
        <div className="flex items-center justify-center min-h-[200px] p-4">
          <div className="text-center">
            <p className="text-gray-600">Une erreur est survenue. Veuillez rafraîchir la page.</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
