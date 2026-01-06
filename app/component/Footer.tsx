import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='py-10  sticky bottom-0 container mx-auto'>

      <small className='text-sm block text-center pb-3'>
        <Link href="/policy">プライバシーポリシー</Link>
      </small>
      <small className='text-sm block text-center'>© 2024 LUX LAB. All Rights Reserved.</small>
    </footer>
  )
}
