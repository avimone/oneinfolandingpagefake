'use client'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'

const StylistLocation = styled(Container)(() => ({
  paddingTop: 75,
  paddingBottom: 75,
}))

const Location = () => {
  return (
    <StylistLocation>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <div style={{ height: 320, borderRadius: 10 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.493023576595!2d78.45411991162094!3d17.436101183390463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b7160418cd%3A0x9cb8db917ad89923!2swinAMR%20Systems%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1745684866194!5m2!1sen!2sin"
              width="100%"
              height={300}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} container justifyContent="center" flexDirection="column">
          <Grid size={12}>
            <Box pl={3}>
              <Typography fontSize={12} variant="body2">
                OUR MISSION AND OUR VISION
              </Typography>
              <Typography variant="h6">Address for communication</Typography>
              <Typography variant="body2">CFP4+CM Hyderabad, Telangana</Typography>
              <Typography>
                Website : <a style={{color:'#006994'}} href="http://www.winamr.com/">http://www.winamr.com/</a>
              </Typography>
              <Typography>Call : 04066787773</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </StylistLocation>
  )
}

export default Location