function createResultTables( )
{
	window.missTable = new Object( );
	window.hitTable = new Object( );

	for( var i = 0; i < 26; i++ )
	{
		window.missTable[ String.fromCharCode( i + 97 ) ] = 0;
		window.hitTable[ String.fromCharCode( i + 97 ) ] = 0;
	}
}

function countHit( letter )
{
	window.hitTable[ letter ]++;
}

function countMiss( letter )
{
	window.missTable[ letter ]++;
}

function maxHit( )
{
	var max = window.hitTable.a;

	for( var key in window.hitTable )
	{
		if( max < window.hitTable[ key ] )
			max = window.hitTable[ key ];
	}

	return max;
}

function maxMiss( )
{
	var max = window.missTable.a;

	for( var key in window.missTable )
	{
		if( max < window.missTable[ key ] )
			max = window.missTable[ key ];
	}

	return max;
}

function calculatePercent( letter )
{

	var hits = window.hitTable[ letter ];
	var misses = window.missTable[ letter ];
	var sum = hits + misses;

	return ( hits / sum ) * 100;

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