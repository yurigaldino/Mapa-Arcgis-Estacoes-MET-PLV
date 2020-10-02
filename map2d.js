      // var hora_data = [0: Dia, 1: Mês, 2: Ano, 3: Hora]
      // var hora_data_bairros = [0: Vidigal(0: Dia, 1: Mês, 2: Ano, 3: Hora), 1: Urca(4: Dia, 5: Mês, 6: Ano, 7: Hora), 2: Rocinha(8: Dia, 9: Mês, 10: Ano, 11: Hora), 3: Tijuca(12: Dia, 13: Mês, 14: Ano, 15: Hora), 4: Santa Teresa(16: Dia, 17: Mês, 18: Ano, 19: Hora), 5: Copacabana(20: Dia, 21: Mês, 22: Ano, 23: Hora), 6: Grajaú(24: Dia, 25: Mês, 26: Ano, 27: Hora), 7: Ilha do Governador(28: Dia, 29: Mês, 30: Ano, 31: Hora), 8: Penha(32: Dia, 33: Mês, 34: Ano, 35: Hora), 9: Madureira(36: Dia, 37: Mês, 38: Ano, 39: Hora), 10: Irajá(40: Dia, 41: Mês, 42: Ano, 43: Hora), 11: Bangu(44: Dia, 45: Mês, 46: Ano, 47: Hora), 12: Piedade(48: Dia, 49: Mês, 50: Ano, 51: Hora), 13: Jacarepaguá/Tanque(52: Dia, 53: Mês, 54: Ano, 55: Hora), 14: Saúde(56: Dia, 57: Mês, 58: Ano, 59: Hora), 15: Jardim Botânico(60: Dia, 61: Mês, 62: Ano, 63: Hora), 16: Barra/Barrinha(64: Dia, 65: Mês, 66: Ano, 67: Hora), 17: Jacarepaguá/Cidade de Deus(68: Dia, 69: Mês, 70: Ano, 71: Hora), 18: Barra/Riocentro(72: Dia, 73: Mês, 74: Ano, 75: Hora), 19: Guaratiba(76: Dia, 77: Mês, 78: Ano, 79: Hora), 20: Est. Grajaú/Jacarepaguá(80: Dia, 81: Mês, 82: Ano, 83: Hora), 21: Santa Cruz(84: Dia, 85: Mês, 86: Ano, 87: Hora), 22: Grande Méier(88: Dia, 89: Mês, 90: Ano, 91: Hora), 23: Anchieta(92: Dia, 93: Mês, 94: Ano, 95: Hora), 24: Grota Funda(96: Dia, 97: Mês, 98: Ano, 99: Hora), 25: Campo Grande(100: Dia, 101: Mês, 102: Ano, 103: Hora), 26: Sepetiba(104: Dia, 105: Mês, 106: Ano, 107: Hora), 27: Alto da Boa Vista(108: Dia, 109: Mês, 110: Ano, 111: Hora), 28: Av. Brasil/Mendanha(112: Dia, 113: Mês, 114: Ano, 115: Hora), 29: Recreio dos Bandeirantes(116: Dia, 117: Mês, 118: Ano, 119: Hora), 30: Laranjeiras(120: Dia, 121: Mês, 122: Ano, 123: Hora), 31: São Cristóvão(124: Dia, 125: Mês, 126: Ano, 127: Hora), 32: Tijuca/Muda(128: Dia, 129: Mês, 130: Ano, 131: Hora)]
      var hora_data = []

      //var met_variaveis = [0: Vidigal, 1: Irajá, 2: Jardim Botânico, 3: Barra/Riocentro, 4: Guaratiba, 5: Santa Cruz, 6: Alto da Boa Vista, 7: São Crisvóvão]
      var met_nomes = []
      var met_latitudes = []
      var met_longitudes = []
      var met_chuva_ultima1h = []
      var met_chuva_ultima4h = []
      var met_chuva_ultima24h = []
      var met_dirvento = []
      var met_pressao = []
      var met_temperatura = []
      var met_umidade = []
      var met_velvento = []
      
      //var plv_variaveis = [0: Urca, 1: Rocinha, 2: Tijuca, 3: Santa Teresa, 4: Copacabana, 5: Grajaú, 6: Ilha do Governador, 7: Penha, 8: Madureira, 9: Bangu, 10: Piedade, 11: Jacarepaguá/Tanque, 12: Saúde, 13: Barra/Barrinha, 14: Jacarepaguá/Cidade de Deus, 15: Est. Grajaú/Jacarepaguá, 16: Grande Méier, 17: Anchieta, 18: Grota Funda, 19: Campo Grande, 20: Sepetiba, 21: Av. Brasil/Mendanha, 22: Recreio dos Bandeirantes, 23: Laranjeiras, 24: Tijuca/Muda]
      //urca, tijuca, santa teresa, grajau, ilha, penha, grande meier, tijua/muda
      var plv_nomes = []
      var plv_latitudes = []
      var plv_longitudes = []
      var plv_chuva_ultima1h = []
      var plv_chuva_ultima4h = []
      var plv_chuva_ultima24h = []

