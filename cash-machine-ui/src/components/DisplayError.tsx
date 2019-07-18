import React from 'react'
import { ApiError } from '../../../common/ApiResults'

export const DisplayError: React.FC<ApiError> = (error: ApiError) => {
  return (
    <div style={{ color: 'red' }}>
      <span>Error: {error.name}</span>
      <br />
      <span>{error.message}</span>
    </div>
  )
}
