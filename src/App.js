import { useEffect, useState } from 'react';
import moment from 'moment/moment';

import 'moment/locale/ru';

import './App.css';

function App() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate('2023-06-03 01:10:39.676358+05');
  }, []);

  const formatDate = (date) => {
    return moment(date).format('D MMMM YYYY, HH:mm');
  };

  return <>{date && <div>created_at: {formatDate(date)}</div>}</>;
}

export default App;
