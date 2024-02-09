const toMoneyFormat = (nombre) => {
    return nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const formatDateDifference = (isoDate) => {
    const currentDate = new Date();
    const targetDate = new Date(isoDate);
    const timeDifference = currentDate.getTime() - targetDate.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const weeksDifference = Math.floor(daysDifference / 7);

    if (weeksDifference >= 1) {
        return `${weeksDifference} sem${weeksDifference > 1 ? '' : ''}`;
    } else if (daysDifference >= 1) {
        return `${daysDifference} j${daysDifference > 1 ? '' : ''}`;
    } else if (hoursDifference >= 1) {
        return `${hoursDifference} h${hoursDifference > 1 ? '' : ''}`;
    } else if (minutesDifference >= 1) {
        return `${minutesDifference} min${minutesDifference > 1 ? '' : ''}`;
    } else {
        return `now`;
    }
}

const FormatUtil = {
    toMoneyFormat,
    formatDateDifference
}

export default FormatUtil;