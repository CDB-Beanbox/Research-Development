// colorkey.js
// by pf 16.10.07
// Pretty basic color key for in-game text colors.
function(context, args)
{
var a = "`1one` `2two` `3three` `4four` `5five` `6six` `7seven` `8eight` `9nine` `0ten` !bang! -minus- +plus+ \n"
var b = "`aa` `bb` `cc` `dd` `ee` `ff` `hh` `ii` `jj` `kk` `ll` `mm` `nn` `oo` `pp` `qq` `rr` `ss` `tt` `uu`  `vv` `ww` `xx` `yy` `zz` \n"
var c = "`AA` `BB` `CC` `DD` `EE` `FF` `GG` `HH` `II` `JJ` `KK` `LL` `MM` `NN` `OO` `PP` `QQ` `RR` `SS` `TT` `UU` `VV` `WW``XX` `YY` `ZZ` \n"
var blank = "\n"
	return blank + b + c + a;
}
