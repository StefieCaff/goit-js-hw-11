var o="https://pixabay.com/api/?key=33708941-9afad2bda68efbaf1594840f2&q="+encodeURIComponent("red roses");$.getJSON(o,(function(o){parseInt(o.totalHits)>0?$.each(o.hits,(function(o,e){console.log(e.pageURL)})):console.log("No hits")}));
//# sourceMappingURL=index.a763f99b.js.map
