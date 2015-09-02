//Octavio Palomeque Gasperin ID:151884
//_INPUT = "6\n4 15\n30 100\n20 60\n1 50\n20 50\n12 999";
//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";
_INPUT = "2\n3 9\n17 24";

split1 = _INPUT.split("\n");
cases = split1[0];

for(i = 1; i <= cases; i++) {
	split2 = split1[i].split(" ");
	min = split2[0];
        max = split2[1];
        sherlockSquares(min, max);
}

function sherlockSquares (valorMin, valorMax) {
	cantidadDeCuadradosPerf = 0;
	for (var i = valorMin; i <= valorMax; i++) {
		var val =  Math.sqrt(i);
		if((val % 1) == 0) {
			cantidadDeCuadradosPerf++;
		}
	}
	console.log(cantidadDeCuadradosPerf);
}
