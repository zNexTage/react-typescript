class DateTimeFormat {
    /**
     * Convert a time to second. the time string needs to be in the format: 00:00:00     
     * @param time 
     */
    public static timeToSecond(time: string) {
        const [hour = '0', minute = '0', seconds = '0'] = time.split(":");

        //One hour is equal to 3600 seconds
        const hourInSeconds = parseInt(hour) * 3600;
        const minutesInSeconds = parseInt(minute) * 60;

        // Sum all seconds
        return hourInSeconds + minutesInSeconds + parseInt(seconds);
    }

    /**
     * Convert seconds to minutes
     * @param timeInSeconds 
     * @returns a object with the minutes and the seconds
     */
    public static secondsToMinute(timeInSeconds: number) {
        return {
            minutes: Math.floor(timeInSeconds / 60),
            seconds: timeInSeconds % 60
        }
    }
}

export default DateTimeFormat;