import '@/App.scss'
import data from '@/data/tickets.json'
import { Box, CircularProgress, Container } from '@mui/material'
import TicketCard from '@/components/TicketCard.tsx'
import { useMemo, useState } from 'react'
import { getFilteredTickets } from '@/utils/utils.ts'
import TicketsFilter from '@/components/TicketsFilter.tsx'

function App() {
    const [selectedFilters, setSelectedFilters] = useState(data.filters)
    const [currencySelected, setCurrencySelected] = useState<string>('rub')

    const filteredTickets = useMemo(
        () => getFilteredTickets({ data: data.tickets, selectedFilters }),
        [data, selectedFilters],
    )

    return (
        <>
            <TicketsFilter
                setSelectedFilters={setSelectedFilters}
                selectedFilters={selectedFilters}
                setCurrency={setCurrencySelected}
            />
            {data ? (
                <Container maxWidth="xl" sx={{ paddingTop: '200px' }}>
                    {selectedFilters.length > 0 ? (
                        <Box>
                            {filteredTickets.map((ticket, index) => (
                                <TicketCard
                                    key={index} // It's better to use a unique identifier for the key prop, like ticket.id
                                    id={index}
                                    ticket={ticket}
                                    selectedFilters={selectedFilters}
                                    currency={currencySelected}
                                />
                            ))}
                        </Box>
                    ) : (
                        <Box>
                            {/* Show all tickets when no filters are selected */}
                            {data.tickets.map((ticket, index) => (
                                <TicketCard
                                    key={index} // It's better to use a unique identifier for the key prop, like ticket.id
                                    id={index}
                                    ticket={ticket}
                                    selectedFilters={selectedFilters}
                                    currency={currencySelected}
                                />
                            ))}
                        </Box>
                    )}
                </Container>
            ) : (
                <CircularProgress />
            )}
        </>
    )
}

export default App
