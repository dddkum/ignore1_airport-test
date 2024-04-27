import { Button, Paper } from '@mui/material'
import Empire from '@/assets/Empire.webp'
import { ITicketData } from '@/types/types.ts'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'

type Props = {
    id?: number
    ticket: ITicketData
    selectedFilters: string[]
}

const TicketCard = ({ id, ticket, selectedFilters }: Props) => {
    return (
        <Paper
            elevation={1}
            key={typeof id === 'number' ? id : 0}
            sx={{ p: 3, display: 'flex', mb: 3 }}
        >
            <div
                className="flexColumn"
                style={{
                    gap: '25px',
                    paddingRight: '50px',
                }}
            >
                <img src={Empire} alt="Empire" width={200} />
                <Button
                    variant="contained"
                    color="warning"
                    size="large"
                    sx={{ px: 5, py: 1 }}
                >
                    Купить за {ticket.price}
                </Button>
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: '20px',
                }}
            >
                <div
                    className="flexColumn"
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'start',
                    }}
                >
                    <p style={{ fontSize: '48px' }}>{ticket.departure_time}</p>
                    <p>
                        {ticket.origin}, {ticket.origin_name}
                    </p>
                    <p>
                        {format(ticket.departure_date, 'PP', {
                            locale: ru,
                        })}
                    </p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '200px',
                        position: 'relative',
                    }}
                >
                    <span
                        style={{
                            backgroundColor: 'black',
                            height: '2px',
                            width: '100%',
                        }}
                    ></span>
                    <AirplanemodeActiveIcon
                        sx={{ rotate: '90deg' }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-5px',
                            transform: 'translate(-50%, 0%)',
                        }}
                    />
                </div>
                <div
                    className="flexColumn"
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'end',
                    }}
                >
                    <p style={{ fontSize: '48px' }}>{ticket.departure_time}</p>
                    <p>
                        {ticket.destination}, {ticket.destination_name}
                    </p>
                    <p>
                        {format(ticket.arrival_date, 'PP', {
                            locale: ru,
                        })}
                    </p>
                </div>
            </div>
        </Paper>
    )
}

export default TicketCard
