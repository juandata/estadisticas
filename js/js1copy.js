 
 localStorage.clear(); //limpio el almacenamiento local
 var tabla = document.getElementById('tablacuotas');
 var thead = tabla.createTHead();
 var tfoot = tabla.createTFoot();
  var reinicio=0;
   var datosEntrantes1;
   var interruptorCambioEstilo;
  
   thead.setAttribute("id", "thead");
  tfoot.setAttribute("id", "tfoot");
  
     
 function crearTabla () {
   
   
           
    	        var row1 = thead.insertRow(0);    $(function(){$(row1).before("<input type='text' id='myInput' onkeyup='filtrarTabla()' placeholder='Busca el nombre de tu equipo..' title='Busca el equipo'>");}); 

        
    	       //"<i class='fa fa-search' aria-hidden='true'></i>"
              var cell1 = row1.insertCell(0);
              var cell2 = row1.insertCell(1);
              var cell3 = row1.insertCell(2);
              cell3.colSpan ="3"; //asi le agrego colspan al elemento
              var cell4 = row1.insertCell(3);
              var cell5 = row1.insertCell(4);
              var cell6 = row1.insertCell(5);
              var cell7 = row1.insertCell(6); //$(function(){$(cell7).after("<span id= 'cerrarx'>&times<span>");}); //<span class="cerrarventana" onclick="myFunction()">Ã—</span>
              
    	       
    	       
              cell1.innerHTML = "Fecha"; //$(cell1).addClass("fecha");
              cell2.innerHTML = "Estado";
              cell3.innerHTML = "Equipos";
              cell4.innerHTML = "Marcador";
              cell4.colSpan="2";
              cell5.innerHTML = "Local";
              cell6.innerHTML = "Empate";
              cell7.innerHTML = "Visita"; //$(cell7).addClass("cell7"); 
              //head
              //foot
              var rowFoot = tfoot.insertRow(0);
              var cell1F = rowFoot.insertCell(0);
              var cell2F = rowFoot.insertCell(1);
              var cell3F = rowFoot.insertCell(2);
              cell3F.colSpan ="3";
              var cell4F = rowFoot.insertCell(3);
              var cell5F = rowFoot.insertCell(4);
              var cell6F = rowFoot.insertCell(5);
              var cell7F = rowFoot.insertCell(6);
              cell1F.innerHTML = "Fecha";
              cell2F.innerHTML = "Estado";
              cell3F.innerHTML = "Equipos";
              cell4F.innerHTML = "Marcador";
              cell4F.colSpan="2";
              cell5F.innerHTML = "Local";
              cell6F.innerHTML = "Empate";
              cell7F.innerHTML = "Visita";
              //foot
              /*var tbody =  tabla.appendChild(document.createElement('tbody')); //a la tabla le agrego el body que va a generar la API
              
              var rowBody = tbody.insertRow(0);
              var cell1B = rowBody.insertCell(0);
              var cell2B = rowBody.insertCell(1);
              var cell3B = rowBody.insertCell(2);
              var cell4B = rowBody.insertCell(3);
              var cell5B = rowBody.insertCell(4);
              var cell6B = rowBody.insertCell(5);
              var cell7B = rowBody.insertCell(6); 
              var cell8B = rowBody.insertCell(7);
              var cell9B = rowBody.insertCell(8);
              var cell10B = rowBody.insertCell(9);*/
              /*
              
              cell1B.innerHTML = inplayodds['data']['0']['time'];
              cell2B.innerHTML = inplayodds['data']['0']['status'];
              cell3B.innerHTML = inplayodds['data']['0']['homeTeam']['name'];
              cell4B.innerHTML = " vs ";
              cell5B.innerHTML = inplayodds['data']['0']['awayTeam']['name'];
              cell6B.innerHTML = inplayodds['data']['0']['homeTeam']['score'] ;
              cell7B.innerHTML = inplayodds['data']['0']['awayTeam']['score'];
              cell8B.innerHTML = inplayodds['data']['0']['odds']['3']['FT']['home'];
              cell9B.innerHTML = inplayodds['data']['0']['odds']['3']['FT']['draw'];
              cell10B.innerHTML = inplayodds['data']['0']['odds']['3']['FT']['away'];	
              
          var contador;
          var contador1;
           var texto = "";
          for ( contador=0; contador <= inplayodds.lenght; contador ++) {
              
          //a continuaciÃ³n le doy el valor de la salida de la tabla dinÃ¡mica
              cell1B.innerHTML = inplayodds['data']['0']['time'];
              cell2B.innerHTML = inplayodds['data']['0']['status'];
              cell3B.innerHTML = inplayodds['data']['0']['homeTeam']['name'];
              cell4B.innerHTML = " vs ";
              cell5B.innerHTML = inplayodds['data']['0']['awayTeam']['name'];
              cell6B.innerHTML = inplayodds['data']['0']['homeTeam']['score'] ;
              cell7B.innerHTML = inplayodds['data']['0']['awayTeam']['score'];
              cell8B.innerHTML = inplayodds['data']['0']['odds']['3']['FT']['home'];
              cell9B.innerHTML = inplayodds['data']['0']['odds']['3']['FT']['draw'];
              cell10B.innerHTML = inplayodds['data']['0']['odds']['3']['FT']['away'];	
            
            
            
          }
          
              */ /*tbody*/ /* Este es otro metodo para obtener los datos y presentarlos en el DOM. Se usa appendChild en vez de el index del arreglo como arriba
    	     /*   var thead = document.createElement('thead');
    	        tabla.appendChild(thead);
    	        
    	        var tr = document.createElement('tr');
    	        thead.appendChild(tr);
    	        
    	        var th = document.createElement('th');
    	        tr.appendChild(th);
    	        th.textContent= "Fecha";
    	        
    	        var thEstado = document.createElement('th');
    	        tr.appendChild(thEstado);
    	        thEstado.textContent="Estado";
    	        
    	        var thEquipos = document.createElement('th');
    	        tr.appendChild(thEquipos);
    	        thEquipos.textContent="Equipos";
    	        
    	        var thMarcador = document.createElement('th');
    	        tr.appendChild(thMarcador);
    	        thMarcador.textContent="Marcador";
    	        
    	        var thLocal = document.createElement('th');
    	        tr.appendChild(thLocal);
    	        thLocal.textContent="Local";
    	        
    	        var thEmpate = document.createElement('th');
    	        tr.appendChild(thEmpate);
    	        thEmpate.textContent="Empate";
    	        
    	        var thVisita = document.createElement('th');
    	        tr.appendChild(thVisita);
    	        thVisita.textContent="Visita";
    	      
    	        var tbody = document.createElement('tbody');
    	        tabla.appendChild(tbody);
    	        tbody.appendChild(tr);
    	        
    	        var td = document.createElement('td');
    	        
    	        td.textContent= "WAIT..."
    	        
    	       */ 
  } 
  function filtrarTabla() {
  var input, filter, table, tr, td, i, cero=0;;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tablacuotas");
  tr = table.getElementsByTagName("tr");
  tr2 = table.getElementsByTagName("tr");
  tr3 = table.getElementsByTagName("tr");
  td3=tr3[0]; 
 
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2]; td2=tr2[i].getElementsByTagName("td")[4]; //console.log(td3);
    if (td || td2 || td3 ) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        tr2[i].style.display = "";
        tr3[0].style.display=""; 
       
        
      } else {
        tr[i].style.display = "none";
        tr2[i].style.display = "none";
       
      }
    }       
  }
 
}

 //termina funcion crear tabla solo encabezados y foot
 
 //eventos de clic por JDA
   function myFunction () {
     
      crearTabla();
     
$("#cargando").css("display", "inherit");
$.ajax({url: 'https://myanmarunicorn-bhawlone-v1.p.mashape.com/inplayodds', type: 'GET', 
    data: { }, // Additional parameters here
    dataType: 'json',
    success: function(inplayodds, textStatus, xhr ) {  
       console.log(xhr.status);
       if(xhr.status == 200){
           $("#cargando").css("display", "none"); //remplazar cargando por el otro spin
         
         }
         else { if(xhr.status == 404 || xhr.status == 503) {
          window.alert("STATUS 404 or 503 POR JDA, intente de nuevo.");
         }
           
           
         }
      //console.log(inplayodds.status);
    	 console.log(inplayodds.data.length);
    	 var contador=0; 
    	  datosEntrantes1= inplayodds['data'];console.log(datosEntrantes1);
    	  interruptorCambioEstilo=1;
    	 if(contador <= inplayodds.data.length) {
    	  //loop de crear filas dinÃ¡micas
    	    for (contador; contador <= inplayodds.data.length; contador ++ ) {
    	      //console.log("elcontadorcomenzÃ³" + contador);
    	        
          var tbody =  tabla.appendChild(document.createElement('tbody')); //a la tabla le agrego el body que va a generar la API
          var rowBody = tbody.insertRow(0); 
              var cell1B = rowBody.insertCell(0);
              var cell2B = rowBody.insertCell(1); 
              var cell3B = rowBody.insertCell(2);
              var cell4B = rowBody.insertCell(3);
              var cell5B = rowBody.insertCell(4);
              var cell6B = rowBody.insertCell(5);
              var cell7B = rowBody.insertCell(6);
              var cell8B = rowBody.insertCell(7);
              var cell9B = rowBody.insertCell(8);
              var cell10B = rowBody.insertCell(9);
          //a continuaciÃ³n le doy el valor de la salida de la tabla dinÃ¡mica
              
              JSON.stringify(contador);
              //console.log(contador);
              var numero = '0';        
              //cell1B.innerHTML = inplayodds['data'][contador]['time']; 
              cell1B.innerHTML = inplayodds['data'][contador]['time'];
              cell2B.innerHTML = inplayodds['data'][contador]['status']; 
              cell3B.innerHTML = inplayodds['data'][contador]['homeTeam']['name'];
              cell4B.innerHTML = " vs ";
              cell5B.innerHTML = inplayodds['data'][contador]['awayTeam']['name'];
              cell6B.innerHTML = inplayodds['data'][contador]['homeTeam']['score'] ;
              cell7B.innerHTML = inplayodds['data'][contador]['awayTeam']['score'];
              cell8B.innerHTML = inplayodds['data'][contador]['odds']['3']['FT']['home'];
              cell9B.innerHTML = inplayodds['data'][contador]['odds']['3']['FT']['draw'];
              cell10B.innerHTML= inplayodds['data'][contador]['odds']['3']['FT']['away'];	
    	        
    	       
    	    }
    	  } 
    	  
  

//reestablezco el valor de las propiedades despuÃ©s de la transiciÃ³n

    
    },
    error: function(err, textStatus, xhr) { console.log(xhr.status);alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "X4WSEq46EwmshC75O7FdEIlC987Gp1h2zFnjsnDWquuUWtJjb9"); // Enter here your Mashape key
    }
});
} //se crea la primera tabla con clic en la parte frontal de la pÃ¡gina

   function myFunction2 () {
       
    setInterval(function(){
    $.ajax({url: 'https://myanmarunicorn-bhawlone-v1.p.mashape.com/inplayodds', type: 'GET', 
    data: { }, // Additional parameters here
    dataType: 'json',
    success: function(inplayodds){
      window.alert = function() {};
    
    var contador2=0; 
    var contador3=1; 
    var iterador=inplayodds.data.length; 
    
    var longitud= inplayodds.data.length; var c=0; var c3=1; d=1;
   
    var cambioColor=1;
        //recarga de cuotas
       function recargarCuotas(){
      
        
    for (contador2; contador2 <= iterador; contador2 ++, contador3 ++, c++ ) {  
            //JSON.stringify(contador2);
            //console.log(contador2);
              
              
              var cell1B = document.getElementById("tablacuotas").rows[contador3].cells[0]; //console.log(cell1B);
              var cell2B = document.getElementById("tablacuotas").rows[contador3].cells[1]; 
              var cell3B = document.getElementById("tablacuotas").rows[contador3].cells[2];
              var cell4B = document.getElementById("tablacuotas").rows[contador3].cells[3];
              var cell5B = document.getElementById("tablacuotas").rows[contador3].cells[4];
              var cell6B = document.getElementById("tablacuotas").rows[contador3].cells[5];
              var cell7B = document.getElementById("tablacuotas").rows[contador3].cells[6];
              var cell8B = document.getElementById("tablacuotas").rows[contador3].cells[7];
              var cell9B = document.getElementById("tablacuotas").rows[contador3].cells[8];
              var cell10B = document.getElementById("tablacuotas").rows[contador3].cells[9];
              
              
             // console.log(fechaFinal);  //ASÃ CONVIERTO EL TEXTO DE LA FECHA ENTRANTE EN LA HORA COLOMBIANA UTC-5 AUTOMÃTICAMENTE

              //var d = new Date("October 13, 2014 11:13:00"); console.log(d); 
              //console.log(Date()); //creo una nueva fecha con la hora del computador
              //console.log(fecha);
              date1= new Date();//console.log(date1.toUTCString()); //el metodo toUTC... permite convertir la fecha indicada a GMT central time. 
              //console.log(date1.toDateString()) convierte la fecha a un formato mÃ¡s legible. 
              
              
              cell1BAn= tabla.rows[contador3].cells[0].textContent; //cell1BAn= $(cell1B).text(); lo mismo  pero con jquery, mÃ¡s sencillo!!
              cell2BAn= tabla.rows[contador3].cells[1].textContent; 
              cell3BAn= tabla.rows[contador3].cells[2].textContent;
              cell4BAn= tabla.rows[contador3].cells[3].textContent;
              cell5BAn= tabla.rows[contador3].cells[4].textContent;
              cell6BAn= tabla.rows[contador3].cells[5].textContent;
              cell7BAn= tabla.rows[contador3].cells[6].textContent;
              cell8BAn= tabla.rows[contador3].cells[7].textContent;
              cell9BAn= tabla.rows[contador3].cells[8].textContent;
              cell10BAn= tabla.rows[contador3].cells[9].textContent;
              cell1BA = inplayodds['data'][c]['time'];  tiempoPreciso = inplayodds['data'][c]['matchTime'];
              cell2BA = inplayodds['data'][c]['status']; 
              cell3BA = inplayodds['data'][c]['homeTeam']['name']; 
              cell5BA = datosEntrantes1[c]['awayTeam']['name']
              cell6BA = inplayodds['data' ][c]['homeTeam']['score'] ;
              cell7BA = inplayodds['data'][c]['awayTeam']['score'];
              cell8BA = inplayodds['data'][c]['odds']['3']['FT']['home'];
              cell9BA = inplayodds['data'][c]['odds']['3']['FT']['draw'];
              cell10BA= inplayodds['data'][c]['odds']['3']['FT']['away'];
             
                //CLASE TEMPORAL QUE ELINMINA LA CLASE EJEMPLO QUE GENERA LA ANIMACIÃ“N SOBRE EL CAMBIO DE CUOTA
              (function($){
             
               $.fn.extend({ 
      addTemporaryClass: function(className, duration) {
            var elements = this;
            setTimeout(function() {
                elements.removeClass(className);
            }, duration);

            return this.each(function() {
                $(this).addClass(className);
            });
        }
    });})(jQuery);
               
              window.alert = function() {};
              fecha= $(cell1B).text();
              fechaFinal= new Date(fecha);
              tiempoPreciso = new Date(tiempoPreciso);
              horaPartido= tiempoPreciso.getHours(); 
              minutosPartido= tiempoPreciso.getMinutes(); //console.log(minutosPartido);
              
              horaActual= new Date();
              horaActualHora= horaActual.getHours(); 
              minutosActuales= horaActual.getMinutes(); 
             cell2B.innerHTML = inplayodds['data'][contador2]['status']; 
              estado= $(cell2B).text()
               horaPartidoActual= horaActualHora - horaPartido; 
                minutosPartidoActual = minutosActuales - minutosPartido; 
                  if (estado == "NS" || estado == "HT" ){
               cell1B.innerHTML = fechaFinal; 
              } else {
               cell1B.innerHTML = tiempoPreciso; 
               
              }
              
              if(estado != "NS" && estado != "FT" && estado != "HT" && estado != "2H") {
                        liveMinutes1h0 =  minutosActuales - minutosPartido ;
                             if (horaPartidoActual == 0) {
                       
                             $(cell2B).append(" Min:" +  liveMinutes1h0 + "<br/>" ); //console.log(liveMinutes0);
                             $(cell2B).append("<span class='live'>en vivo</span>");
                                  }
                                      if(horaPartidoActual == 1) {
                                      liveMinutes1h1=  60 - minutosPartido + minutosActuales;
                                      $(cell2B).append(" Min:" + liveMinutes1h1 +"<br/>"  ); 
                                        $(cell2B).append("<span class='live'>en vivo</span>");
                                      }
                      
                       }
               
              if(estado == "2H"){
                liveMinutes2h0 =  minutosActuales - minutosPartido ;
                             if (horaPartidoActual == 0) {
                              liveMinutes2h0 += 45;
                             $(cell2B).append(" Min:" + liveMinutes2h0 + "<br/>" ); //console.log(liveMinutes0);
                              $(cell2B).append("<span class='live'>en vivo</span>");
                                  }
                                      if(horaPartidoActual == 1) {
                                      liveMinutes2h1=  60 - minutosPartido + minutosActuales;
                                      liveMinutes2h1 += 45; 
                                      $(cell2B).append(" Min:" +  liveMinutes2h1 + "<br/>"  ); 
                                     
                                      $(cell2B).append("<span class='live'>en vivo</span>");
                                      }
                
                
              }
              
              cell3B.innerHTML = inplayodds['data'][contador2]['homeTeam']['name']; //console.log(cell3B);
              cell4B.innerHTML = " vs ";
              cell5B.innerHTML = inplayodds['data'][contador2]['awayTeam']['name'];
              cell6B.innerHTML = inplayodds['data'][contador2]['homeTeam']['score'] ;
              cell7B.innerHTML = inplayodds['data'][contador2]['awayTeam']['score'];
              cell8B.innerHTML = inplayodds['data'][contador2]['odds']['3']['FT']['home'];
              cell9B.innerHTML = inplayodds['data'][contador2]['odds']['3']['FT']['draw'];
              cell10B.innerHTML= inplayodds['data'][contador2]['odds']['3']['FT']['away']; 
              
              // if(cell1BAn == cell1BA ){} else{$(cell1B).addTemporaryClass("ejemplo", 4000);}
                if(cell2BAn == cell2BA ){} else{$(cell2B).addClass("ejemplo3");}
                if(cell6BAn == cell6BA ){} else{$(cell6B).addTemporaryClass("ejemplo2", 4000);}
                if(cell7BAn == cell7BA ){} else{$(cell7B).addTemporaryClass("ejemplo2", 4000);}
                if(cell8BAn == cell8BA ){} else{$(cell8B).addTemporaryClass("ejemplo", 4000);}
                if(cell9BAn == cell9BA ){} else{$(cell9B).addTemporaryClass("ejemplo", 4000);}
                if(cell10BAn == cell10BA ){} else{  $(cell10B).addTemporaryClass("ejemplo", 4000); }
              }
            
       }
       
       recargarCuotas();
      
     
          //console.log('cada 3 segundos al principio')
     
   
    console.log('cada 3 segundos al final')
    }, error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "X4WSEq46EwmshC75O7FdEIlC987Gp1h2zFnjsnDWquuUWtJjb9"); // Enter here your Mashape key
    }
});
    }, 3000);   
}
  
  function partidosVivo(){
      var row1 = thead.insertRow(0);    $(function(){$(row1).before("<input type='text' id='myInput' onkeyup='filtrarTabla()' placeholder='Busca el nombre de tu equipo..' title='Busca el equipo'>");}); 
        
    	       //"<i class='fa fa-search' aria-hidden='true'></i>"
              var cell1 = row1.insertCell(0);
              var cell2 = row1.insertCell(1);
              cell2.colSpan ="3";
              var cell3 = row1.insertCell(2);
               //asi le agrego colspan al elemento
              var cell4 = row1.insertCell(3);
              var cell5 = row1.insertCell(4);
              var cell6 = row1.insertCell(5);
              var cell7 = row1.insertCell(6); //$(function(){$(cell7).after("<span id= 'cerrarx'>&times<span>");}); //<span class="cerrarventana" onclick="myFunction()">Ã—</span>
              
    	       
    	       
              cell1.innerHTML = "Estado"; //$(cell1).addClass("fecha");
              cell2.innerHTML = "Equipos";
              cell2.colSpan="2";
              cell3.innerHTML = "Marcador";
               cell3.colSpan="2";
              cell4.innerHTML = "Local";
              cell5.innerHTML = "Empate";
              cell6.innerHTML = "Visita";
              cell7.innerHTML = "MÃ¡s"; //$(cell7).addClass("cell7"); 
              //head
              //foot
              var rowFoot = tfoot.insertRow(0);
              var cell1F = rowFoot.insertCell(0);
              var cell2F = rowFoot.insertCell(1); 
               cell2F.colSpan ="2";
              var cell3F = rowFoot.insertCell(2);
             
              var cell4F = rowFoot.insertCell(3);
              var cell5F = rowFoot.insertCell(4);
              var cell6F = rowFoot.insertCell(5);
              var cell7F = rowFoot.insertCell(6);
              cell1F.innerHTML = "Estado";
              cell2F.innerHTML = "Equipos";
              cell3F.innerHTML = "Marcador";
              cell3F.colSpan="2";
              cell4F.innerHTML = "Local";
              
              cell5F.innerHTML = "Empate";
              cell6F.innerHTML = "Visita";
              cell7F.innerHTML = "MÃ¡s";
              //foot
    
              //ajax conexiÃ³n por JDA
              setInterval(function(){
              $.ajax({url: 'https://myanmarunicorn-bhawlone-v1.p.mashape.com/inplayodds', type: 'GET', 
    data: { }, // Additional parameters here
    dataType: 'json',
    success: function(inplayodds, textStatus, xhr ) {  
      console.log(arguments);
       console.log(xhr.status);
       if(xhr.status == 200){
           $("#cargando").css("display", "none"); //remplazar cargando por el otro spin
         
         }
         else { if(xhr.status == 404 || xhr.status == 503) {
          window.alert("STATUS 404 or 503 POR JDA, intente de nuevo.");
         }
           
           
         }
      var contador=0; 
    	 contador3=1;
    	 c=0;
    	  datosEntrantes1= inplayodds['data'];//console.log(datosEntrantes1);
    	  interruptorCambioEstilo=1;
    	 if(contador <= inplayodds.data.length) {
    	  //loop de crear filas dinÃ¡micas
    	    for (contador; contador <= inplayodds.data.length; contador ++, contador3 ++, c++ ) {
    	      
                  estado = inplayodds['data'][contador]['status'];
          if(estado == "HT" || estado == "1H" || estado == "2H"){
               	        
          var tbody =  tabla.appendChild(document.createElement('tbody')); //a la tabla le agrego el body que va a generar la API
          var rowBody = tbody.insertRow(0); 
              var cell1B = rowBody.insertCell(0);
              var cell2B = rowBody.insertCell(1); 
              var cell3B = rowBody.insertCell(2);
              var cell4B = rowBody.insertCell(3);
              var cell5B = rowBody.insertCell(4);
              var cell6B = rowBody.insertCell(5);
              var cell7B = rowBody.insertCell(6);
              var cell8B = rowBody.insertCell(7);
              var cell9B = rowBody.insertCell(8);
          //a continuaciÃ³n le doy el valor de la salida de la tabla dinÃ¡mica
              
              JSON.stringify(contador);
              //console.log(contador);
              var numero = '0';        
              //cell1B.innerHTML = inplayodds['data'][contador]['time']; 
              cell1B.innerHTML = inplayodds['data'][contador]['status']; //console.log(cell1B);
              cell2B.innerHTML = inplayodds['data'][contador]['homeTeam']['name']; 
              cell3B.innerHTML = inplayodds['data'][contador]['awayTeam']['name'];
              cell4B.innerHTML = inplayodds['data'][contador]['homeTeam']['score'] ;
              cell5B.innerHTML = inplayodds['data'][contador]['awayTeam']['score'];
              cell6B.innerHTML = inplayodds['data'][contador]['odds']['3']['FT']['home'];
              cell7B.innerHTML = inplayodds['data'][contador]['odds']['3']['FT']['draw'];
              cell8B.innerHTML = inplayodds['data'][contador]['odds']['3']['FT']['away'];
              
              //VALOR DE LAS CELDAS ALMACENADAS COMO STRING PARA PODERLAS COMPARAR POSTERIORMENTE Y APLICAR LAS CLASES DE ESTILO DE CAMBIO .CSS. 
              cell1BAc = inplayodds['data'][contador]['status']; //console.log(cell1B);
              cell2BAc = inplayodds['data'][contador]['homeTeam']['name']; 
              cell3BAc = inplayodds['data'][contador]['awayTeam']['name'];
              cell4BAc = inplayodds['data'][contador]['homeTeam']['score'] ;
              cell5BAc   = inplayodds['data'][contador]['awayTeam']['score'];
              cell6BAc = inplayodds['data'][contador]['odds']['3']['FT']['home'];
              cell7BAc = inplayodds['data'][contador]['odds']['3']['FT']['draw'];
              cell8BAc = inplayodds['data'][contador]['odds']['3']['FT']['away'];
               
               
               //ACTUALIZACIÃ“N DE DATOS
               
              cell1BAn= tabla.rows[contador3].cells[0].textContent; //cell1BAn= $(cell1B).text(); lo mismo  pero con jquery, mÃ¡s sencillo!!
              cell2BAn= tabla.rows[contador3].cells[1].textContent; //console.log(cell2BAn); 
              cell3BAn= tabla.rows[contador3].cells[2].textContent;
              cell4BAn= tabla.rows[contador3].cells[3].textContent;
              cell5BAn= tabla.rows[contador3].cells[4].textContent;
              cell6BAn= tabla.rows[contador3].cells[5].textContent;
              cell7BAn= tabla.rows[contador3].cells[6].textContent;
              cell8BAn= tabla.rows[contador3].cells[7].textContent;
              //cell9BAn= tabla.rows[contador3].cells[8].textContent;
              //cell10BAn= tabla.rows[contador3].cells[9].textContent;
              
              /*
              cell1B= inplayodds['data'][c]['status'];
              cell2B = inplayodds['data'][c]['homeTeam']['name']; 
              cell3B = inplayodds['data'][c]['awayTeam']['name'];
              cell4B = inplayodds['data'][c]['homeTeam']['score'] ;
              cell5B = inplayodds['data'][c]['awayTeam']['score'];
              cell6B = inplayodds['data'][c]['odds']['3']['FT']['home'];
              cell7B = inplayodds['data'][c]['odds']['3']['FT']['draw'];
              cell8B = inplayodds['data'][c]['odds']['3']['FT']['away'];*/
                 //CLASE TEMPORAL QUE ELINMINA LA CLASE EJEMPLO QUE GENERA LA ANIMACIÃ“N SOBRE EL CAMBIO DE CUOTA
             (function($){
             
               $.fn.extend({ 
      addTemporaryClass: function(className, duration) {
            var elements = this;
            setTimeout(function() {
                elements.removeClass(className);
            }, duration);

            return this.each(function() {
                $(this).addClass(className);
            });
        }
    });})(jQuery);
                    if(cell4BAn == cell4BAc ){} else{$(cell4B).addTemporaryClass("ejemplo2", 4000);console.log(cell4BAn);console.log(cell4B);}
                    if(cell5BAn == cell5BAc ){} else{$(cell5B).addTemporaryClass("ejemplo", 4000);}
                    if(cell6BAn == cell6BAc ){} else{$(cell6B).addTemporaryClass("ejemplo", 4000);}
                    if(cell7BAn == cell7BAc ){} else{  $(cell7B).addTemporaryClass("ejemplo", 4000); }
                   if(cell8BAn == cell8BAc ){} else{  $(cell8B).addTemporaryClass("ejemplo", 4000); }

    	        
    	        //console.log(tbody);
          }
    	    }
    	  } 
          
  

//reestablezco el valor de las propiedades despuÃ©s de la transiciÃ³n

    
    },
    error: function(err, textStatus, xhr) { console.log(xhr.status);alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "X4WSEq46EwmshC75O7FdEIlC987Gp1h2zFnjsnDWquuUWtJjb9"); // Enter here your Mashape key
    }
});
              },3000);
    
    
    }
    
    
    
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active"); 

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {  //SE ESCONDE EL SIGUIENTE ELEMENTO CON DISPLAY NONE ABAJO
            panel.style.display = "none";
        } else {
            panel.style.display = "block"; 
        }
    }
}

   $(function(){ //me aseguro que el  documento estÃ© cargado con el shortcut
    $("#cerrarx").click(function(){ //llamo una funciÃ³n clic al elemento boton, similar a onclick="myFunction() de javascript"
      $("#tablacuotas").toggleClass("tablaCuotasCambio"); //coloco el id del elemento que quiero iterar y aÃ±ado el mÃ©todo toggelClass, con el cual me comunico con CSS
      });
  
  });
  
  
  
  
  
    
