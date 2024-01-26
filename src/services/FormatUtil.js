const toMoneyFormat = (nombre) => {
    return nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const FormatUtil = {
    toMoneyFormat
}

export default FormatUtil;