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

function setSessionWordNumber( n )
{
	window.sessionWordNumber = n;
}

function wordWasWritten( )
{
	window.sessionWordNumber--;
}

function endOfSession( )
{
	if( window.sessionWordNumber == 0 )
		return true;
	else
		return false;
}