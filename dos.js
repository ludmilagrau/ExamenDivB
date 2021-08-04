function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contPositivos = 0;
    let acumPositivos = 0;
    let porcentajePositivos;
    let contNegativos = 0;
    let acumNegativos = 0;
    let contCepaDelta = 0;
    let contCepaAlfa = 0;
    let contCepaBeta = 0;
    let porcentajeNegativos;
    let contCepa = 0;
    let cepaMasEncontrada;
    let mayorExtContagiado;
    let mayorEdadExt;
    let contArgDelta = 0;
    let flag = 1;

for( let i = 0; i < 8; i++)
{
    nacionalidad = prompt("Ingrese la nacionalidad (argentina/extranjero): ").toLowerCase();
    while(nacionalidad != "argentina" && nacionalidad != "extranjero")
    {
        nacionalidad = prompt("Error. Reingrese nacionalidad (argentina/extranjero): ").toLowerCase();
    }

    resultado = prompt("Ingrese el resultado (positivo/negativo): ").toLowerCase();
    while(resultado != "positivo" && resultado != "negativo")
    {
        resultado = prompt("Error. Reingrese resultado (positivo/negativo): ").toLowerCase();
    }

    edad = parseInt(prompt("Ingrese la edad: "));
    while(isNaN(edad) || edad < 18 || edad > 65)
    {
        edad = parseInt(prompt("Error. Reingrese edad: "));
    }

    cepa = prompt("Ingrese cepa (delta/alfa/beta/ninguna): ").toLowerCase();
    while(cepa != "delta" && cepa != "alfa" && cepa != "beta" && cepa != "ninguna")
    {
        cepa = prompt("Error. Reingrese cepa (delta/alfa/beta/ninguna): ").toLowerCase();
    }

    while(resultado != "negativo" && cepa == "ninguna")
    {
        cepa = prompt("Error. Reingrese cepa (delta/alfa/beta): ").toLowerCase();

    }
    }

    if(resultado == "positivo")
    {
        acumPositivos+= resultado;
        contPositivos++;
        porcentajePositivos = parseFloat((acumPositivos / contPositivos) * 100);
    }

    else if(resultado == "negativo")
    {
        acumNegativos+= resultado;
        contNegativos++;
        porcentajeNegativos = parseFloat((acumNegativos / contNegativos) * 100);
    }

    if(cepa == "alfa")
    {
        contCepaAlfa++;
    }
    else if(cepa == "delta")
    {
        contCepaDelta++;
    }
    else
    {
        contCepaBeta++;
    }

    if(contCepaAlfa > contCepaBeta && contCepaAlfa > contCepaDelta)
    {
        cepaMasEncontrada = "Alfa";
    }
    
    else if(contCepaBeta >= contCepaAlfa && contCepaBeta > contCepaDelta)
    {
        cepaMasEncontrada = "Beta";
    }
    else
    {
        cepaMasEncontrada = "Delta";
    }

    if(flag || nacionalidad == "extranjero" && edad > mayorEdadExt)
    {
        mayorEdadExt = edad;
    }

    if(nacionalidad == "argentina" && cepa == "delta")
    {
        contArgDelta++;
    }

    document.write("a) El porcentaje de positivos es " + porcentajePositivos + "%" + "<br>");
    document.write("b) El porcentaje de negativos es " + porcentajeNegativos + "%" + "<br>");
    document.write("c) La cepa más encontrada es" + cepaMasEncontrada + "<br>");
    document.write("d) La edad del mayor extranjero contagiado es " + mayorEdadExt + "<br>");
    document.write("e) La cantidad de personas argentinas contagiadas con la delta es " + contArgDelta);
   
}
