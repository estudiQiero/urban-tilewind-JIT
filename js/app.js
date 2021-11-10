new Vue({
    el: "#contenedor",
    data: {
        display: '',
        diaNoche: false,
        idTxt: '',
        idEdif: '',
        fill: '',
    },
    return: {
        currentYear: new Date().getFullYear(),
    },
    // propiedad computada para modal on/off
    computed: {
        computedDisplay: function () {
            return this.display
        },
        compGetIdTxt: function () {
            return this.idTxt
        },
        compGetIDEdif: function () {
            return this.idEdif
        },
        compFill: function () {
            return this.fill
        },
        computedColor: function () {
            return this.color
        }
    },
    methods: {
        // metodos para modal on/off

        modalOn: function (event) {
            this.display = 'block';
        },
        modalOff: function (event) {
            this.display = "none";
        },
        // metodos para eventos sobre edificios
        handleEvent: function (event, data) {
            this.idTxt = event.srcElement.id;
            let colorTexto = this.idTxt;
            let idEdif = this.idTxt.slice(4);
            this.idEdif = idEdif;

            console.log(event, idEdif);
        },
        // coge idEdif y fill color

    }
})