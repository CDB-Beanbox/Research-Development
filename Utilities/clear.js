// clear.js 1.2
// by pf 16.10.05
// A simple script to clear your transaction logs so that acct_nt is easier to calculate. Also clears your balance as a sn_w_glock protect
// It will sometmes time-out after 5 secs depending on server load and command response, leaving a remainder. Just run it again.
function(context, args)
{
	// Gets your balance and subtracts 16GC
	var balance = #s.accts.balance({})
	var total = (balance - 16);
	//Move the balance minus the 16GC we need to clear to user 'username'
	#s.accts.xfer_gc_to({to:"username",  amount:total})
	// Run this command 16 times, moving 1GC at a time over to 'username'
	for(var x = 1; x < 16; x++ )
	{
		var clear = #s.accts.xfer_gc_to({to:"username",  amount:"1GC"})
	}

}
