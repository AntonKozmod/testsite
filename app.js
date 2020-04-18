var main = function () {
	"use strict";
	$(".tabs a span").toArray().forEach(function (element) {
		// создаем обработчик щелчков для этого элемента
		$(element).on("click", function() {
			// поскольку мы используем версию элемента jQuery,
			// нужно создать временную переменную, 
			// чтобы избежать постоянного обновления
			var $element = $(element);
			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			if ($element.parent().is(":nth-child(1)")) {
				console.log("Щелчок на первой вкладке!");
			} else if ($element.parent().is(":nth-child(2)")) {
				console.log("Щелчок на второй вкладке!");
			} else if ($element.parent().is(":nth-child(3)")) {
				console.log("Щелчок на третьей вкладке!");
			}
			return false;
		});
	});
};
$(document).ready(main);