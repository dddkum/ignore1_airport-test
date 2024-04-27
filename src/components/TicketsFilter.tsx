import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Paper,
} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface Props {
    setSelectedFilters: Dispatch<SetStateAction<string[]>>
    selectedFilters: string[]
}

const TicketsFilter = ({ setSelectedFilters, selectedFilters }: Props) => {
    const handleCheckboxChange = (filter: string) => {
        console.log(selectedFilters)
        if (filter === 'all') {
            if (selectedFilters.includes('all')) {
                setSelectedFilters(['0'])
            } else {
                setSelectedFilters(['0', '1', '2', '3', 'all'])
            }
        } else {
            if (selectedFilters.includes(filter)) {
                setSelectedFilters(selectedFilters.filter((f) => f !== filter))
            } else {
                setSelectedFilters([...selectedFilters, filter])
            }
        }
    }

    return (
        <Paper sx={{ p: 1 }}>
            <div style={{ marginBottom: '20px' }}>
                <p style={{ fontWeight: 'bold' }}> ВАЛЮТА</p>
                <ButtonGroup size="large" aria-label="Large button group">
                    <Button key="ruble">RUB</Button>
                    <Button key="usdollar">USD</Button>
                    <Button key="euro">EUR</Button>
                </ButtonGroup>
            </div>
            <div>
                <p style={{ fontWeight: 'bold' }}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
                <FormGroup>
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
                                checked={
                                    selectedFilters.includes('all') ||
                                    (selectedFilters.includes('all') &&
                                        selectedFilters.includes('0'))
                                }
                                onChange={() => handleCheckboxChange('0')}
                                name="0"
                            />
                        }
                        label="Без пересадок"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={
                                    selectedFilters.includes('all') ||
                                    selectedFilters.includes('1')
                                }
                                onChange={() => handleCheckboxChange('1')}
                                name="1"
                            />
                        }
                        label="1 пересадка"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={
                                    selectedFilters.includes('all') ||
                                    selectedFilters.includes('2')
                                }
                                onChange={() => handleCheckboxChange('2')}
                                name="2"
                            />
                        }
                        label="2 пересадки"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={
                                    selectedFilters.includes('all') ||
                                    selectedFilters.includes('3')
                                }
                                onChange={() => handleCheckboxChange('3')}
                                name="3"
                            />
                        }
                        label="3 пересадки"
                    />
                </FormGroup>
            </div>
        </Paper>
    )
}

export default TicketsFilter
