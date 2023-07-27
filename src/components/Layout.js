import React from 'react'

export const Layout = ( {children , className=""}) => {
  return (
    <div className={` w-full h-full inline-block z-0 bg-light py-29    ${className}`}>
        {children}
        </div>
  )
}
