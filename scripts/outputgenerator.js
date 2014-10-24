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
		"<span>" +
		$( this ).text( ).slice( 0, n ) +
		"</span><span class=\"underline\">" +
		$( this ).text( )[ n ] + 
		"</span><span>" +
		$( this ).text( ).slice( n + 1 ) +
		"</span>"
	);
};

$.fn.underlineNext = function( )
{
	var spans = $( this ).children( 'span' );

	if( spans.eq( 1 ).hasClass( 'red' ) )
	{
		spans.eq( 0 ).html( 
			spans.eq( 0 ).html( ) + 
			'<span class=\"red\">' + 
			spans.eq( 1 ).text( ) + 
			'</span>' 
		);
		spans.eq( 1 ).removeClass( 'red' );
	}
	else
	{
		spans.eq( 0 ).html( spans.eq( 0 ).html( ) + spans.eq( 1 ).text( ) );
	}
	spans.eq( 1 ).text( spans.eq( 2 ).text( )[ 0 ] );
	spans.eq( 2 ).text( spans.eq( 2 ).text( ).slice( 1 ) );
};
