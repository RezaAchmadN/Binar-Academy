function sortCarByYearAscendingly(cars) {
	// Sangat dianjurkan untuk console.log semua hal hehe
	console.log(cars);

	// Clone array untuk menghindari side-effect
	// Apa itu side effect?
	const result = [...cars];

	// Tulis code-mu disini
	const ascResult = [];
	result.map((a) => {
		const index = ascResult.findIndex((v) => v.year > a.year);
		if (index != -1) ascResult.splice(index, 0, a);
		else ascResult.push(a);
	});

	// Rubah code ini dengan array hasil sorting secara ascending
	return ascResult;
}
