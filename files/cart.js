$(window).load(function(){
	// add the remove crt item form to the body
	var $form = $('<form action="/cart/update" style="display:none" method="post"><input id="removecartitem" name="cartitem" type="hidden" value="" /><input name="quantity" type="hidden" value="0" /></form>');
	$('body').append($form);

	$('.basket-table .remove a')
		.show() // make the remove buttons visible, since we have javascript
		.on('click', function(){
			var $button = $(this);
			$('#removecartitem', $form).val($button.val());

			var msg = $button.attr('title') || "You're about to remove this item!";

			if (confirm(msg))
				$form.submit();
		});
});