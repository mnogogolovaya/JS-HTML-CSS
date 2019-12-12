addEventListener("message", function (e) {
	var data = e.data;

	switch (data.cmd) {
		case 'start':
			postMessage("Потом запущен: " + data.msg);
			break;

		case 'stop':
			postMessage("Потом остановлен: " + data.msg);
			close();
			break;

		default:
			postMessage("Неизвестная команда: " + data.msg);
	}
}, true);