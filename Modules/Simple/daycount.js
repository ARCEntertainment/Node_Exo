function calculator(month, days) {
    let toDay = new Date()
    let toYear = toDay.getFullYear()

    if (toDay.getMonth() == month && toDay.getDate() > days) {
        toYear = toYear + 1;
    }

    let dateChoice = new Date(toYear, month, days)
    let daysMs = 1000 * 60 * 60 * 24;

    let reponse = Math.round(
        Math.abs((toDay.getTime() - dateChoice.getTime()) /
            (daysMs)));

    return reponse
}


const daycount = {
    noel: function () {
        // let actualDay = new Date()
        // let noelYear = actualDay.getFullYear()

        // if (actualDay.getMonth() == 11 && actualDay.getDate() > 25) {
        //     noelYear = noelYear + 1;
        // }

        // let noelDate = new Date(noelYear, 11, 25)
        // let joursEnMilliseconds = 1000 * 60 * 60 * 24;

        // let reponse = Math.ceil(
        //     (noelDate.getTime() - actualDay.getTime()) /
        //     (joursEnMilliseconds)
        // );
        let reponse = calculator(11, 25)
        return console.log(reponse)
    },

    anniversaire: function () {
        // let presentDay = new Date();
        // let annifYear = presentDay.getFullYear()

        // if (presentDay.getMonth() == 09 && presentDay.getDate() > 30) {
        //     annifYear = annifYear + 1;
        // }

        // let anniversaire = new Date(annifYear, 09, 30);
        // let theDays = 24 * 60 * 60 * 1000;

        // let reponse = Math.round(
        //     Math.abs((presentDay.getTime() - anniversaire.getTime()) /
        //         (theDays)));

        let reponse = calculator(09, 30)
        return console.log(reponse)


    },
    vaccance: function () {
        // let toDay = new Date()
        // let farnienteY = toDay.getFullYear()
        // let farniente = new Date(farnienteY, 09, 01)
        // let sideDays = 24 * 60 * 60 * 1000;

        // let reponse = Math.round(Math.abs((toDay.getTime() - farniente.getTime()) / (sideDays)));
        let reponse = calculator(09, 01)
        return console.log(reponse)
    },
    solstice: function () {
        let isDay = new Date()
        let toYear = isDay.getFullYear()
        let solstice1 = new Date(toYear, 05, 21)
        let solstice2 = new Date(toYear, 11, 21)
        let sideDays = 24 * 60 * 60 * 1000;

        if (isDay.getMonth() < 05) {
            let reponse1 = Math.round(Math.abs((isDay.getTime() - solstice1.getTime()) / (sideDays)));
            console.log(reponse1)
        }
        else if (isDay.getMonth() > 05) {
            let reponse2 = Math.round(Math.abs((isDay.getTime() - solstice2.getTime()) / (sideDays)));
            console.log(reponse2)

        }
        else {
            console.log("error")
        }
    }



}
module.exports = daycount