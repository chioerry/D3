// creating a convert function to get json file from csv file.
let convert = function (dat) {
	//	All the variables are declared as per the ES-Lint standards.
	//	At the top of function declaration.
	const readline = require('readline');
	const fs = require('fs');
	let tempData = {};
	let totalmen = 0;
	let totalwomen = 0;
	let encoding = 'utf8';
	let radix;
	//	To read the data from csv by line we use readline method.
	const rl = readline.createInterface({
		input: fs.createReadStream('./inputdata/IndiaMerge.csv')
	});
	//	If any value other than a number is passed it simply throws a error.
	if(isNaN(dat)) {
		throw new Error('Not a number');
	}
	//	The business logic to get values of men and women.
	rl.on('line', function(line) {
		let line1 = line.trim().split(',');

		if(!isNaN(line1[7]) && !isNaN(line1[8]))
		{
			totalmen = totalmen + parseInt(line1[7], radix);
			totalwomen = totalwomen + parseInt(line1[8], radix);
		}

	//	console.log(totalmen);
	tempData['States'] = 'All';
	tempData['Total men'] = totalmen;
	tempData['Total women'] = totalwomen;
});
	// console.log(tempData);

	//	The on close function is called to mark the completion.
	rl.on('close', function() {
		let jsonData = JSON.stringify(tempData);
		fs.writeFileSync('./outputdata/IndiaCensusStructureSai.json', jsonData, encoding);
	});


	// console.log('CSV to Json Converted');

	return 'JSON written successfully';
};


module.exports = convert;
