import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Paper,
    Typography,
} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface Props {
    setSelectedFilters: Dispatch<SetStateAction<string[]>>
    selectedFilters: string[]
    setCurrency: Dispatch<SetStateAction<string>>
}

const TicketsFilter = ({
    setSelectedFilters,
    selectedFilters,
    setCurrency,
}: Props) => {
    const handleCheckboxChange = (filter: string) => {
        if (filter === 'all') {
            if (selectedFilters.includes('all')) {
                setSelectedFilters(['0'])
            } else {
                setSelectedFilters(['0', '1', '2', '3', 'all'])
            }
        } else {
            if (selectedFilters.includes(filter)) {
                setSelectedFilters(
                    selectedFilters.filter((f) => f !== filter && f !== 'all'),
                )
            } else {
                setSelectedFilters([...selectedFilters, filter])
            }
        }
    }

    return (
        <Paper
            elevation={5}
            sx={{
                p: 1,
                position: 'fixed',
                top: 0,
                left: 0,
                right: '10%',
                textAlign: 'center',
                width: '100%',
                zIndex: 1,
            }}
        >
            <Box sx={{ marginBottom: '20px' }}>
                <Typography sx={{ fontWeight: 'bold' }}> ВАЛЮТА</Typography>
                <ButtonGroup size="large" aria-label="Large button group">
                    <Button key="ruble" onClick={() => setCurrency('rub')}>
                        RUB
                    </Button>
                    <Button key="usdollar" onClick={() => setCurrency('usd')}>
                        USD
                    </Button>
                    <Button key="euro" onClick={() => setCurrency('eur')}>
                        EUR
                    </Button>
                </ButtonGroup>
            </Box>
            <Box>
                <Typography style={{ fontWeight: 'bold' }}>
                    КОЛИЧЕСТВО ПЕРЕСАДОК
                </Typography>
                <FormGroup
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedFilters.includes('all')}
                                onChange={() => handleCheckboxChange('all')}
                                name="all"
                            />
                        }
                        label="Все"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedFilters.includes('0')}
                                onChange={() => handleCheckboxChange('0')}
                                name="0"
                            />
                        }
                        label="Без пересадок"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedFilters.includes('1')}
                                onChange={() => handleCheckboxChange('1')}
                                name="1"
                            />
                        }
                        label="1 пересадка"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedFilters.includes('2')}
                                onChange={() => handleCheckboxChange('2')}
                                name="2"
                            />
                        }
                        label="2 пересадки"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedFilters.includes('3')}
                                onChange={() => handleCheckboxChange('3')}
                                name="3"
                            />
                        }
                        label="3 пересадки"
                    />
                </FormGroup>
            </Box>
        </Paper>
    )
}

export default TicketsFilter
