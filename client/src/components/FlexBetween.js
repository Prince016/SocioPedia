import { Box, styled } from '@mui/material'
import React from 'react'


// to make our own css property kind off
const FlexBetween = styled(Box)({
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
})

export default FlexBetween