function lerXML(){
  var xml = new XMLHttpRequest();
  xml.open('GET', "/Chuvas.xml", false);
  xml.send();
  var xmlData = xml.responseXML;
  //console.log(xmlData)
  
      xmlData = (new DOMParser()). parseFromString(xml.responseText, 'text/xml');
      
      //Dados
      var estacoes = xmlData.getElementsByTagName("estacoes")[0]
      
      //Escolher estação específica (mudar INDEX)
      var estacao_especifica = xmlData.getElementsByTagName("estacao")[3]

      //Pegar atributo específico de estação específica
      var att_especifico = estacao_especifica.getAttribute("type")

      //Contar quantas estações possuem
      var qnt_estacao = xmlData.getElementsByTagName("estacao").length

      //Pegar primeiro filho
      //console.log(estacoes.firstChild.firstChild.getAttribute("latitude"))

      //Pegar ultimo filho
      //console.log(estacoes.lastChild)

      //Pegar próximo filho
      //console.log(estacao_especifica.nextSibling)

      //Pegar filho anterior
      //console.log(estacao_especifica.previousSibling)
      
      //var hora_servidor = xmlData.getElementsByTagName("estacoes")[0].getAttribute("hora")

      for(let i=0; i<qnt_estacao; i++){

        var hora_nao_formatada = xmlData.getElementsByTagName("estacao")[i].firstChild.nextSibling.getAttribute("hora")
          let first_format = hora_nao_formatada.split("-")
            var ano = first_format[0]
            var mes = first_format[1]

          let second_format = first_format[2].split("T")
            var dia = second_format[0]
            var hora = second_format[1]
              
              hora_data.push(dia)
              hora_data.push(mes)
              hora_data.push(ano)
              hora_data.push(hora)
          
          if (xmlData.getElementsByTagName("estacao")[i].getAttribute("type") == "met")
          {

            let est_met = xmlData.getElementsByTagName("estacao")[i]

            //Aqui começo a fazer pushs para arrays das estações meteorológicas
            met_nomes.push(est_met.getAttribute("nome"))

            met_latitudes.push(est_met.firstChild.getAttribute("latitude"))
            met_longitudes.push(est_met.firstChild.getAttribute("longitude"))

            met_chuva_ultima1h.push(est_met.firstChild.nextSibling.getAttribute("h01"))
            met_chuva_ultima4h.push(est_met.firstChild.nextSibling.getAttribute("h04"))
            met_chuva_ultima24h.push(est_met.firstChild.nextSibling.getAttribute("h24"))

            let dado_dirvento = (parseFloat(est_met.lastChild.getAttribute("dirvento"))).toFixed(2)
            if (est_met.lastChild.getAttribute("dirvento") == "None"){
              met_dirvento.push("N/D")
            }

            else if (dado_dirvento >= 0 && dado_dirvento < 11.25){
              met_dirvento.push(`${dado_dirvento}° (N)`)
            }
            else if (dado_dirvento > 348.75 && dado_dirvento <= 360){
              met_dirvento.push(`${dado_dirvento}° (N)`)
            }
            else if (dado_dirvento == 11.25){
              met_dirvento.push(`${dado_dirvento}° (N/NNE)`)
            }

            else if (dado_dirvento > 11.25 && dado_dirvento < 33.75){
              met_dirvento.push(`${dado_dirvento}° (NNE)`)
            }
            else if (dado_dirvento == 33.75){
              met_dirvento.push(`${dado_dirvento}° (NNE/NE)`)
            }

            else if (dado_dirvento > 33.75 && dado_dirvento < 56.25){
              met_dirvento.push(`${dado_dirvento}° (NE)`)
            }
            else if (dado_dirvento == 56.25){
              met_dirvento.push(`${dado_dirvento}° (NE/ENE)`)
            }

            else if (dado_dirvento > 56.25 && dado_dirvento < 78.75){
              met_dirvento.push(`${dado_dirvento}° (ENE)`)
            }
            else if (dado_dirvento == 78.75){
              met_dirvento.push(`${dado_dirvento}° (ENE/E)`)
            }

            else if (dado_dirvento > 78.75 && dado_dirvento < 101.25){
              met_dirvento.push(`${dado_dirvento}° (E)`)
            }
            else if (dado_dirvento == 101.25){
              met_dirvento.push(`${dado_dirvento}° (E/ESE)`)
            }

            else if (dado_dirvento > 101.25 && dado_dirvento < 123.75){
              met_dirvento.push(`${dado_dirvento}° (ESE)`)
            }
            else if (dado_dirvento == 123.75){
              met_dirvento.push(`${dado_dirvento}° (ESE/SE)`)
            }

            else if (dado_dirvento > 123.75 && dado_dirvento < 146.25){
              met_dirvento.push(`${dado_dirvento}° (SE)`)
            }
            else if (dado_dirvento == 146.25){
              met_dirvento.push(`${dado_dirvento}° (SE/SSE)`)
            }

            else if (dado_dirvento > 146.25 && dado_dirvento < 168.75){
              met_dirvento.push(`${dado_dirvento}° (SSE)`)
            }
            else if (dado_dirvento == 168.75){
              met_dirvento.push(`${dado_dirvento}° (SSE/S)`)
            }

            else if (dado_dirvento > 168.75 && dado_dirvento < 191.25){
              met_dirvento.push(`${dado_dirvento}° (S)`)
            }
            else if (dado_dirvento == 191.25){
              met_dirvento.push(`${dado_dirvento}° (S/SSW)`)
            }

            else if (dado_dirvento > 191.25 && dado_dirvento < 213.75){
              met_dirvento.push(`${dado_dirvento}° (SSW)`)
            }
            else if (dado_dirvento == 213.75){
              met_dirvento.push(`${dado_dirvento}° (SSW/SW)`)
            }

            else if (dado_dirvento > 213.75 && dado_dirvento < 236.25){
              met_dirvento.push(`${dado_dirvento}° (SW)`)
            }
            else if (dado_dirvento == 236.25){
              met_dirvento.push(`${dado_dirvento}° (SW/WSW)`)
            }

            else if (dado_dirvento > 236.25 && dado_dirvento < 258.75){
              met_dirvento.push(`${dado_dirvento}° (WSW)`)
            }
            else if (dado_dirvento == 258.75){
              met_dirvento.push(`${dado_dirvento}° (WSW/W)`)
            }

            else if (dado_dirvento > 258.75 && dado_dirvento < 281.25){
              met_dirvento.push(`${dado_dirvento}° (W)`)
            }
            else if (dado_dirvento == 281.25){
              met_dirvento.push(`${dado_dirvento}° (W/WNW)`)
            }

            else if (dado_dirvento > 281.25 && dado_dirvento < 303.75){
              met_dirvento.push(`${dado_dirvento}° (WNW)`)
            }
            else if (dado_dirvento == 303.75){
              met_dirvento.push(`${dado_dirvento}° (WNW/NW)`)
            }

            else if (dado_dirvento > 303.75 && dado_dirvento < 326.25){
              met_dirvento.push(`${dado_dirvento}° (NW)`)
            }
            else if (dado_dirvento == 326.25){
              met_dirvento.push(`${dado_dirvento}° (NW/NNW)`)
            }

            else if (dado_dirvento > 326.25 && dado_dirvento < 348.75){
              met_dirvento.push(`${dado_dirvento}° (NNW)`)
            }
            else if (dado_dirvento == 348.75){
              met_dirvento.push(`${dado_dirvento}° (NNW/N)`)
            }


            if(est_met.lastChild.getAttribute("pressao") == "None"){
              met_pressao.push("N/D")
            }
            else{
              met_pressao.push(`${(parseFloat(est_met.lastChild.getAttribute("pressao"))).toFixed(2)} hPa`)
            }


            if (est_met.lastChild.getAttribute("temperatura") == "None"){
              met_temperatura.push("N/D")
            }
            else {
              met_temperatura.push( `${(parseFloat(est_met.lastChild.getAttribute("temperatura"))).toFixed(1)} °C` )
            }


            if (est_met.lastChild.getAttribute("umidade") == "None"){
              met_umidade.push("N/D")
            }
            else {
              met_umidade.push( `${(parseFloat(est_met.lastChild.getAttribute("umidade"))).toFixed()} %` )
            }


            if (est_met.lastChild.getAttribute("velvento") == "None"){
              met_velvento.push("N/D")
            }
            else{
              met_velvento.push(`${(parseFloat(est_met.lastChild.getAttribute("velvento"))).toFixed(1)} m/s`)
            }


            
          }
          else {
              
              let est_plv = xmlData.getElementsByTagName("estacao")[i]

              //Aqui começo a fazer pushs para arrays das estações pluviométricas
              plv_nomes.push(est_plv.getAttribute("nome"))

              plv_latitudes.push(est_plv.firstChild.getAttribute("latitude"))
              plv_longitudes.push(est_plv.firstChild.getAttribute("longitude"))

              plv_chuva_ultima1h.push(est_plv.firstChild.nextSibling.getAttribute("h01"))
              plv_chuva_ultima4h.push(est_plv.firstChild.nextSibling.getAttribute("h04"))
              plv_chuva_ultima24h.push(est_plv.firstChild.nextSibling.getAttribute("h24"))
          }
      }
      
 console.log(met_pressao)
}


