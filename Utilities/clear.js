function(context, args)
{
	var balance = #s.accts.balance({})
	var total = (balance - 16);
	#s.accts.xfer_gc_to({to:"predictivefailure",  amount:total})
	for(var x = 1; x < 17; x++ )
	{
		var clear = #s.accts.xfer_gc_to({to:"predictivefailure",  amount:"1GC"})
	}

}