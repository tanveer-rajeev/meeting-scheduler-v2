
export const Converter = (startTimeInt, time) => {

        if (startTimeInt > 12) {
            startTimeInt -= 12;
            let str = startTimeInt.toString();
            return str.concat(time.substr(2), " PM")
        } else if (startTimeInt < 12) {
            return time.concat(" AM")
        } else return time.concat(" PM")

};
