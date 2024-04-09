
'use strict';

$(function () {
    const lang = $('html').attr('lang');
    if (lang === 'ja') {
        $('option[value="index.html"]').prop('selected', true);
    } else if (lang === 'en') {
        $('option[value="index-en.html"]').prop('selected', true);
    } else if (lang === 'zh') {
        $('option[value="index-zh.html"]').prop('selected', true);
    }

    $('select[name="select"]').on('change', function () {
        const url = $(this).val();
        console.log(url);
        location.href = url;
    });
});
