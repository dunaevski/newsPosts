import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import {useDispatch} from "react-redux";
import {DateValue, setFilterDate} from '../../app/slices/filter/filterSlice'

type FilterDateValue = Date | null;

export default function FilteringDate() {
    const [value, setValue] = React.useState<FilterDateValue[]>([null, null]);
    const dispatch = useDispatch()

    const handleChange = (newValue: FilterDateValue[]) => {
        setValue(newValue);
        const isFullDate = newValue.every(el => el);
        if (isFullDate) {
            const parseValue = newValue.map(date => date?.toISOString()) as DateValue;
            dispatch(setFilterDate(parseValue))
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} sx={{mt: 1, mb: 1}}>
            <div>
                <Typography variant="body2" sx={{mt: 1, mb: 1}}>Filtering Date</Typography>
                <DateRangePicker
                    value={value as any}
                    onChange={handleChange}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} size={'small'} />
                            <Box sx={{mx: 2}}> to </Box>
                            <TextField {...endProps} size={'small'} />
                        </React.Fragment>
                    )}
                />
            </div>
        </LocalizationProvider>
    );
}
