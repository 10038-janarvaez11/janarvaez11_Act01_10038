
  document.getElementById("borrar").addEventListener("click", function() {
    document.getElementById("calleP").value = "";
    document.getElementById("calleS").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("impuesto").selectedIndex = 0;
    document.getElementById("prom1").checked = false;
    document.getElementById("prom2").checked = false;
    document.getElementById("prom3").checked = false;
    document.getElementById("info").checked = false;
  });
