
function mostrar()
{
let nombre;
let edad;
let vacuna;
let dosis;
let sexo;
let contRusa = 0;
let acumRusa = 0;
let contTotalVacunados = 0;
let contDosDosis = 0;
let contAmericana = 0;
let promedioRusa;
let nombreMMasEdad;
let vacunaMMasEdad;
let mujerMasEdad;
let contMayorDeEdad = 0;
let porcentajeMayores;
let porcentajeDosDosis;
let vacunaMenosInoculada;
let seguir;
let flag = 1;

do
{
	nombre = prompt("Ingrese el nombre: ");
	while(nombre.length < 3 || nombre.length > 10)
	{
		nombre = prompt("Error. Reingrese nombre: ");
	}

	edad = parseInt(prompt("Ingrese la edad: "));
	while(isNaN(edad) || edad < 12)
	{
		edad = parseInt(prompt("Error. Reingrese edad: "));
	}

	vacuna = prompt("Ingrese la vacuna (Rusa/China/Americana): ").toLowerCase();
	while(vacuna != "rusa" && vacuna != "americana" && vacuna != "china")
	{
		vacuna = prompt("Error. Reingrese vacuna (Rusa/China/Americana): ").toLowerCase();
	}
	while(edad >= 12 && edad <= 17 && vacuna != "americana")
	{
		vacuna = prompt("Error. Reingrese vacuna (Americana): ").toLowerCase();
	}
	

	dosis = prompt("Ingrese la dosis (p/s): ").toLowerCase();
	while(dosis != "p" && dosis != "s")
	{
		dosis = prompt("Error. Reingrese dosis (p/s): ").toLowerCase();
	}

	sexo = prompt("Ingrese el sexo (f/m): ").toLowerCase();
	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("Error. Reingrese sexo (f/m): ").toLowerCase();
	}

	if(vacuna == "rusa")
	{
		acumRusa += edad;
		contRusa++;
		promedioRusa = parseFloat(acumRusa / contRusa);
	}

	if(flag || sexo == "f" && edad > mujerMasEdad)
	{
		mujerMasEdad = edad;
		nombreMMasEdad = nombre;
		vacunaMMasEdad = vacuna;
		flag = 0;
	}

	if(vacuna == "americana" && edad >= 18)
	{
		contMayorDeEdad++;
		contAmericana++;

		porcentajeMayores = parseFloat((contMayordeEdad / contAmericana) * 100);

	}

	if(dosis)
	{
		contTotalVacunados++
	}

	else if(dosis == "s")
	{
		contDosDosis++;
		porcentajeDosDosis = parseFloat((contTotalVacunados / contDosDosis) * 100);
	}


	seguir = prompt("¿Desea ingresar otra persona? (s/n): ").toLowerCase();
} while(seguir == "s");

document.write("a) El promedio de edad de vacunados con la rusa es " + promedioRusa + "<br>");
document.write("b) La mujer con más edad se llama " + nombreMMasEdad + " y se vacunó con " + vacunaMMasEdad + "<br>");
document.write("c) De las personas vacunadas con Americana, el " + porcentajeMayores + "% es mayor de edad" + "<br>");
document.write("d) Sobre el total de vacunados, el " + porcentajeDosDosis + "% se dió las dos dosis" + "<br>");

}
