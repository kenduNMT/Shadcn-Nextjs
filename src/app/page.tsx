'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function HomePage() {
  const [message, setMessage] = useState('')

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        {/* Button Destructive */}
        <Button variant="destructive" onClick={() => setMessage('Đã nhấn vào nút Destructive')}>
          Destructive
        </Button>

        {/* Button Primary (default) */}
        <Button variant="default" onClick={() => setMessage('Đã nhấn vào nút Primary')}>
          Primary
        </Button>

        {/* Button Secondary */}
        <Button variant="secondary" onClick={() => setMessage('Đã nhấn vào nút Secondary')}>
          Secondary
        </Button>

        {/* Button Large */}
        <Button size="lg" onClick={() => setMessage('Đã nhấn vào nút Size large')}>
          Size large
        </Button>

        {/* Button Small */}
        <Button size="sm" onClick={() => setMessage('Đã nhấn vào nút Size small')}>
          Size small
        </Button>
      </div>

      {/* Hiển thị thông báo */}
      <p>{message}</p>
    </div>
  );
}
