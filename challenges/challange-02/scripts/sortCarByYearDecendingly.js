function sortCarByYearDescendingly(cars) {
	// Sangat dianjurkan untuk console.log semua hal hehe
	console.log(cars);

	// Clone array untuk menghindari side-effect
	// Apa itu side effect?
	const result = [...cars];

	// Tulis code-mu disini
	const descResult = [];
	result.map((a) => {
		const index = descResult.findIndex((v) => v.year < a.year);
		if (index != -1) descResult.splice(index, 0, a);
		else descResult.push(a);
	});

	// Rubah code ini dengan array hasil sorting secara descending
	return descResult;
}
