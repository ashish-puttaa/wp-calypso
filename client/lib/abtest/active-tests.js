export default {
	cartNudgeUpdateToPremium: {
		datestamp: '20180917',
		variations: {
			test: 50,
			control: 50,
		},
		defaultVariation: 'control',
		allowExistingUsers: true,
	},
	springSale30PercentOff: {
		datestamp: '20180413',
		variations: {
			upsell: 50,
			control: 50,
		},
		defaultVariation: 'control',
		allowExistingUsers: true,
	},
	ATPromptOnCancel: {
		datestamp: '20170515',
		variations: {
			hide: 20,
			show: 80,
		},
		defaultVariation: 'hide',
		allowExistingUsers: true,
	},
	showCompositeCheckout: {
		datestamp: '20200326',
		variations: {
			composite: 50,
			regular: 50,
		},
		defaultVariation: 'regular',
		allowExistingUsers: true,
	},
	skipThemesSelectionModal: {
		datestamp: '20170904',
		variations: {
			skip: 50,
			show: 50,
		},
		defaultVariation: 'show',
		allowExistingUsers: true,
		localeTargets: 'any',
	},
	builderReferralStatsNudge: {
		datestamp: '20181218',
		variations: {
			builderReferralBanner: 25,
			googleMyBusinessBanner: 75,
		},
		defaultVariation: 'googleMyBusinessBanner',
	},
	builderReferralThemesBanner: {
		datestamp: '20181218',
		variations: {
			builderReferralBanner: 25,
			original: 75,
		},
		defaultVariation: 'original',
	},
	pageBuilderMVP: {
		datestamp: '20190419',
		variations: {
			control: 100,
			test: 0,
		},
		defaultVariation: 'control',
		allowExistingUsers: true,
	},
	conciergeUpsellDial: {
		//this test is used to dial down the upsell offer
		datestamp: '20200421',
		variations: {
			offer: 50,
			noOffer: 50,
		},
		defaultVariation: 'noOffer',
		allowExistingUsers: true,
	},
	skippableDomainStep: {
		datestamp: '20290717',
		variations: {
			skippable: 0,
			notSkippable: 100,
		},
		defaultVariation: 'notSkippable',
		allowExistingUsers: true,
	},
	passwordlessSignup: {
		datestamp: '20291029',
		variations: {
			passwordless: 0,
			default: 100,
		},
		defaultVariation: 'default',
	},
	domainStepCopyUpdates: {
		datestamp: '20191121',
		variations: {
			variantShowUpdates: 100,
			control: 0,
		},
		defaultVariation: 'variantShowUpdates',
		allowExistingUsers: true,
	},
	ATPrivacy: {
		datestamp: '20200331',
		variations: {
			variant: 5,
			control: 95,
		},
		defaultVariation: 'control',
		allowExistingUsers: false,
	},
	domainStepPlanStepSwap: {
		datestamp: '20200415',
		variations: {
			variantShowSwapped: 50,
			control: 50,
		},
		defaultVariation: 'control',
		allowExistingUsers: true,
	},
	showActiveTicketsNotice: {
		datestamp: '20200430',
		variations: {
			showNotice: 50,
			control: 50,
		},
		defaultVariation: 'control',
		allowExistingUsers: true,
	},
	domainShowJPResultsInJapan: {
		datestamp: '20200506',
		variations: {
			variantShowJPResults: 50,
			control: 50,
		},
		localeTargets: 'any',
		countryCodeTargets: [ 'JP' ],
	},
};
