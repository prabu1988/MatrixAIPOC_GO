var testname = "TEST_getBlockHashOnNode1 ";
process.stdout.write(testname);

var onResult = {};
web3.eth.getBlock("latest", function(err, res){  onResult(err, res); })

onResult = function (err,res) 
{
	if (res.hash == args["node2_lastblock"].hash)
		console.log("OK");
	   else
	{
		console.log("FAILED ");
		console.error(testname + "FAILED");
	}
	callback(err, res);
}
