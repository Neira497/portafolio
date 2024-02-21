let resultadoFloresElement = document.getElementById("resultadoFlores");
let modeloFlores = null;

(async () => {
  console.log("Cargando modelo de flores...");
  modeloFlores = await tf.loadLayersModel("../flores/model.json");
  console.log("Modelo cargado de flores...");
})();

function updateLenSepalo(value, minReal, maxReal) {
  var valorReal = minReal + (maxReal - minReal) * (value / 100);
  document.getElementById("lenSe").innerHTML = valorReal.toFixed(1);

  predecirFlor();
}

function updateWidthSepalo(value, minReal, maxReal) {
  var valorReal = minReal + (maxReal - minReal) * (value / 100);
  document.getElementById("widSe").innerHTML = valorReal.toFixed(1);

  predecirFlor();
}

function updateLenPetalo(value, minReal, maxReal) {
  var valorReal = minReal + (maxReal - minReal) * (value / 100);
  document.getElementById("lenPe").innerHTML = valorReal.toFixed(1);

  predecirFlor();
}

function updateWidthPetalo(value, minReal, maxReal) {
  var valorReal = minReal + (maxReal - minReal) * (value / 100);
  document.getElementById("widPe").innerHTML = valorReal.toFixed(1);

  predecirFlor();
}

function predecirFlor() {
  if (modeloFlores) {
    const longitudSepalo = parseFloat(
      document.getElementById("longitudSepalo").value
    );
    const anchoSepalo = parseFloat(
      document.getElementById("anchoSepalo").value
    );
    const longitudPetalo = parseFloat(
      document.getElementById("longitudPetalo").value
    );
    const anchoPetalo = parseFloat(
      document.getElementById("anchoPetalo").value
    );

    const tensorEntrada = tf.tensor2d([
      [longitudSepalo, anchoSepalo, longitudPetalo, anchoPetalo],
    ]);
    const predicciones = modeloFlores.predict(tensorEntrada).dataSync();
    const mayorPrediccion = Math.max(...predicciones);
    const indicePrediccion = predicciones.indexOf(mayorPrediccion);
    const tiposFlores = ["Setosa", "Versicolor", "Virginica"];

    resultadoFloresElement.innerHTML = "La flor es: <b>" + tiposFlores[indicePrediccion] + "</b>";
  }
}
