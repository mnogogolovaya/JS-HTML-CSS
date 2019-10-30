$(function() {
	$('.folder').draggable();
	$('.basket').droppable({ drop:function() {
		$('.ui-draggable-dragging').remove();
	}});
});