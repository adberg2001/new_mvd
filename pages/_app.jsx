import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";


import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import '../styles/utils.scss';

function MyApp({ Component, pageProps }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <Component {...pageProps} />
    </MuiPickersUtilsProvider>
  )
}

export default MyApp;
