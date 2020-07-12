function req(url,data,type="POST"){
	return $.ajax({
		url,
		type,
		data,
		contentType: "application/json",
		dataType: "json",
	})
}