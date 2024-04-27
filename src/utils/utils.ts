import { ITicketData } from '@/types/types.ts'

interface IFilteredTicketsProps {
    selectedFilters: string[]
    data: ITicketData[]
}

export const getFilteredTickets = ({
    selectedFilters,
    data,
}: IFilteredTicketsProps): ITicketData[] => {
    if (selectedFilters.includes('all')) {
        return data
    }
    return data.filter((ticket) =>
        selectedFilters.includes(ticket.stops.toString()),
    )
}