lerXML()

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic"

  ], function(Map, MapView, Graphic) {

    var map = new Map({
      basemap: "topo-vector"
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      //center: [-118.80500, 34.02700], // longitude, latitude
      center: [-43.152880,  -22.866], // longitude, latitude
    zoom: 11
    });

    //POINTS BAIRROS (LAT E LON)
    var point_vidigal = {
        type: "point",
        longitude: met_longitudes[0],
        latitude: met_latitudes[0]
      };

      var point_iraja = {
        type: "point",
        longitude: met_longitudes[1],
        latitude: met_latitudes[1]
      };

      var point_jardimbotanico = {
        type: "point",
        longitude: met_longitudes[2],
        latitude: met_latitudes[2]
      };

      var point_barrariocentro = {
        type: "point",
        longitude: met_longitudes[3],
        latitude: met_latitudes[3]
      };

      var point_guaratiba = {
        type: "point",
        longitude: met_longitudes[4],
        latitude: met_latitudes[4]
      };

      var point_santacruz = {
        type: "point",
        longitude: met_longitudes[5],
        latitude: met_latitudes[5]
      };

      var point_altodaboavista = {
        type: "point",
        longitude: met_longitudes[6],
        latitude: met_latitudes[6]
      };

      var point_saocristovao = {
        type: "point",
        longitude: met_longitudes[7],
        latitude: met_latitudes[7]
      };

      var point_urca = {
        type: "point",
        longitude: plv_longitudes[0],
        latitude: plv_latitudes[0]
      };

      var point_rocinha = {
        type: "point",
        longitude: plv_longitudes[1],
        latitude: plv_latitudes[1]
      };

      var point_tijuca = {
        type: "point",
        longitude: plv_longitudes[2],
        latitude: plv_latitudes[2]
      };

      var point_santateresa = {
        type: "point",
        longitude: plv_longitudes[3],
        latitude: plv_latitudes[3]
      };

      var point_copacabana = {
        type: "point",
        longitude: plv_longitudes[4],
        latitude: plv_latitudes[4]
      };

    // var markerSymbol = {
    //     type: "picture-marker",
    //     url: "https://i.imgur.com/n9ZE9Hn.png",
    //     width: "45px",
    //     height: "45px"
    //     };

    var markerSymbolMet = {
      type: "simple-marker",
      color: [226, 119, 40],  // orange
  }

    var markerSymbolPlv = {
      type: "simple-marker",
      color: [40, 84, 228],  // orange
}
  
  //Criar atributos para o Popup
  var graphicAttr_vidigal = {
      Nome:`Estação Meteorológica ${met_nomes[0]}`,
      Temperatura: met_temperatura[0],
      Umidade: met_umidade[0],
      "Chuva última 01h": `${met_chuva_ultima1h[0]} mm`,
      "Chuva últimas 04h": `${met_chuva_ultima4h[0]} mm`,
      "Chuva últimas 24h": `${met_chuva_ultima24h[0]} mm`,
      "Direção do vento": met_dirvento[0],
      "Velocidade do vento": met_velvento[0],
      Pressão: met_pressao[0],
      "Última atualização": `${hora_data[3]} (${hora_data[0]}/${hora_data[1]}/${hora_data[2]})`
      }

  var graphicAttr_iraja = {
      Nome:`Estação Meteorológica ${met_nomes[1]}`,
      Temperatura: met_temperatura[1],
      Umidade: met_umidade[1],
      "Chuva última 01h": `${met_chuva_ultima1h[1]} mm`,
      "Chuva últimas 04h": `${met_chuva_ultima4h[1]} mm`,
      "Chuva últimas 24h": `${met_chuva_ultima24h[1]} mm`,
      "Direção do vento": met_dirvento[1],
      "Velocidade do vento": met_velvento[1],
      Pressão: met_pressao[1],
      "Última atualização": `${hora_data[43]} (${hora_data[40]}/${hora_data[41]}/${hora_data[42]})`
      }
  
  var graphicAttr_jardimbotanico = {
      Nome:`Estação Meteorológica ${met_nomes[2]}`,
      Temperatura: met_temperatura[2],
      Umidade: met_umidade[2],
      "Chuva última 01h": `${met_chuva_ultima1h[2]} mm`,
      "Chuva últimas 04h": `${met_chuva_ultima4h[2]} mm`,
      "Chuva últimas 24h": `${met_chuva_ultima24h[2]} mm`,
      "Direção do vento": met_dirvento[2],
      "Velocidade do vento": met_velvento[2],
      Pressão: met_pressao[2],
      "Última atualização": `${hora_data[63]} (${hora_data[60]}/${hora_data[61]}/${hora_data[62]})`
      }

  var graphicAttr_barrariocentro = {
      Nome:`Estação Meteorológica ${met_nomes[3]}`,
      Temperatura: met_temperatura[3],
      Umidade: met_umidade[3],
      "Chuva última 01h": `${met_chuva_ultima1h[3]} mm`,
      "Chuva últimas 04h": `${met_chuva_ultima4h[3]} mm`,
      "Chuva últimas 24h": `${met_chuva_ultima24h[3]} mm`,
      "Direção do vento": met_dirvento[3],
      "Velocidade do vento": met_velvento[3],
      Pressão: met_pressao[3],
      "Última atualização": `${hora_data[75]} (${hora_data[72]}/${hora_data[73]}/${hora_data[74]})`
      }

  var graphicAttr_guaratiba = {
      Nome:`Estação Meteorológica ${met_nomes[4]}`,
      Temperatura: met_temperatura[4],
      Umidade: met_umidade[4],
      "Chuva última 01h": `${met_chuva_ultima1h[4]} mm`,
      "Chuva últimas 04h": `${met_chuva_ultima4h[4]} mm`,
      "Chuva últimas 24h": `${met_chuva_ultima24h[4]} mm`,
      "Direção do vento": met_dirvento[4],
      "Velocidade do vento": met_velvento[4],
      Pressão: met_pressao[4],
      "Última atualização": `${hora_data[79]} (${hora_data[76]}/${hora_data[77]}/${hora_data[78]})`
      }
    
  var graphicAttr_santacruz = {
      Nome:`Estação Meteorológica ${met_nomes[5]}`,
      Temperatura: met_temperatura[5],
      Umidade: met_umidade[5],
      "Chuva última 01h": `${met_chuva_ultima1h[5]} mm`,
      "Chuva últimas 04h": `${met_chuva_ultima4h[5]} mm`,
      "Chuva últimas 24h": `${met_chuva_ultima24h[5]} mm`,
      "Direção do vento": met_dirvento[5],
      "Velocidade do vento": met_velvento[5],
      Pressão: met_pressao[4],
      "Última atualização": `${hora_data[87]} (${hora_data[84]}/${hora_data[85]}/${hora_data[86]})`
      }

  var graphicAttr_altodaboavista = {
      Nome:`Estação Meteorológica ${met_nomes[6]}`,
      Temperatura: met_temperatura[6],
      Umidade: met_umidade[6],
      "Chuva última 01h": `${met_chuva_ultima1h[6]} mm`,
      "Chuva últimas 04h": `${met_chuva_ultima4h[6]} mm`,
      "Chuva últimas 24h": `${met_chuva_ultima24h[6]} mm`,
      "Direção do vento": met_dirvento[6],
      "Velocidade do vento": met_velvento[6],
      Pressão: met_pressao[4],
      "Última atualização": `${hora_data[111]} (${hora_data[108]}/${hora_data[109]}/${hora_data[110]})`
      }

  var graphicAttr_saocristovao = {
      Nome:`Estação Meteorológica ${met_nomes[7]}`,
      Temperatura: met_temperatura[7],
      Umidade: met_umidade[7],
      "Chuva última 01h": `${met_chuva_ultima1h[7]} mm`,
      "Chuva últimas 04h": `${met_chuva_ultima4h[7]} mm`,
      "Chuva últimas 24h": `${met_chuva_ultima24h[7]} mm`,
      "Direção do vento": met_dirvento[7],
      "Velocidade do vento": met_velvento[7],
      Pressão: met_pressao[7],
      "Última atualização": `${hora_data[127]} (${hora_data[124]}/${hora_data[125]}/${hora_data[126]})`
      }




    var graphicAttr_urca = {
      Nome:`Estação Pluviométrica ${plv_nomes[0]}`,
        "Chuva última 01h": `${plv_chuva_ultima1h[0]} mm`,
        "Chuva últimas 04h": `${plv_chuva_ultima4h[0]} mm`,
        "Chuva últimas 24h": `${plv_chuva_ultima24h[0]} mm`,
        "Última atualização": `${hora_data[7]} (${hora_data[4]}/${hora_data[5]}/${hora_data[6]})`
      }

    var graphicAttr_rocinha = {
      Nome:`Estação Pluviométrica ${plv_nomes[1]}`,
        "Chuva última 01h": `${plv_chuva_ultima1h[1]} mm`,
        "Chuva últimas 04h": `${plv_chuva_ultima4h[1]} mm`,
        "Chuva últimas 24h": `${plv_chuva_ultima24h[1]} mm`,
        "Última atualização": `${hora_data[11]} (${hora_data[8]}/${hora_data[9]}/${hora_data[10]})`
      }

      var graphicAttr_tijuca = {
        Nome:`Estação Pluviométrica ${plv_nomes[2]}`,
          "Chuva última 01h": `${plv_chuva_ultima1h[2]} mm`,
          "Chuva últimas 04h": `${plv_chuva_ultima4h[2]} mm`,
          "Chuva últimas 24h": `${plv_chuva_ultima24h[2]} mm`,
          "Última atualização": `${hora_data[15]} (${hora_data[12]}/${hora_data[13]}/${hora_data[14]})`
        }

      var graphicAttr_santateresa = {
        Nome:`Estação Pluviométrica ${plv_nomes[3]}`,
          "Chuva última 01h": `${plv_chuva_ultima1h[3]} mm`,
          "Chuva últimas 04h": `${plv_chuva_ultima4h[3]} mm`,
          "Chuva últimas 24h": `${plv_chuva_ultima24h[3]} mm`,
          "Última atualização": `${hora_data[19]} (${hora_data[16]}/${hora_data[17]}/${hora_data[18]})`
        }

      var graphicAttr_copacabana = {
        Nome:`Estação Pluviométrica ${plv_nomes[4]}`,
        "Chuva última 01h": `${plv_chuva_ultima1h[4]} mm`,
        "Chuva últimas 04h": `${plv_chuva_ultima4h[4]} mm`,
        "Chuva últimas 24h": `${plv_chuva_ultima24h[4]} mm`,
        "Última atualização": `${hora_data[23]} (${hora_data[20]}/${hora_data[21]}/${hora_data[22]})`    
      }
  
  //Pontos das ESTAÇÕES METEOROLÓGICAS:::::::::::::::::::::::::::::::::::::::::

  //Criar um graphic e adicionar a ele geometria, atributos e símbolo
  var pointGraphic_vidigal = new Graphic({
    geometry: point_vidigal,
    symbol: markerSymbolMet,
  //Define the graphic attributes and popup template 
    attributes: graphicAttr_vidigal, 
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Temperatura"},{fieldName: "Umidade"},{fieldName: "Chuva última 01h"}, {fieldName: "Chuva últimas 04h"}, {fieldName: "Chuva últimas 24h"},{fieldName: "Direção do vento"},{fieldName: "Velocidade do vento"},{fieldName: "Pressão"},{fieldName: "Última atualização"}]}]}});

  var pointGraphic_iraja = new Graphic({
    geometry: point_iraja,
    symbol: markerSymbolMet,
    attributes: graphicAttr_iraja, 
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Temperatura"},{fieldName: "Umidade"},{fieldName: "Chuva última 01h"}, {fieldName: "Chuva últimas 04h"}, {fieldName: "Chuva últimas 24h"},{fieldName: "Direção do vento"},{fieldName: "Velocidade do vento"},{fieldName: "Pressão"},{fieldName: "Última atualização"}]}]}});

  var pointGraphic_jardimbotanico = new Graphic({
    geometry: point_jardimbotanico,
    symbol: markerSymbolMet,
    attributes: graphicAttr_jardimbotanico, 
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Temperatura"},{fieldName: "Umidade"},{fieldName: "Chuva última 01h"}, {fieldName: "Chuva últimas 04h"}, {fieldName: "Chuva últimas 24h"},{fieldName: "Direção do vento"},{fieldName: "Velocidade do vento"},{fieldName: "Pressão"},{fieldName: "Última atualização"}]}]}});    

  var pointGraphic_barrariocentro = new Graphic({
    geometry: point_barrariocentro,
    symbol: markerSymbolMet,
    attributes: graphicAttr_barrariocentro, 
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Temperatura"},{fieldName: "Umidade"},{fieldName: "Chuva última 01h"}, {fieldName: "Chuva últimas 04h"}, {fieldName: "Chuva últimas 24h"},{fieldName: "Direção do vento"},{fieldName: "Velocidade do vento"},{fieldName: "Pressão"},{fieldName: "Última atualização"}]}]}});  
  
  var pointGraphic_guaratiba = new Graphic({
    geometry: point_guaratiba,
    symbol: markerSymbolMet,
    attributes: graphicAttr_guaratiba, 
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Temperatura"},{fieldName: "Umidade"},{fieldName: "Chuva última 01h"}, {fieldName: "Chuva últimas 04h"}, {fieldName: "Chuva últimas 24h"},{fieldName: "Direção do vento"},{fieldName: "Velocidade do vento"},{fieldName: "Pressão"},{fieldName: "Última atualização"}]}]}});  
  
  var pointGraphic_santacruz = new Graphic({
    geometry: point_santacruz,
    symbol: markerSymbolMet,
    attributes: graphicAttr_santacruz, 
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Temperatura"},{fieldName: "Umidade"},{fieldName: "Chuva última 01h"}, {fieldName: "Chuva últimas 04h"}, {fieldName: "Chuva últimas 24h"},{fieldName: "Direção do vento"},{fieldName: "Velocidade do vento"},{fieldName: "Pressão"},{fieldName: "Última atualização"}]}]}});  
  
  var pointGraphic_altodaboavista = new Graphic({
    geometry: point_altodaboavista,
    symbol: markerSymbolMet,
    attributes: graphicAttr_altodaboavista, 
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Temperatura"},{fieldName: "Umidade"},{fieldName: "Chuva última 01h"}, {fieldName: "Chuva últimas 04h"}, {fieldName: "Chuva últimas 24h"},{fieldName: "Direção do vento"},{fieldName: "Velocidade do vento"},{fieldName: "Pressão"},{fieldName: "Última atualização"}]}]}});  
  
  var pointGraphic_saocristovao = new Graphic({
    geometry: point_saocristovao,
    symbol: markerSymbolMet,
    attributes: graphicAttr_saocristovao, 
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Temperatura"},{fieldName: "Umidade"},{fieldName: "Chuva última 01h"}, {fieldName: "Chuva últimas 04h"}, {fieldName: "Chuva últimas 24h"},{fieldName: "Direção do vento"},{fieldName: "Velocidade do vento"},{fieldName: "Pressão"},{fieldName: "Última atualização"}]}]}});  

  //Pontos das ESTAÇÕES PLUVIOMÉTRICAS:::::::::::::::::::::::::::::::::::::::::
  //Criar um graphic e adicionar a ele geometria, atributos e símbolo
  var pointGraphic_urca = new Graphic({
    geometry: point_urca,
    symbol: markerSymbolPlv, 
  //Define the graphic attributes and popup template 
    attributes: graphicAttr_urca, 
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Chuva última 01h"},{fieldName: "Chuva últimas 04h"},{fieldName: "Chuva últimas 24h"},{fieldName: "Última atualização"}]}]}});

  var pointGraphic_rocinha = new Graphic({
    geometry: point_rocinha,
    symbol: markerSymbolPlv,
    attributes: graphicAttr_rocinha,
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Chuva última 01h"},{fieldName: "Chuva últimas 04h"},{fieldName: "Chuva últimas 24h"},{fieldName: "Última atualização"}]}]}});

  var pointGraphic_tijuca = new Graphic({
    geometry: point_tijuca,
    symbol: markerSymbolPlv,
    attributes: graphicAttr_tijuca,
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Chuva última 01h"},{fieldName: "Chuva últimas 04h"},{fieldName: "Chuva últimas 24h"},{fieldName: "Última atualização"}]}]}});    

  var pointGraphic_santateresa = new Graphic({
    geometry: point_santateresa,
    symbol: markerSymbolPlv,
    attributes: graphicAttr_santateresa,
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Chuva última 01h"},{fieldName: "Chuva últimas 04h"},{fieldName: "Chuva últimas 24h"},{fieldName: "Última atualização"}]}]}});

  var pointGraphic_copacabana = new Graphic({
    geometry: point_copacabana,
    symbol: markerSymbolPlv,
    attributes: graphicAttr_copacabana,
    popupTemplate: {title: "{Nome}",content: [{type: "fields",fieldInfos: [{fieldName: "Chuva última 01h"},{fieldName: "Chuva últimas 04h"},{fieldName: "Chuva últimas 24h"},{fieldName: "Última atualização"}]}]}});
  
  //**************PLOTAGEM FINAL**************
  view.graphics.add(pointGraphic_vidigal);
  view.graphics.add(pointGraphic_iraja);
  view.graphics.add(pointGraphic_jardimbotanico);
  view.graphics.add(pointGraphic_barrariocentro);
  view.graphics.add(pointGraphic_guaratiba);
  view.graphics.add(pointGraphic_santacruz);
  view.graphics.add(pointGraphic_altodaboavista);
  view.graphics.add(pointGraphic_saocristovao);

  view.graphics.add(pointGraphic_urca);
  view.graphics.add(pointGraphic_rocinha);
  view.graphics.add(pointGraphic_tijuca);
  view.graphics.add(pointGraphic_santateresa);
  view.graphics.add(pointGraphic_copacabana);
//**************PLOTAGEM FINAL**************




  //Logo INFNET
  //Referenciar a div logos do HTML
  let div_geral = document.querySelector("#logos");

  //Cria TAGs 
  let img_create = document.createElement("img");
  img_create.id = "logo_infnet"
  img_create.alt = "Logo da Escola Superior da Tecnologia da Informação - ESTI - INFNET"
  img_create.title = "Logo da INFNET"

  //Adiciona nós filhos aos respectivos pais (no caso a div_geral)
  div_geral.appendChild(img_create);

  document.getElementById("logo_infnet").src = "/logos/infnet-marca.png";

  });


