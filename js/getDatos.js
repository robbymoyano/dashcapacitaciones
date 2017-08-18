function llamadaAjax(url) {
	 $('#example tbody').empty();
    $.ajax({
        type : "GET",
        dataType : "xml",
        url : url,
        cache:false,
        async : true, // blocks window close
        timeout: 120000, // sets timeout to 120 seconds
        success : function(xml) {
            $(xml).find('PerformaceProveedor').each(
                function() {
                    var proveedor = $(this).find('proveedor').text();
                    var idProveedor = $(this).find('idproveedor').text();

                   	var n = $(this).find('valores').text().split(",");
                    var c = $(this).find('colores').text().split(",");
					
                    $("#contenidoTabla").append(
                        '<tr data-proveedor="' + proveedor
                        + '" ><td class="success grupo">' + proveedor
                        + '</td><td class="' + c[0]
                        + '">' + n[0]
                        + '</td><td class="'+c[1]+'">'
                        + n[1] + '</td> <td class="'
                        + c[2]
                        + '">' + n[2]
                        + '</td><td class="'
                        + c[3]
                        + '" >' + n[3]
                        + '</td><td class="'
                        + c[4] + '">'
                        + n[4] + '</td></tr>').fadeIn(
                        'slow');
                });

			
			 $(xml).find('performaceProveedor').each(
                function() {
                    var proveedor = $(this).find('proveedor').text();
                    var idProveedor = $(this).find('idproveedor').text();

                   	var n = $(this).find('valores').text().split(",");
                    var c = $(this).find('colores').text().split(",");
					
                    $("#contenidoTabla").append(
                        '<tr data-proveedor="' + proveedor
                        + '" ><td class="success grupo">' + proveedor
                        + '</td><td class="' + c[0]
                        + '">' + n[0]
                        + '</td><td class="'+c[1]+'">'
                        + n[1] + '</td> <td class="'
                        + c[2]
                        + '">' + n[2]
                        + '</td><td class="'
                        + c[3]
                        + '" >' + n[3]
                        + '</td><td class="'
                        + c[4] + '">'
                        + n[4] + '</td></tr>').fadeIn(
                        'slow');
                });

			
            $("#contenidoTabla tr .verde").animate({
                "background-color" : "#5cb85c"
            });

            $("#contenidoTabla tr .amarillo").animate({
                "background-color" : "#f0ad4e"
            });

            $("#contenidoTabla tr .rojo").animate({
                "background-color" : "#d9534f"
            });
        },

        beforeSend : function() {

        },

        error : function() {
            
        }
    });
};