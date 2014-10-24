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

$.fn.underlineLetter = function( n )
{
	$( this ).html( 
		$( this ).text( ).slice( 0, n ) +
		"<span class=\"underline\">" +
		$( this ).text( )[ n ] + 
		"</span>" +
		$( this ).text( ).slice( n + 1 )
	);

	$( 'span.underline' ).css( 'text-decoration', 'underline' );
};

$.fn.underlineNext = function( )
{
	var i = $( this ).underlinedIndex( ) + 1;
	$( this ).html( $( this ).text( ) );
	$( this ).underlineLetter( i );
};

$.fn.underlinedIndex = function( )
{
	var output = $( this ).html( );
	if( !output.search( 'span' ) )
		return -1;

	for( var i = 0; i < output.length; i++ )
	{
		if( output[ i ] == '<' && output.substr( i, 5 ) == '<span' ) 
			return i;
	}	
};
