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
        background: '#f5f5f0',
        color: '#0a0a0a',
        padding: '64px 96px',
        fontFamily: 'Inter, ui-sans-serif, system-ui',
      },
    },
    React.createElement(
      'div',
      { style: { fontSize: 54, fontWeight: 800, lineHeight: 1.1 } },
      'Haseloff Software Solutions'
    ),
    React.createElement('div', { style: { height: 24 } }),
    React.createElement(
      'div',
      {
        style: {
          fontSize: 36,
          fontWeight: 700,
          lineHeight: 1.2,
          background: 'linear-gradient(90deg, #7c3aed, #ec4899)',
          backgroundClip: 'text',
          color: 'transparent',
        },
      },
      'Deine Vision. Unser Code.'
    ),
    React.createElement('div', { style: { height: 32 } }),
    React.createElement(
      'div',
      { style: { fontSize: 24, color: 'rgba(10,10,10,0.35)' } },
      'haseloff-software.de'
    )
  );

  return new ImageResponse(element, {
    width: 1200,
    height: 630,
  });
}
