function createMissTable( )
{
	window.missTable = new Object( );
}

function countHit( letter )
{
	if( window.missTable[ letter ] )
		window.missTable[ letter ]--;
}

function countMiss( letter )
{
	if( window.missTable[ letter ] )
		window.missTable[ letter ]++;
	else
		window.missTable[ letter ] = 1;
}

function showResults( )
{
	var res = '';
	for( var key in window.missTable )
	{
		res += key + ' - ' + window.missTable[ key ] + '<br />';
	}
	$( '<div></div>' ).html( res ).appendTo( 'body' );
}