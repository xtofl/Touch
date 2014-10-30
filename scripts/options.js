function setTouchOptions( wordLength, wordNumber, wordRepeat )
{

	window.touchOptions = { };
	window.touchOptions.wordLength = wordLength;
	window.touchOptions.wordNumber = wordNumber;
	window.touchOptions.wordRepeat = wordRepeat;

}

function bindOptions( )
{
	$( 'input[name=wordLength]' ).val( window.touchOptions.wordLength );
	$( 'input[name=wordNumber]' ).val( window.touchOptions.wordNumber );
	$( 'input[name=wordRepeat]' ).val( window.touchOptions.wordRepeat );

}
