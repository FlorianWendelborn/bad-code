module.exports = function(n,c){for (var i=0,d;i<n;i++){d=new Array(Math.pow(2,n-i-1)).join('\\')+"'";c="eval("+d+c+d+")";}return c;};
