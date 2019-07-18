import React from 'react'
import { ApiError } from './ApiError'

export const DisplayError: React.FC<ApiError> = error => {
    return (
      <div>
        <span>Error: {error.name}</span>
        <br />
        <span>{error.message}</span>
      </div>
    )
  }
}
