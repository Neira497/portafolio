let modelo = null;

(async () => {
  console.log("Cargando modelo de grados...");
  modelo = await tf.loadLayersModel("js/cel2fah/model.json");
  console.log("Modelo cargado de grados...");
})();

function cambiarCelsius() {
  var celsius = document.getElementById("celsius").value;
  document.getElementById("lbl-celsius").innerHTML = celsius;

  if (modelo != null) {
    var tensor = tf.tensor1d([parseInt(celsius)]);
    var prediccion = modelo.predict(tensor).dataSync();

    prediccion = Math.round(prediccion);

    document.getElementById("resultado").innerHTML =
      celsius + "°C = " + prediccion + "°F";
  } else {
    console.log("Algo fallo");
  }
}
