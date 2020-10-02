
function readXML(){
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
        //console.log(estacoes.firstChild)

        //Pegar ultimo filho
        //console.log(estacoes.lastChild)

        //Pegar próximo filho
        //console.log(estacao_especifica.nextSibling)

        //Pegar filho anterior
        //console.log(estacao_especifica.previousSibling)

        for(let i=0; i<qnt_estacao; i++){
            if (xmlData.getElementsByTagName("estacao")[i].getAttribute("type") == "met"){
                console.log(xmlData.getElementsByTagName("estacao")[i].getAttribute("nome"))
            }
        }
    
}

readXML()