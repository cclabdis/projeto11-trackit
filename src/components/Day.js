import dayjs from "dayjs";
import 'dayjs/locale/pt-br'

let Day = dayjs().locale('pt-br').format('dddd, DD/MM')
Day = Day[0].toUpperCase() + Day.slice(1);

export default Day