const daycount = {
    noel: function () {
        let actualDay = new Date()
        let noelYear = actualDay.getFullYear()

        if (actualDay.getMonth() == 11 && actualDay.getDate() > 25) {
            noelYear = noelYear + 1;
        }

        let noelDate = new Date(noelYear, 11, 25)
        let joursEnMilliseconds = 1000 * 60 * 60 * 24;

        let reponse = Math.ceil(
            (noelDate.getTime() - actualDay.getTime()) /
            (joursEnMilliseconds)
        );
        return console.log(reponse)
    },

    anniversaire: function () {
        let presentDay = new Date();
        let annifYear = presentDay.getFullYear()
        let anniversaire = new Date(annifYear, 09, 30);
        let theDays = 24 * 60 * 60 * 1000;

        let reponse = Math.round(Math.abs((presentDay.getTime() - anniversaire.getTime()) / (theDays)));

        return console.log(reponse)


    },
    vaccance: function () {
        let toDay = new Date()
        let farnienteY = toDay.getFullYear()
        let farniente = new Date(farnienteY, 09, 01)
        let sideDays = 24 * 60 * 60 * 1000;

        let reponse = Math.round(Math.abs((toDay.getTime() - farniente.getTime()) / (sideDays)));

        return console.log(reponse)
    }


}
module.exports = daycount