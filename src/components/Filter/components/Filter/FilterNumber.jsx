import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Slider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const FilterNumber = ({
  name,
  setValue,
  value,
  min,
  max,
  step = 1,
  ...props
}) => {
  return (
    <Accordion {...props} disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack justifyContent="center" alignItems="center">
          <Stack direction="row" gap={2}>
            <Box>
              <Typography>От</Typography>
              <TextField
                type="number"
                value={value[0]}
                onChange={(e) => setValue([Number(e.target.value), value[1]])}
                size="small"
                inputProps={{
                  step,
                  min,
                  max,
                  type: 'number',
                }}
                sx={{
                  width: '128px',
                }}
              />
            </Box>
            <Box>
              <Typography>До</Typography>
              <TextField
                value={value[1]}
                onChange={(e) => setValue([value[0], Number(e.target.value)])}
                size="small"
                inputProps={{
                  step,
                  min,
                  max,
                  type: 'number',
                }}
                sx={{
                  width: '128px',
                }}
              />
            </Box>
          </Stack>
          <Slider
            getAriaLabel={() => 'Rating'}
            step={step}
            min={min}
            max={max}
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            valueLabelDisplay="auto"
            disableSwap
            size="small"
          />
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}

export default FilterNumber
