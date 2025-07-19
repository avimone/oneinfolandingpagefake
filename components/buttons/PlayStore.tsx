import { Button } from '@mui/material'
import React from 'react'
import NextImage from 'next/image'

interface PlayStoreButtonProps {
  size?: 'small' | 'large' | 'medium'
}

const PlayStoreButton: React.FC<PlayStoreButtonProps> = ({ size }) => {
  return (
    <Button
      startIcon={<NextImage alt="play-store" width={20} height={20} src="/icons/play_store.svg" />}
      variant="contained"
      color="inherit"
      size={size || 'large'}
      onClick={() => {
        window.open(
          'https://play.google.com/store/apps/details?id=com.gadgetspidy.oneinfo',
          '_blank',
        )
      }}
    >
      Play Store
    </Button>
  )
}

export default PlayStoreButton
