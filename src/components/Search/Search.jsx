import { Box, Stack } from '@mui/system'
import Filters from '../Filter/Filters'

const Search = () => {
  return (
    <Stack direction="row" minHeight="92vh">
      <Filters />
      <Box></Box>
    </Stack>
  )
}

export default Search
