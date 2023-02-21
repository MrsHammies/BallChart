function ballChart(div, data){

    var div; 
    var chartData ={
        sections: 0,
        sectionsStyle: {
            padding: '20px'
        },
        labels: {
            enabled: true,
            labels: []
        },
        labelsStyle: {
            'font-size': '1em',
        },
        ball: {
            height: '300px',
            width: '300px'
        },
        shadow: {
            'background-color': 'rgb(0, 0, 0)'
        },
        rulers: {
            'background-color': 'rgb(255, 0, 0)'
        },
        max: 0,
        min: 0,
        value: 0
    };
    
    function Init(div, data){
        $.each(data,function(index,value){ 
            chartData[index] = value; 
        });
        this.div += div;
        var html = '<div class="central"></div>'
        html = '<div class="lineaBola bola">'+ html +'</div>';
        var coef = (chartData.max / chartData.sections);
        for(let i = 0; i< chartData.sections; i++){
            var n =""; 
            if(chartData.labels.enabled){
                if(chartData.labels.labels.lenght > 0){
                    n = labels.labels[i];
                }else{
                    n= coef * (i +1); 
                }
            }
            if(i < chartData.sections- 1){
                html = '<div class="linea"><div class="floatingText">'+ n +'</div>'+ html +'</div>';
            }else{
                html = '<div class="linea"><div class="rulerHorizontal"></div><div class="rulerVertical"></div><div class="floatingText">'+ n +'</div>'+ html +'</div>';
            }
        }
        html = '<div class="ballContainer">' + html + '</div>';
        $(div).html(html);
        $(div).find(".bola").css(chartData.ball);
        $(div).find(".linea").css(chartData.sectionsStyle);
        $(div).find(".floatingText").css(chartData.labelsStyle);
        $(div).find(".central").css(chartData.shadow);
        $(div).find(".rulerHorizontal").css(chartData.rulers);
        $(div).find(".rulerVertical").css(chartData.rulers);
        calcularSombra(); 
    }

    function calcularSombra(){
        var trueMax = $(div).find(".ballContainer").height() /2;
        var trueMin = $(div).find(".bola").height() /2;
        var size = ((chartData.value) * (trueMax - trueMin)) /chartData.max;
        size = (size + trueMin) * 2;    
        $(div).find(".central").css({"width": size, "height": size});
    }

    ballChart.prototype.update = function(data){
        Init(div, data);
    }

    Init(div, data); 

}
