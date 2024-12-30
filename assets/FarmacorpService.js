  
  
  

  function cHeaders(){
    return 	{
      'Authorization':`Basic ${btoa(`79716b858c8c1a4fc9acdd3af6acdeb3c7cfc979:be70df962967ae1c995f91f5758845c5b348c660`)}`,
         		'Content-Type':'application/json'
        	};
  }

  function uHeaders(){
    
   if(!localStorage.as)
      window.location.href = '/account/logout';
    return 	{
          		'Authorization':`Bearer ${ JSON.parse(atob(JSON.parse(localStorage.as).gbl)).access_token}`,
         		'Content-Type':'application/json'
        	};
  }

  var jquery = null;
  if (window.jQuery) {
    jquery = window.jQuery;
  } 

  jquery(document).ready(function(){	
    pingService();
  });

  function pingService(){
  
    /*
    getAvailabilityStockRegion('0','0','city')
    .then(function(data) { 
      	//verifyAvailability(data.data, city);
    }).catch(function(err) {
        console.log(err);
    }); 
    */
    
    /*
    getTokenApi()
    .then(function(data) { 
      localStorage["at"] = JSON.stringify({ gbl : btoa(JSON.stringify(data)) });
    }).catch(function(err) {
        console.log(err);
    });  
    */
    
  }

  function getTokenApi(){    
     return new Promise(function(resolve, reject) {
       
       var token = `79716b858c8c1a4fc9acdd3af6acdeb3c7cfc979:be70df962967ae1c995f91f5758845c5b348c660`;
       var hash = btoa(token); 
       jQuery.ajax({
            url: 'https://apicloud.farmacorp.com/apishopify/api/identity/v1/token',
            type:'post',
         	async: false,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
         	  'Authorization':'Basic '+ hash,
            },
            data: {
                   'grant_type' : 'client_credentials'
            } ,
            contentType: 'application/x-www-form-urlencoded',
            success: function(data) {
        		 if(data.data)
                  {
                      resolve(data) 
                  }else
                  {
                     if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
                  }
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

  function getAvailabilityStockSucursal(codigo, filtro){    
    
  
    var paramObject = {
      handleId : codigo
    };
    var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v2.0/mobile/catalog/product/availability/sucursal`,
            type:'post',
         	async: true,
            headers: cHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
               
      
              resolve(data) ;
 
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }


  function Api_Credenciales() {
      const credentials = {
        grant_type: 'password',
        client_id: '3MVG9SnjeJhUwbWETVN2Ppsrimr1iwiW3suathkPspkCrYblE1QQZlMRrBsAq3.9J.RKAi0YbUG0ZW_yhUxAT',
        client_secret: '7B7B12C1EF91B4ACF72B29F94050393235DA226F883B7B417F78508AC13F8789',
        username: 'djustinianoy@farmacorp.com.sandboxtes',
        password: 'Ventasfarma2020ChNUp1rbabhc6bxajFhLdji3c'
      }
      return credentials;
  }

  

  function isValidGUID(guid) {
      const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      return guidRegex.test(guid);
  }
    
  function getAvailabilityStockRegion_ant(productoId, varianteId, ciudad){  
    
     var paramObject = {
      idProducto : productoId,
      idVariant : varianteId,
      ciudad : ciudad
    };
    var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/mobile/catalog/product/regional/availabity`,
            type:'post',
         	async: true,
            headers: cHeaders(),
 			data: sData,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
        		  if(isValidGUID(productoId))
                  {
                    console.log(data);
                     //resolve(data); 
                  }else
                  {              
                    if(data.data>=0)
                    {
                        resolve(data) 
                    }else
                    {
                      /*
                       if((data.errors) && (data.errors.length>0))
                       {
                      	alert(data.errors[0].message);
                       }*/
                       alert('Error2');
                    }
                  }
      		},
      		error: function(err) {
                alert('Error');
        		reject(err);
     		}
    	});
    });
   
  }
    
  function getCiudades(){    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/ezeus/api/v1.0/location/setting/ciudades`,
            type:'get',
         	async: false,
            headers: cHeaders(),
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
        		 if(data.data)
                  {
                      resolve(data) 
                  }else
                  {
                    if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
                  }
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

  function getServicios(){  
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/location/setting/services`,
            type:'get',
         	async: false,
            headers: cHeaders(),
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
        		 if(data.data)
                  {
                      resolve(data) 
                  }else
                  {
                    if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
                  }
      		},
      		error: function(err) {
              setTimeout(location.reload(), 2000);
        	  reject(err)
     		}
    	});
    });
  }

  function getSucursales(keyRegion){   
 
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
         url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/location/web/${keyRegion}`,
            type:'get',
         	async: false,
            headers: cHeaders(),
            contentType: 'application/json;charset=utf-8',
            success: function(response) {
        		 //if(data.data)
                 //{
                      resolve(response) 
                 // }else
                 // {
                 //    if((data.errors) && (data.errors.length>0))
                 //   	alert(data.errors[0].message);
                 // }
      		},
      		error: function(err) {
        		reject(err);
     		}
    	});
    }); 
  }

  function getTokenUsuario(username, password){    

     return new Promise(function(resolve, reject) {       
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/identity/v1/web/token`,
            type:'post',
         	async: false,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
              'username' : username,
              'password' : password,
              'grant_type' : 'password'
            },
            contentType: 'application/x-www-form-urlencoded',
            success: function(data) {
                
                if(data.access_token)
                  {
                     localStorage["as"] = JSON.stringify({ gbl :btoa(JSON.stringify(data)) });
              
                      var now = new Date();
                      now.setSeconds(now.getSeconds() + data.expires_in);
                      now = new Date(now); 

                      localStorage["next"] = now;
                      resolve(data) 
                  }
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

  function refreshTokenUsuario(){
    
    var refresh_token =  `${ JSON.parse(atob(JSON.parse(localStorage.as).gbl)).refresh_token}`;
     return new Promise(function(resolve, reject) {       
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/identity/v1/web/token`,
            type:'post',
         	async: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
              'refresh_token' : refresh_token,
              'grant_type' : 'refresh_token'
            },
            contentType: 'application/x-www-form-urlencoded',
            success: function(data) {
               if(data.access_token)
                  {
                     localStorage["as"] = JSON.stringify({ gbl :btoa(JSON.stringify(data)) });
              
                      var now = new Date();
                      now.setSeconds(now.getSeconds() + data.expires_in);
                      now = new Date(now); 

                      localStorage["next"] = now;
                      resolve(data) 
                  }
              },
              error: function(err) {
                  reject(err)
              }
    	});
    });
  }

  function changePassword(oldPassword, password, confirmPassword){    
    
    var paramObject = {
      oldPassword : oldPassword,
      password : password,
      confirmPassword : confirmPassword
    };
    var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/account/changepassword`,
            type:'post',
         	async: false,
            headers: uHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
        	  if(data.data)
              {
                 resolve(data.data) 
              }else
              {
              	 if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
              }
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }
  
  function getPointsFarmaclub(idFarmacorp, idCliente, idGrupo){    
    
      var paramObject = {
        idFarmacorp: idFarmacorp,
        idCliente: idCliente,
        idGrupo: idGrupo
     };
    
     var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/account/summary/points`,
            type:'post',
            async: false,
            headers: uHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
        	                
              if(data.data)
              {
                 resolve(data.data) 
              }else
              {
              	 if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
              }
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

  function updateCustomer(nombres, apellidos, celular, email){    
     var paramObject = {
      	first_name : nombres,
      	last_name : apellidos,
      	phone : celular,
        email : email
     };
    
     var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/account/update`,
            type:'post',
            async: false,
            headers: uHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
              
              if(data.data)
              {
                  resolve({ ok : true}) 
              }else
              {
              	 if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
              }
            
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

  function direccionEliminar(idClienteShopify, idAddress, isDefault) {    
     var paramObject = {
      id: idAddress,
      customerId: idClienteShopify,
      default: isDefault
     };
    
     var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
         url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/customer/address/delete`,
            type:'post',
            async: false,
            headers: uHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
              if(data.data)
              {
                resolve({ ok : true}) 
              }else
              {
              	 if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
              }
        		
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

  function upsertDireccionCliente(idClienteShopify, address1, address2, city, phone, firstName, lastName, idAddress, isDefault, zoom,latitud, longitud){    
    
    var paramObject = {
      customerId: idClienteShopify,
      id: idAddress,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      city: city,
      address: address1,
      reference: address2,
      zoom: zoom,
      latitud: latitud,
      longitud: longitud,
      default: isDefault
    };
    var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/customer/address/store`,
            type:'post',
         	async: true,
            headers: cHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
        	  if(data.data)
              {
                resolve({ ok : true}) 
              }else
              {
              	 if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
              }
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

  function associateFarmaclub(nombres, apellidos, email, celular, fechaNacimiento, cedula, idClienteShopify, userEmail) {    
     var paramObject = {
      	nombres : nombres,
      	apellidos : apellidos,
      	email : email,
        userEmail : userEmail,
        celular: celular,
        fechaNacimiento:fechaNacimiento,
        cedula : cedula,
        idClienteShopify : idClienteShopify
     };
    
     var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/account/vinculate`,
            type:'post',
            async: false,
            headers: uHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
        		
              if(data.data)
              {
                resolve(data.data) 
              }else
              {
              	 if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
              }
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

function associateFarmaclubV2(nombres, apellidos, email, celular, fechaNacimiento, cedula, idClienteShopify, userEmail) {    
     var paramObject = {

        customerId: idClienteShopify,
        nombres: nombres,
        apellidos: apellidos,
        email: email,
        celular: celular,
        cedula: cedula
     };
    
     var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v2.0/account/vinculate`,
            type:'post',
            async: true,
            headers: uHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
   
                resolve(response); 
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

 function getCobertura(latitud, longitud, ciudad){   
   
    var paramObject = {latitud:latitud, longitud : longitud,ciudad:ciudad } ;
    
     var sData = JSON.stringify(paramObject);
   
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v2.0/order/validate/cobertura`,
            type:'post',
         	async: false,
            headers: cHeaders(),
         	data:  sData,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
        		 if(data)
                  {
                      resolve(data) 
                  }else
                  {
                    if((data.errors) && (data.errors.length>0))
                    	alert(data.errors[0].message);
                  }
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }


function attachFarmaclub(cedula, idFarmacorp) {    
     var paramObject = {
        idFarmacorp: idFarmacorp,
        docId: cedula
     };
    
     var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/account/attach`,
            type:'post',
            async: true,
            headers: uHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
   
                resolve(response); 
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }

  
function loginExternalProvider(provider, token, id, firstName, lastName, email) {    
     var paramObject = {
        provider: provider,
        token: token,
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email
     };
    
     var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v1.0/account/login/external/provider`,
            type:'post',
            async: false,
            headers: {
                'Content-Type':'application/json'
              },
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                  if(response.data.token.access_token)
                  {
                     localStorage["as"] = JSON.stringify({ gbl :btoa(JSON.stringify(response.data.token)) });
              
                      var now = new Date();
                      now.setSeconds(now.getSeconds() + response.data.token.expires_in);
                      now = new Date(now); 

                      localStorage["next"] = now;
                    
                      resolve(response); 
                  }
               
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }
 
function getOrdenes(idCustomer, limit, status, financialStatus, fulfillmentStatus, pageInfo, PageInfoBack) {    
     var paramObject = {
        limit: limit,
        status: status,
        financialStatus: financialStatus,
        fulfillmentStatus: fulfillmentStatus,
        pageInfo:pageInfo,
        pageInfoBack:PageInfoBack
     };
    
     var sData = JSON.stringify(paramObject);
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v2.0/account/ordersbycustomerid/${idCustomer}`,
            type:'post',
            async: false,
            headers: uHeaders(),
            data: sData ,
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                 resolve(response.data); 
               
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }


  function getPayQr(orderId) {    
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v2.0/order/pay/qr/${orderId}`,
            type:'get',
            async: true,
            headers: uHeaders(),
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
              console.log(response);
                 resolve(response.data); 
               
      		},
      		error: function(err) {
        		/*  resolve({

                    hash : "data:image/png;base64,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"
                  }); */
              reject(err);
     		}
    	});
    });
  }


    function verifyPayQr(orderId) {    
    
     return new Promise(function(resolve, reject) {
       jQuery.ajax({
            url: `https://apicloud.farmacorp.com/apishopify/api/v2.0/order/pay/verify/${orderId}`,
            type:'get',
            async: false,
            headers: uHeaders(),
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                 resolve(response.data); 
               
      		},
      		error: function(err) {
        		reject(err)
     		}
    	});
    });
  }
  

 
  



