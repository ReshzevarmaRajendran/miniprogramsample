$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Previous',
            next : 'Next Step',
            finish : 'Done',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
			var displaydate = (new Date()).toLocaleString('en-GB');
			var yyyymmdd = (new Date()).toISOString().slice(0,10).replace(/-/g,"");
			var amount = $('#amount').val();

            $('#trxno-val').text("transactionno" + yyyymmdd);
            $('#refno-val').text("referenceno" + yyyymmdd);
            $('#datetime-val').text(displaydate);
            $('#amount-val').text(amount);
			
			if (currentIndex == 1) {
				location.href = 'https://m-sd.tngdigital.com.my/s/cashier/index.html?bizNo=20210105211212800110171205700861110&timestamp=1609831054148&merchantId=217120000000451271872&sign=nNhzE8xo7qyhrD%252B%252BdL3Mv5CLFQFkNnoD%252BbgLXCqcSCA1SphFkcteJCro2fptgrGF2CK54XxRgnvS0xC5nAOgfOwAo5x%252FEVJvBBFXPj71oNTprv1URFI5ru%252Bc5Qa4QedrwKJhVctxP5OxfcOlkr%252F9pGVEGmNG0kkD6VjrAVeQoEdvqx%252FjcTMfcUrJ9FauLFox3k%252BdGITxgzG7%252FOeQSvZ6abPxPEiv1XVQQd7RJLTYI15aDhmSwCBh%252FmrvGsmV8Aol051%252F%252FeVfllj5rVE3DfexN4kvXzXAbP%252Fol9hiJrxN%252FviNlfYN1im5lKXAIUoJ%252F3dNMZHxa106bZKYmUQytHCNhw%253D%253D';
			}
            return true;
        }
    });
    $("#date").datepicker({
        dateFormat: "MM - DD - yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-chevron-down"></i>',
    });
});
