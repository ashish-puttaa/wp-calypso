/**
 * External dependencies
 */
import React from 'react';
import { useDispatch, useSelect } from '@wordpress/data';
import { useI18n } from '@automattic/react-i18n';
import { useHistory } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { STORE_KEY as ONBOARD_STORE } from '../../stores/onboard';
import designs, { getDesignImageUrl } from '../../available-designs';
import { usePath, Step } from '../../path';
import Link from '../../components/link';
import { SubTitle, Title } from '../../components/titles';
import { useTrackStep } from '../../hooks/use-track-step';
import './style.scss';

type Design = import('../../stores/onboard/types').Design;

const makeOptionId = ( { slug }: Design ): string => `design-selector__option-name__${ slug }`;

const DesignSelector: React.FunctionComponent = () => {
	const { __ } = useI18n();
	const { push } = useHistory();
	const makePath = usePath();

	const { setSelectedDesign, setFonts } = useDispatch( ONBOARD_STORE );
	const { getSelectedDesign } = useSelect( ( select ) => select( ONBOARD_STORE ) );

	useTrackStep( 'DesignSelection', () => ( {
		selected_design: getSelectedDesign()?.slug,
	} ) );

	return (
		<div className="gutenboarding-page design-selector">
			<div className="design-selector__header">
				<div className="design-selector__heading">
					<Title>{ __( 'Choose a design' ) }</Title>
					<SubTitle>
						{ __( 'Pick your favorite homepage layout. You can customize or change it later.' ) }
					</SubTitle>
				</div>
				<Link
					className="design-selector__start-over-button"
					to={ makePath( Step.IntentGathering ) }
					isLink
				>
					{ __( 'Go back' ) }
				</Link>
			</div>
			<div className="design-selector__design-grid">
				<div className="design-selector__grid">
					{ designs.featured.map( ( design ) => (
						<button
							key={ design.slug }
							className="design-selector__design-option"
							onClick={ () => {
								setSelectedDesign( design );

								// Update fonts to the design defaults
								setFonts( design.fonts );

								push( makePath( Step.Style ) );
							} }
						>
							<span className="design-selector__image-frame">
								<img
									alt=""
									aria-labelledby={ makeOptionId( design ) }
									src={ getDesignImageUrl( design ) }
								/>
							</span>
							<span className="design-selector__option-overlay">
								<span id={ makeOptionId( design ) } className="design-selector__option-name">
									{ design.title }
								</span>
							</span>
						</button>
					) ) }
				</div>
			</div>
		</div>
	);
};

export default DesignSelector;
