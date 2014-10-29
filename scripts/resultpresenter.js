function showResults( maxBarHeight )
{
	for( var key in window.hitTable )
	{
		$( '<td></td>' ).append( $( '<div></div>' ).addClass( 'hit' ) )
		.appendTo( '.results table tr:eq(0)' );
		$( '<td></td>' ).text( key ).appendTo( '.results table tr:eq(1)' );
		$( '<td></td>' ).append( $( '<div></div>' ).addClass( 'miss' ) )
		.appendTo( '.results table tr:eq(2)' );
	}

	$( '.upper td, .lower td' ).height( maxBarHeight );

	$( '.results' ).fadeIn( 1500 );
	$( 'body' ).off( 'keypress' );

	setHMChartBars( maxBarHeight );
	setOptions( maxBarHeight );

}

function setOptions( maxBarHeight )
{

	$( '.options a' ).each( function( )
	{
		if( $( this ).text( ) == "Hits and misses" )
			$( this ).on( 'click', function( )
			{
				$( '.results .percent' ).addClass( 'hit' )
				.removeClass( 'percent' );
				setHMChartBars( maxBarHeight );
				return false;
			}
			);
		else if( $( this ).text( ) == "Percentage" )
			$( this ).on( 'click', function( )
			{
				$( '.results .hit' ).addClass( 'percent' )
				.removeClass( 'hit' );
				setPercentChartBars( maxBarHeight );
				return false;
			}
			);
	}
	);
}

function setHMChartBars( maxBarHeight )
{
	$( '.results tr:eq(0) td' ).each( function( )
	{
		var thisIndex = $( '.results tr:eq(0) td' ).index( this );
		var letter = $( '.results tr:eq(1) td' ).eq( thisIndex ).text( );

		var max = ( maxMiss( ) < maxHit( ) ) ? maxHit( ) : maxMiss( );

		var hitHeight = Math.floor( window.hitTable[ letter ] * maxBarHeight / max );
		var missHeight = Math.floor( window.missTable[ letter ] * maxBarHeight / max );

		$( this ).children( '.hit' )
			.animate( { height: hitHeight }, 1000 );
		$( '.results .miss' ).eq( thisIndex )
			.animate( { height: missHeight }, 1000 );
	}
	);
}

function setPercentChartBars( maxBarHeight )
{
	$( '.results tr:eq(0) td' ).each( function( )
	{
		var thisIndex = $( '.results tr:eq(0) td' ).index( this );
		var letter = $( '.results tr:eq(1) td' ).eq( thisIndex ).text( );

		var thisPercent = calculatePercent( letter );
		var percentHeight = thisPercent * 75 / 100;

		$( this ).children( '.percent' )
		.animate( { height: percentHeight }, 1000 );
		$( '.results .miss' ).eq( thisIndex ).animate( { height: 0 }, 1000 );
	}
	);
}
