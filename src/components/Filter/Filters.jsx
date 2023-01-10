import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuItem,
  FormControl,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import FilterNumber from './components/Filter/FilterNumber'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectFilters,
  setFilterGenre,
  setFilterRatings,
  setFilterYears,
  setSortByRelease,
} from '../../app/reducers/filtersSlice'

const genres = [
  { label: 'Все жанры', value: '' },
  { label: 'Семейные', value: 'семейный' },
  { label: 'Биографии', value: 'биография' },
  { label: 'Боевики', value: 'боевик' },
  { label: 'Вестерны', value: 'вестерн' },
  { label: 'Военные', value: 'военный' },
  { label: 'Детективы', value: 'детектив' },
  { label: 'Детские', value: 'детский' },
  { label: 'Документальные', value: 'документальный' },
  { label: 'Драмы', value: 'драма' },
  { label: 'Исторические', value: 'история' },
  { label: 'Комедии', value: 'комедия' },
  { label: 'Короткометражки', value: 'короткометражка' },
  { label: 'Криминал', value: 'криминал' },
  { label: 'Мелодрамы', value: 'мелодрама' },
  { label: 'Музыкальные', value: 'музыка' },
  { label: 'Мюзиклы', value: 'мюзикл' },
  { label: 'Новости', value: 'новости' },
  { label: 'Приключения', value: 'приключения' },
  { label: 'Спортивные', value: 'спорт' },
  { label: 'Триллеры', value: 'триллер' },
  { label: 'Ужасы', value: 'ужасы' },
  { label: 'Фантастика', value: 'фантастика' },
  { label: 'Фильмы-нуар', value: 'фильм-нуар' },
  { label: 'Фэнтези', value: 'фэнтези' },
]

const Filters = () => {
  const dispatch = useDispatch()

  const { ratings, years, genre, sortByRelease } = useSelector(selectFilters)

  const handleReset = () => {
    setFilterRatings([1, 10])
    setFilterYears([1965, 2022])
    setFilterGenre('')
    setSortByRelease('new')
  }

  const onSubmit = () => {
    setFilterRatings()
    setFilterYears([1965, 2022])
    setFilterGenre('')
    setSortByRelease('new')
  }
  return (
    <form style={{ width: 300 }} onSubmit>
      <Accordion disableGutters defaultExpanded elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Сортировка</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              name="controlled-radio-buttons-group"
              defaultValue="new"
              value={sortByRelease}
              onChange={(e) => dispatch(setSortByRelease(e.target.value))}
            >
              <FormControlLabel
                value="new"
                control={<Radio />}
                label="Сначала новые"
              />
              <FormControlLabel
                value="old"
                control={<Radio />}
                label="Сначала старые"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <FilterNumber
        name="Рейтинг"
        value={ratings}
        setValue={(value) => dispatch(setFilterRatings(value))}
        min={1}
        max={10}
        step={0.5}
        defaultExpanded
      />
      <FilterNumber
        name="Год выхода"
        value={years}
        setValue={(value) => dispatch(setFilterYears(value))}
        min={1960}
        max={2023}
        defaultExpanded
      />
      <Accordion disableGutters defaultExpanded elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Жанры</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            select
            label="Жанры"
            value={genre}
            onChange={(e) => dispatch(setFilterGenre(e.target.value))}
            sx={{ m: 1, minWidth: 120 }}
            fullWidth
            SelectProps={{ displayEmpty: true }}
            InputLabelProps={{ shrink: true }}
          >
            {genres.map((genre) => (
              <MenuItem value={genre.value} key={genre.value}>
                {genre.label}
              </MenuItem>
            ))}
          </TextField>
        </AccordionDetails>
      </Accordion>
      <Button variant="contained" size="large" fullWidth type="submit">
        Применить
      </Button>
      <Button variant="outlined" size="large" fullWidth onClick={handleReset}>
        Сбросить
      </Button>
    </form>
  )
}

export default Filters
