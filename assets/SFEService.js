  
  
  
  
  
  

  function cHeadersSFE() {
      return {
          'Authorization': `Basic ${btoa(`Farmacorp:P@$$w0rDS3cr3t2024*#`)}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      };
  }

 function getFacturas(fechaVenta, transaccionId, nroFactura, factuDocIdType, factuDocId){    
    
    var paramObject = {
        transaccionId: transaccionId,
        factuNumero: nroFactura,
        factuDocId: factuDocId,    
        fechaVenta: fechaVenta,
        factuDocIdType: factuDocIdType,
        pageIndex: 1,
        pageSize: 1000
    };
    var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apifarmasfedocs/api/v1/invoices/search`,
            type:'post',
           	crossDomain: true,
         	async: true,
            headers: cHeadersSFE(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
            	resolve(data); 
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }


 function downloadFactura( transaccionId, idVenta){    
    var paramObject = {
        transaccionId: transaccionId,
        idVenta: idVenta,
    };
    var sData = JSON.stringify(paramObject);
   
    jQuery.ajax({
                 url: `https://apicloud.farmacorp.com/apifarmasfedocs/api/v1/invoices/pdf`,
                type:'POST',
                headers: cHeadersSFE(),
                data: sData ,
       			xhr: function () {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 2) {
                            if (xhr.status == 200) {
                                xhr.responseType = "blob";
                            } else {
                                xhr.responseType = "text";
                            }
                        }
                    };
                    return xhr;
                },
                success: function (data) {
                    var blob = new Blob([data], { type: "application/octetstream" });
					var filename = transaccionId+".pdf"
                    var isIE = false || !!document.documentMode;
                    if (isIE) {
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        var url = window.URL || window.webkitURL;
                       	var link=document.createElement('a');
                        link.href=url.createObjectURL(blob);
                        link.download=filename;
                        link.click();
                    }
                }
            });

  }

  function downloadXML( transaccionId, idVenta){    
    
    var paramObject = {
        transaccionId: transaccionId,
        idVenta: idVenta,
    };
    var sData = JSON.stringify(paramObject);
   
    jQuery.ajax({
                 url: `https://apicloud.farmacorp.com/apifarmasfedocs/api/v1/invoices/xml`,
                type:'POST',
                headers: cHeadersSFE(),
                data: sData ,
      			success: function(data) {
                  var filename = transaccionId+".xml"
                  var xml= new XMLSerializer().serializeToString(data.documentElement);
                  var blob = new Blob([xml], { type: "application/xml" });
                  var link=document.createElement('a');
                  link.href=window.URL.createObjectURL(blob);
                  link.download=filename;
                  link.click();
                }
            });
  }