"use client"

import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const Calendar = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                slotProps={{
                    day: (ownerState) => ({
                        sx: {
                            opacity: ownerState.day.isBefore(dayjs(), 'day') ? 0.5 : 1,
                            fontSize: '1rem',
                            fontFamily: 'serif'
                        },
                    }),
                }}
                sx={{
                    '& .css-dplwbx-MuiPickersCalendarHeader-label': {
                        color: 'green',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                    },
                    '& .MuiTypography-root': {
                        color: 'blue',
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                    },
                }}
            />
        </LocalizationProvider>
    );
};

export default Calendar;