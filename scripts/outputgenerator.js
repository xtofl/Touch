function generateOutput( wordLength, wordNumber, repeats )
{
	var result = '';
	for( var i = 0; i < wordNumber; i++ )
	{
		var word = randomWord( wordLength ) + ' ';

		if( !repeats )
			repeats = 1;

		for( var j = 0; j < repeats; j++ )
			result += word;
	}
	return result;
}

function randomWord( wordLength )
{
	var result = '';
	for( var i = 0; i < wordLength; i++ )
	{
		result += randomLetter( );
	}

	return result;
}

function randomLetter( )
{
	var random = Math.floor( Math.random( ) * 26 + 97 );
	return String.fromCharCode( random );
}