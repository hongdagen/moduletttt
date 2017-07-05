define(function () {
    var util = {
        getFormatDate: function (date, type) {
            if (type === 1) {
                return '2017-05-09'
            }
            if (type === 2) {
                return '2017年5月9日'
            }
        }
    }
    return util
})