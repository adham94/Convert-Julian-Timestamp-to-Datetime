
function myFunction(julian1) {
	
const julian = BigInt(julian1);
const subtract = BigInt("210866760000000000");
const epoch = Number((julian - subtract) / BigInt("1000000"));

const date = new Date(epoch * 1000);
const formattedDate = date.toISOString().replace("T", " ").substr(0, 19);

//console.log(`Unix epoch=${epoch}  fmt=${formattedDate}`);

return formattedDate

}
