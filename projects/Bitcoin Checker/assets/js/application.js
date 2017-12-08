var current_price = null;
$(function(){
	var price_URL = "https://blockchain.info/ticker";
	$.getJSON( price_URL, function(data) {
		current_price = data.USD.last; 
		$("#current_price").append("1 BTC : " + data.USD.last + data.USD.symbol);
	});
	$("#btc_button").click(function(event) {
		var usd = $("#usd").val();
		var usd_btc_URL = "https://blockchain.info/tobtc";
		$.get(usd_btc_URL , {currency :"USD" , value:usd} , function(data){
			$("#btc").empty();
			$("#btc").append(data+" BTC");
		});
	});
});
