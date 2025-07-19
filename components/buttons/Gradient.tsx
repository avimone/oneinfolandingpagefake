import { COLORS } from '@/theme/colors'
import { Button } from '@mui/material'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GradientButtonProps {
  btnName: string
  onClick: () => void
}

const Gradient = ({ btnName, onClick }: GradientButtonProps) => {
  return (
    <Button
      disableElevation
      sx={{
        backgroundColor: '#FAACA8',
        backgroundImage: `linear-gradient(19deg, #FF8C45 0%, #FFC92B 100%)`,
        color: COLORS.WHITE,
      }}
      variant="contained"
      onClick={onClick}
      size="large"
    >
      {btnName}
    </Button>
  )
}

export default Gradient
