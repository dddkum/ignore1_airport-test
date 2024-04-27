import { Box, Button, Paper, Typography } from '@mui/material'
import { ITicketData } from '@/types/types.ts'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'

type Props = {
    id?: number
    ticket: ITicketData
    selectedFilters: string[]
    currency: string
}

const TicketCard = ({ id, ticket, currency }: Props) => {
    return (
        <Paper elevation={5} key={id} className="ticket__card">
            <Box
                className="flex-column mb-1"
                sx={{
                    gap: '25px',
                }}
            >
                <img src={ticket.logo} alt="companyLogo" width={200} />
                <Button
                    variant="contained"
                    color="warning"
                    size="large"
                    sx={{ px: 5, py: 1 }}
                >
                    Купить за{' '}
                    {currency === 'eur'
                        ? `${(ticket.price * 0.01).toFixed(2)}€`
                        : currency === 'usd'
                          ? `${(ticket.price * 0.011).toFixed(2)}$`
                          : `${ticket.price}₽`}
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '20px',
                }}
            >
                <Box
                    className="flex-column"
                    style={{
                        justifyContent: 'center',
                        alignItems: 'start',
                    }}
                >
                    <Typography sx={{ fontSize: '48px' }}>
                        {ticket.departure_time}
                    </Typography>
                    <Typography>
                        {ticket.origin}, {ticket.origin_name}
                    </Typography>
                    <Typography>
                        {format(ticket.departure_date, 'PP', {
                            locale: ru,
                        })}
                    </Typography>
                </Box>
                <Box className="airplane__icon-container">
                    <Box className="airplane__icon-solid-line" />
                    <Typography className="airplane__stops__count">
                        Пересадки: {ticket.stops}
                    </Typography>
                    <AirplanemodeActiveIcon className="airplane__icon" />
                </Box>
                <Box
                    className="flex-column"
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'end',
                    }}
                >
                    <Typography sx={{ fontSize: '48px' }}>
                        {ticket.arrival_time}
                    </Typography>
                    <Typography>
                        {ticket.destination}, {ticket.destination_name}
                    </Typography>
                    <Typography>
                        {format(ticket.arrival_date, 'PP', {
                            locale: ru,
                        })}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default TicketCard
