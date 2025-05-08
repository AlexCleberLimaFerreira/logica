let temperatura = prompt(`Qual atemperatura atual`);

temperatura > 35 ? alert(`calor extremo`):
temperatura >= 25 ? alert(`clima quente`):
temperatura >= 15 ? alert(`clima agradável`):
temperatura >= 5 ? alert(`clima frio`): alert(`frio intenso`);