function setOptionsButton( width, height )
{

	$( '.options .header a' ).on( 'click', showOptions( width, height ) );

}

function showOptions( width, height )
{

	return function( )
	{
		var options = $( this ).closest( '.options' );

		options.data( 'height', options.height( ) );
		options.data( 'width', options.width( ) );

		options
		.animate( { width: width }, 300 )
		.animate( { height: height }, 300, 'linear', function( )
		{
			$( this ).children( '.main' ).fadeIn( 400 );
		}
		);

		$( this ).off( 'click' );
		$( this ).on( 'click', hideOptions( width, height ) );

		return false;
	};
}

function hideOptions( width, height )
{
	return function( )
	{
		var options = $( this ).closest( '.options' );

		options.children( '.main' ).fadeOut( 400 );

		options
		.animate( { height: options.data( 'height' ) }, 300 )
		.animate( { width: options.data( 'width' ) }, 300 );

		$( this ).off( 'click' );
		$( this ).on( 'click', showOptions( width, height ) );

		return false;
	}
}
