import{c as n}from"./base.982ab451.js";import{c as m}from"./scoreboard.3d9287d0.js";import{d}from"./duration.c050dc80.js";function y(l,a,c,p){let i={title:{left:"center",text:"Score over Time"},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{type:"scroll",orient:"horizontal",align:"left",bottom:0,data:[a]},toolbox:{feature:{saveAsImage:{}}},grid:{containLabel:!0},xAxis:[{type:"time",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",height:20,top:35,fillerColor:"rgba(233, 236, 241, 0.4)"}],series:[]};const s=[],r=[],e=c.concat(p);e.sort((t,o)=>new Date(t.date)-new Date(o.date));for(let t=0;t<e.length;t++){const o=d(e[t].date);s.push(o.toDate());try{r.push(e[t].challenge.value)}catch{r.push(e[t].value)}}return i.series.push({name:a,type:"line",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{color:n(a+l)}},itemStyle:{normal:{color:n(a+l)}},data:m(r).map((t,o)=>[s[o],t])}),i}export{y as g};
