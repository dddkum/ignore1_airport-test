import '@/App.scss'
import { CircularProgress, Container, Paper } from '@mui/material'
import TicketCard from '@/components/TicketCard.tsx'

import bd from '@/data/tickets.json'
import { ITickets } from '@/types/types.ts'
import { useState } from 'react'
import TicketsFilter from '@/components/TicketsFilter.tsx'

function App() {
    const [ticketsData, setTicketsData] = useState<ITickets>(bd)
    const [selectedFilters, setSelectedFilters] = useState<string[]>(['0'])

    return (
        <>
            {ticketsData ? (
                <Container
                    maxWidth="xl"
                    sx={{ display: 'flex', gap: '40px', py: 5 }}
                >
                    <TicketsFilter
                        setSelectedFilters={setSelectedFilters}
                        selectedFilters={selectedFilters}
                    />
                    <div>
                        {ticketsData.tickets.map((ticket, index) => (
                            <TicketCard
                                id={index}
                                ticket={ticket}
                                selectedFilters={selectedFilters}
                            />
                        ))}
                    </div>
                </Container>
            ) : (
                <CircularProgress />
            )}
        </>
    )
}

export default App
