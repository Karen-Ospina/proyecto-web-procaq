(function () {
    var locale = {
        amPm: [
            'am',
            'pm'
        ],
        DoFn: '%dº',
        dayNames: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        dayNamesShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        monthNames: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthNamesShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_')
    };
    if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        module.exports = locale;
    } else if (window && window.window === window) {
        window.fechaLocales = window.fechaLocales || {};
        window.fechaLocales['pt-br'] = locale;
    }
}());