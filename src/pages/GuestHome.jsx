import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import DateFnsAdapter from '@date-io/date-fns';
import axios from 'axios';

const GuestHome = () => {
	const dfns = new DateFnsAdapter();
	const defaultDate = dfns.date('1990-01-01T00:00:00.000Z');
	const maxDate = dfns.date('2010-01-01T00:00:00.000Z');
	const [ date, setDate ] = useState(defaultDate);
	const [ month, setMonth ] = useState(dfns.getMonth(defaultDate) + 1);
	const [ day, setDay ] = useState(dfns.format(defaultDate, 'dayOfMonth'));
	const [ horoscope, setHoroscope ] = useState('');
	const [ horoscopeRequested, setHoroscopeRequested ] = useState(false);

	const handleChange = (newdate) => {
		setDate(newdate);
		setMonth(dfns.getMonth(newdate) + 1);
		setDay(dfns.format(newdate, 'dayOfMonth'));
		//const byear = dfns.getYear(date);
	};

	const horoscopeChecker = async (month, day) => {
		const API_ROOT = `https://ohsxjzftfi.execute-api.eu-central-1.amazonaws.com/dev/horoscope-check?bmonth=${month}&bday=${day}`;
		await axios.get(API_ROOT).then((response) => {
			setHoroscope(response.data);
			setHoroscopeRequested(true);
		});
	};

	return (
		<React.Fragment>
			<div className="text-center" id="landing-text">
				<h1 className="jumbotron bg-transparent pb-1 mb-2">
					Get to know <br />your horoscope & more
				</h1>
				<h3 className="f700">
					zodiacus is a minimal project <br /> dedicated to astrology lovers
				</h3>
			</div>
			<div className="text-center mt-5" id="birthday-form">
				<div className="montserrat mb-1">Please enter your birthday</div>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						inputFormat="dd MMMM yyyy"
						value={date}
						openTo="year"
						maxDate={maxDate}
						onChange={handleChange}
						renderInput={(params) => <TextField {...params} />}
						views={[ 'year', 'month', 'day' ]}
					/>
				</LocalizationProvider>
				<div>
					<button className="btn btn-outline-primary mt-2" onClick={() => horoscopeChecker(month, day)}>
						Check
					</button>
				</div>
				{horoscopeRequested && <h3 className="mt-4 f700">Your horoscope is {horoscope}</h3>}
			</div>
		</React.Fragment>
	);
};
export default GuestHome;
