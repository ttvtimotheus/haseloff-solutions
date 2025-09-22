import { ImageResponse } from 'next/og';
import React from 'react';

export const runtime = 'edge';

export async function GET() {
  const element = React.createElement(
    'div',
    {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '64px 96px',
        fontSize: 64,
        fontWeight: 700,
        fontFamily: 'Inter, ui-sans-serif, system-ui',
      },
    },
    React.createElement(
      'div',
      { style: { fontSize: 54, lineHeight: 1.1 } },
      'Haseloff Software Solutions'
    ),
    React.createElement('div', { style: { height: 24 } }),
    React.createElement(
      'div',
      { style: { fontSize: 36, color: '#2563eb', lineHeight: 1.2 } },
      'Software mit System. Pixel für Pixel.'
    ),
    React.createElement('div', { style: { height: 32 } }),
    React.createElement(
      'div',
      { style: { fontSize: 24, color: '#111827' } },
      'haseloff-software.de'
    )
  );

  return new ImageResponse(element, {
    width: 1200,
    height: 630,
  });
}
