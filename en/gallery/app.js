/* <![CDATA[ */
var _wpcf7 = { "loaderUrl": "https:\/\/thefotonaut.com\/wp-content\/plugins\/contact-form-7\/images\/ajax-loader.gif", "recaptchaEmpty": "Please verify that you are not a robot.", "sending": "Sending ..." };
/* ]]> */

/* <![CDATA[ */
var woocommerce_params = { "ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/en\/gallery\/?wc-ajax=%%endpoint%%" };
/* ]]> */

/* <![CDATA[ */
var wc_cart_fragments_params = { "ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/en\/gallery\/?wc-ajax=%%endpoint%%", "fragment_name": "wc_fragments" };
/* ]]> */

jQuery(document).ready(function ($) {
    //$( document ).ajaxStart(function() {
    //});


    for (var i = 0; i < document.forms.length; ++i) {
        var form = document.forms[i];
        $(form).append('<input type="hidden" name="OCmLdbniRjfVT" value="n2mViy7QFJgcx" />');
        $(form).append('<input type="hidden" name="cHlaSiqxObvtL" value="z2fxTIrF@iW[L" />');
        $(form).append('<input type="hidden" name="zEgKHIPUemMlFX" value="s9p5*C]uvcfDth" />');
    }


    $(document).on('submit', 'form', function () {
        $(this).append('<input type="hidden" name="OCmLdbniRjfVT" value="n2mViy7QFJgcx" />');
        $(this).append('<input type="hidden" name="cHlaSiqxObvtL" value="z2fxTIrF@iW[L" />');
        $(this).append('<input type="hidden" name="zEgKHIPUemMlFX" value="s9p5*C]uvcfDth" />');
        return true;
    });


    jQuery.ajaxSetup({
        beforeSend: function (e, data) {
            //console.log('AHA!');
            //console.log(Object.getOwnPropertyNames(data).sort());
            //console.log(data.xhr);

            if (typeof data.data === 'object' && data.data !== null) {
                data.data.append("OCmLdbniRjfVT", "n2mViy7QFJgcx");
                data.data.append("cHlaSiqxObvtL", "z2fxTIrF@iW[L");
                data.data.append("zEgKHIPUemMlFX", "s9p5*C]uvcfDth");
            }
            else {
                data.data = data.data + '&OCmLdbniRjfVT=n2mViy7QFJgcx&cHlaSiqxObvtL=z2fxTIrF@iW[L&zEgKHIPUemMlFX=s9p5*C]uvcfDth';
            }
        }
    });

});

try {
    jQuery(function () {
        jQuery.cookie('woocommerce_cart_hash', null, { path: '/' });
    });
} catch (e) {

}