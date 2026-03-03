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
        justifyContent: 'space-between',
        background: '#f5f5f0',
        color: '#0a0a0a',
        padding: '72px 80px',
        fontFamily: 'Inter, ui-sans-serif, system-ui',
      },
    },
    React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
      React.createElement(
        'div',
        {
          style: {
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          },
        },
        'Software, die'
      ),
      React.createElement(
        'div',
        {
          style: {
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'rgba(10,10,10,0.2)',
          },
        },
        'verkauft.'
      )
    ),
    React.createElement(
      'div',
      { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' } },
      React.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '6px' } },
        React.createElement(
          'div',
          { style: { fontSize: 26, fontWeight: 700, color: '#0a0a0a' } },
          'Haseloff Software Solutions'
        ),
        React.createElement(
          'div',
          { style: { fontSize: 18, color: 'rgba(10,10,10,0.35)' } },
          'Web-Apps · Mobile Apps · Individuelle Systeme'
        )
      ),
      React.createElement(
        'div',
        { style: { fontSize: 16, color: 'rgba(10,10,10,0.25)' } },
        'haseloff-software.de'
      )
    )
  );

  return new ImageResponse(element, {
    width: 1200,
    height: 630,
  });
}
