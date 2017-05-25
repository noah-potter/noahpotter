import jss from 'jss'
import preset from 'jss-preset-default'
import Color from 'color'

jss.setup(preset())

export default jss;

const white = Color('white');
const softWhite = Color('#F1F0F0');
const black = Color('black');
const green = Color('black');
const textBlack = Color('#1F1F1F');

const red = Color('#F44336');

const lighterestGrey = white.clone().darken(0.1);
const lightestGrey = white.clone().darken(0.2);
const lighterGrey = white.clone().darken(0.3);
const lightGrey = white.clone().darken(0.4);
const grey = white.clone().darken(0.5);
const darkGrey = white.clone().darken(0.6);
const darkerGrey = white.clone().darken(0.7);
const darkestGrey = white.clone().darken(0.8);
const darkerestGrey = white.clone().darken(0.9);

red
const red50 = Color('#FFEBEE')
const red100 = Color('#FFCDD2')
const red200 = Color('#EF9A9A')
const red300 = Color('#E57373')
const red400 = Color('#EF5350')
const red500 = Color('#F44336')
const red600 = Color('#E53935')
const red700 = Color('#D32F2F')
const red800 = Color('#C62828')
const red900 = Color('#B71C1C')
const redA100 = Color('#FF8A80')
const redA200 = Color('#FF5252')
const redA400 = Color('#FF1744')
const redA700 = Color('#D50000')

const pink50 = Color('#FCE4EC')
const pink100 = Color('#F8BBD0')
const pink200 = Color('#F48FB1')
const pink300 = Color('#F06292')
const pink400 = Color('#EC407A')
const pink500 = Color('#E91E63')
const pink600 = Color('#D81B60')
const pink700 = Color('#C2185B')
const pink800 = Color('#AD1457')
const pink900 = Color('#880E4F')
const pinkA100 = Color('#FF80AB')
const pinkA200 = Color('#FF4081')
const pinkA400 = Color('#F50057')
const pinkA700 = Color('#C51162')

const purple50 = Color('#F3E5F5')
const purple100 = Color('#E1BEE7')
const purple200 = Color('#CE93D8')
const purple300 = Color('#BA68C8')
const purple400 = Color('#AB47BC')
const purple500 = Color('#9C27B0')
const purple600 = Color('#8E24AA')
const purple700 = Color('#7B1FA2')
const purple800 = Color('#6A1B9A')
const purple900 = Color('#4A148C')
const purpleA100 = Color('#EA80FC')
const purpleA200 = Color('#E040FB')
const purpleA400 = Color('#D500F9')
const purpleA700 = Color('#AA00FF')

const deepPurple50 = Color('#EDE7F6')
const deepPurple100 = Color('#D1C4E9')
const deepPurple200 = Color('#B39DDB')
const deepPurple300 = Color('#9575CD')
const deepPurple400 = Color('#7E57C2')
const deepPurple500 = Color('#673AB7')
const deepPurple600 = Color('#5E35B1')
const deepPurple700 = Color('#512DA8')
const deepPurple800 = Color('#4527A0')
const deepPurple900 = Color('#311B92')
const deepPurpleA100 = Color('#B388FF')
const deepPurpleA200 = Color('#7C4DFF')
const deepPurpleA400 = Color('#651FFF')
const deepPurpleA700 = Color('#6200EA')

const indigo50 = Color('#E8EAF6')
const indigo100 = Color('#C5CAE9')
const indigo200 = Color('#9FA8DA')
const indigo300 = Color('#7986CB')
const indigo400 = Color('#5C6BC0')
const indigo500 = Color('#3F51B5')
const indigo600 = Color('#3949AB')
const indigo700 = Color('#303F9F')
const indigo800 = Color('#283593')
const indigo900 = Color('#1A237E')
const indigoA100 = Color('#8C9EFF')
const indigoA200 = Color('#536DFE')
const indigoA400 = Color('#3D5AFE')
const indigoA700 = Color('#304FFE')

const blue50 = Color('#E3F2FD')
const blue100 = Color('#BBDEFB')
const blue200 = Color('#90CAF9')
const blue300 = Color('#64B5F6')
const blue400 = Color('#42A5F5')
const blue500 = Color('#2196F3')
const blue600 = Color('#1E88E5')
const blue700 = Color('#1976D2')
const blue800 = Color('#1565C0')
const blue900 = Color('#0D47A1')
const blueA100 = Color('#82B1FF')
const blueA200 = Color('#448AFF')
const blueA400 = Color('#2979FF')
const blueA700 = Color('#2962FF')

const lightBlue50 = Color('#E1F5FE')
const lightBlue100 = Color('#B3E5FC')
const lightBlue200 = Color('#81D4FA')
const lightBlue300 = Color('#4FC3F7')
const lightBlue400 = Color('#29B6F6')
const lightBlue500 = Color('#03A9F4')
const lightBlue600 = Color('#039BE5')
const lightBlue700 = Color('#0288D1')
const lightBlue800 = Color('#0277BD')
const lightBlue900 = Color('#01579B')
const lightBlueA100 = Color('#80D8FF')
const lightBlueA200 = Color('#40C4FF')
const lightBlueA400 = Color('#00B0FF')
const lightBlueA700 = Color('#0091EA')

const cyan50 = Color('#E0F7FA')
const cyan100 = Color('#B2EBF2')
const cyan200 = Color('#80DEEA')
const cyan300 = Color('#4DD0E1')
const cyan400 = Color('#26C6DA')
const cyan500 = Color('#00BCD4')
const cyan600 = Color('#00ACC1')
const cyan700 = Color('#0097A7')
const cyan800 = Color('#00838F')
const cyan900 = Color('#006064')
const cyanA100 = Color('#84FFFF')
const cyanA200 = Color('#18FFFF')
const cyanA400 = Color('#00E5FF')
const cyanA700 = Color('#00B8D4')

const teal50 = Color('#E0F2F1')
const teal100 = Color('#B2DFDB')
const teal200 = Color('#80CBC4')
const teal300 = Color('#4DB6AC')
const teal400 = Color('#26A69A')
const teal500 = Color('#009688')
const teal600 = Color('#00897B')
const teal700 = Color('#00796B')
const teal800 = Color('#00695C')
const teal900 = Color('#004D40')
const tealA100 = Color('#A7FFEB')
const tealA200 = Color('#64FFDA')
const tealA400 = Color('#1DE9B6')
const tealA700 = Color('#00BFA5')

const green50 = Color('#E8F5E9')
const green100 = Color('#C8E6C9')
const green200 = Color('#A5D6A7')
const green300 = Color('#81C784')
const green400 = Color('#66BB6A')
const green500 = Color('#4CAF50')
const green600 = Color('#43A047')
const green700 = Color('#388E3C')
const green800 = Color('#2E7D32')
const green900 = Color('#1B5E20')
const greenA100 = Color('#B9F6CA')
const greenA200 = Color('#69F0AE')
const greenA400 = Color('#00E676')
const greenA700 = Color('#00C853')

const lightGreen50 = Color('#F1F8E9')
const lightGreen100 = Color('#DCEDC8')
const lightGreen200 = Color('#C5E1A5')
const lightGreen300 = Color('#AED581')
const lightGreen400 = Color('#9CCC65')
const lightGreen500 = Color('#8BC34A')
const lightGreen600 = Color('#7CB342')
const lightGreen700 = Color('#689F38')
const lightGreen800 = Color('#558B2F')
const lightGreen900 = Color('#33691E')
const lightGreenA100 = Color('#CCFF90')
const lightGreenA200 = Color('#B2FF59')
const lightGreenA400 = Color('#76FF03')
const lightGreenA700 = Color('#64DD17')

const lime50 = Color('#F9FBE7')
const lime100 = Color('#F0F4C3')
const lime200 = Color('#E6EE9C')
const lime300 = Color('#DCE775')
const lime400 = Color('#D4E157')
const lime500 = Color('#CDDC39')
const lime600 = Color('#C0CA33')
const lime700 = Color('#AFB42B')
const lime800 = Color('#9E9D24')
const lime900 = Color('#827717')
const limeA100 = Color('#F4FF81')
const limeA200 = Color('#EEFF41')
const limeA400 = Color('#C6FF00')
const limeA700 = Color('#AEEA00')

const yellow50 = Color('#FFFDE7')
const yellow100 = Color('#FFF9C4')
const yellow200 = Color('#FFF59D')
const yellow300 = Color('#FFF176')
const yellow400 = Color('#FFEE58')
const yellow500 = Color('#FFEB3B')
const yellow600 = Color('#FDD835')
const yellow700 = Color('#FBC02D')
const yellow800 = Color('#F9A825')
const yellow900 = Color('#F57F17')
const yellowA100 = Color('#FFFF8D')
const yellowA200 = Color('#FFFF00')
const yellowA400 = Color('#FFEA00')
const yellowA700 = Color('#FFD600')

const amber50 = Color('#FFF8E1')
const amber100 = Color('#FFECB3')
const amber200 = Color('#FFE082')
const amber300 = Color('#FFD54F')
const amber400 = Color('#FFCA28')
const amber500 = Color('#FFC107')
const amber600 = Color('#FFB300')
const amber700 = Color('#FFA000')
const amber800 = Color('#FF8F00')
const amber900 = Color('#FF6F00')
const amberA100 = Color('#FFE57F')
const amberA200 = Color('#FFD740')
const amberA400 = Color('#FFC400')
const amberA700 = Color('#FFAB00')

const orange50 = Color('#FFF3E0')
const orange100 = Color('#FFE0B2')
const orange200 = Color('#FFCC80')
const orange300 = Color('#FFB74D')
const orange400 = Color('#FFA726')
const orange500 = Color('#FF9800')
const orange600 = Color('#FB8C00')
const orange700 = Color('#F57C00')
const orange800 = Color('#EF6C00')
const orange900 = Color('#E65100')
const orangeA100 = Color('#FFD180')
const orangeA200 = Color('#FFAB40')
const orangeA400 = Color('#FF9100')
const orangeA700 = Color('#FF6D00')

const deepOrange50 = Color('#FBE9E7')
const deepOrange100 = Color('#FFCCBC')
const deepOrange200 = Color('#FFAB91')
const deepOrange300 = Color('#FF8A65')
const deepOrange400 = Color('#FF7043')
const deepOrange500 = Color('#FF5722')
const deepOrange600 = Color('#F4511E')
const deepOrange700 = Color('#E64A19')
const deepOrange800 = Color('#D84315')
const deepOrange900 = Color('#BF360C')
const deepOrangeA100 = Color('#FF9E80')
const deepOrangeA200 = Color('#FF6E40')
const deepOrangeA400 = Color('#FF3D00')
const deepOrangeA700 = Color('#DD2C00')

const brown50 = Color('#EFEBE9')
const brown100 = Color('#D7CCC8')
const brown200 = Color('#BCAAA4')
const brown300 = Color('#A1887F')
const brown400 = Color('#8D6E63')
const brown500 = Color('#795548')
const brown600 = Color('#6D4C41')
const brown700 = Color('#5D4037')
const brown800 = Color('#4E342E')
const brown900 = Color('#3E2723')

const grey50 = Color('#FAFAFA')
const grey100 = Color('#F5F5F5')
const grey200 = Color('#EEEEEE')
const grey300 = Color('#E0E0E0')
const grey400 = Color('#BDBDBD')
const grey500 = Color('#9E9E9E')
const grey600 = Color('#757575')
const grey700 = Color('#616161')
const grey800 = Color('#424242')
const grey900 = Color('#212121')

const blueGrey50 = Color('#ECEFF1')
const blueGrey100 = Color('#CFD8DC')
const blueGrey200 = Color('#B0BEC5')
const blueGrey300 = Color('#90A4AE')
const blueGrey400 = Color('#78909C')
const blueGrey500 = Color('#607D8B')
const blueGrey600 = Color('#546E7A')
const blueGrey700 = Color('#455A64')
const blueGrey800 = Color('#37474F')
const blueGrey900 = Color('#263238')

const lightBorder = white.clone().clearer(0.7);
const darkBorder = black.clone().clearer(0.7);

const dark50 = black.clone().clearer(0.95);
const dark100 = black.clone().clearer(0.9);
const dark200 = black.clone().clearer(0.8);
const dark300 = black.clone().clearer(0.7);
const dark400 = black.clone().clearer(0.6);
const dark500 = black.clone().clearer(0.5);
const dark600 = black.clone().clearer(0.4);
const dark700 = black.clone().clearer(0.3);
const dark800 = black.clone().clearer(0.2);
const dark900 = black.clone().clearer(0.1);

const light50 = white.clone().clearer(0.95);
const light100 = white.clone().clearer(0.9);
const light200 = white.clone().clearer(0.8);
const light300 = white.clone().clearer(0.7);
const light400 = white.clone().clearer(0.6);
const light500 = white.clone().clearer(0.5);
const light600 = white.clone().clearer(0.4);
const light700 = white.clone().clearer(0.3);
const light800 = white.clone().clearer(0.2);
const light900 = white.clone().clearer(0.1);

export const colors = {
	white,
	softWhite,
	lightestGrey,
	lighterGrey,
	lightGrey,
	grey,
	darkGrey,
	darkerGrey,
	darkestGrey,
	red50,
	red100,
	red200,
	red300,
	red400,
	red500,
	red600,
	red700,
	red800,
	red900,
	redA100,
	redA200,
	redA400,
	redA700,
	pink50,
	pink100,
	pink200,
	pink300,
	pink400,
	pink500,
	pink600,
	pink700,
	pink800,
	pink900,
	pinkA100,
	pinkA200,
	pinkA400,
	pinkA700,
	purple50,
	purple100,
	purple200,
	purple300,
	purple400,
	purple500,
	purple600,
	purple700,
	purple800,
	purple900,
	purpleA100,
	purpleA200,
	purpleA400,
	purpleA700,
	deepPurple50,
	deepPurple100,
	deepPurple200,
	deepPurple300,
	deepPurple400,
	deepPurple500,
	deepPurple600,
	deepPurple700,
	deepPurple800,
	deepPurple900,
	deepPurpleA100,
	deepPurpleA200,
	deepPurpleA400,
	deepPurpleA700,
	indigo50,
	indigo100,
	indigo200,
	indigo300,
	indigo400,
	indigo500,
	indigo600,
	indigo700,
	indigo800,
	indigo900,
	indigoA100,
	indigoA200,
	indigoA400,
	indigoA700,
	blue50,
	blue100,
	blue200,
	blue300,
	blue400,
	blue500,
	blue600,
	blue700,
	blue800,
	blue900,
	blueA100,
	blueA200,
	blueA400,
	blueA700,
	lightBlue50,
	lightBlue100,
	lightBlue200,
	lightBlue300,
	lightBlue400,
	lightBlue500,
	lightBlue600,
	lightBlue700,
	lightBlue800,
	lightBlue900,
	lightBlueA100,
	lightBlueA200,
	lightBlueA400,
	lightBlueA700,
	cyan50,
	cyan100,
	cyan200,
	cyan300,
	cyan400,
	cyan500,
	cyan600,
	cyan700,
	cyan800,
	cyan900,
	cyanA100,
	cyanA200,
	cyanA400,
	cyanA700,
	teal50,
	teal100,
	teal200,
	teal300,
	teal400,
	teal500,
	teal600,
	teal700,
	teal800,
	teal900,
	tealA100,
	tealA200,
	tealA400,
	tealA700,
	green50,
	green100,
	green200,
	green300,
	green400,
	green500,
	green600,
	green700,
	green800,
	green900,
	greenA100,
	greenA200,
	greenA400,
	greenA700,
	lightGreen50,
	lightGreen100,
	lightGreen200,
	lightGreen300,
	lightGreen400,
	lightGreen500,
	lightGreen600,
	lightGreen700,
	lightGreen800,
	lightGreen900,
	lightGreenA100,
	lightGreenA200,
	lightGreenA400,
	lightGreenA700,
	lime50,
	lime100,
	lime200,
	lime300,
	lime400,
	lime500,
	lime600,
	lime700,
	lime800,
	lime900,
	limeA100,
	limeA200,
	limeA400,
	limeA700,
	yellow50,
	yellow100,
	yellow200,
	yellow300,
	yellow400,
	yellow500,
	yellow600,
	yellow700,
	yellow800,
	yellow900,
	yellowA100,
	yellowA200,
	yellowA400,
	yellowA700,
	amber50,
	amber100,
	amber200,
	amber300,
	amber400,
	amber500,
	amber600,
	amber700,
	amber800,
	amber900,
	amberA100,
	amberA200,
	amberA400,
	amberA700,
	orange50,
	orange100,
	orange200,
	orange300,
	orange400,
	orange500,
	orange600,
	orange700,
	orange800,
	orange900,
	orangeA100,
	orangeA200,
	orangeA400,
	orangeA700,
	deepOrange50,
	deepOrange100,
	deepOrange200,
	deepOrange300,
	deepOrange400,
	deepOrange500,
	deepOrange600,
	deepOrange700,
	deepOrange800,
	deepOrange900,
	deepOrangeA100,
	deepOrangeA200,
	deepOrangeA400,
	deepOrangeA700,
	brown50,
	brown100,
	brown200,
	brown300,
	brown400,
	brown500,
	brown600,
	brown700,
	brown800,
	brown900,
	grey50,
	grey100,
	grey200,
	grey300,
	grey400,
	grey500,
	grey600,
	grey700,
	grey800,
	grey900,
	blueGrey50,
	blueGrey100,
	blueGrey200,
	blueGrey300,
	blueGrey400,
	blueGrey500,
	blueGrey600,
	blueGrey700,
	blueGrey800,
	blueGrey900,
}

export const variables = {

	headerColor: orange500.rgbString(),
	calendarStartBackground: 'white',
	calendarSectionBackground1: orange500.rgbString(),
	calendarSectionBackground2: blueGrey500.rgbString(),
	footerBackground: blue900.rgbString(),
	projectsBackground: blue900.rgbString(),
	dividerBackground: blue700.rgbString(),
	lightDividerBackground: blue500.rgbString(),
	nonActiveCounterBackground: grey500.rgbString(),
	activeCounterBackground: blue500.rgbString(),
	centerPictureBackground: grey500.rgbString(),

	tagBackground: blue500.rgbString(),
	tagBorder: `1px solid ${blue800.rgbString()}`,

	background: '#131313',
	workBackground: white.clone().clearer(0.85).rgbString(),
	workBorder: `1px solid ${white.clone().clearer(0.5).rgbString()}`,

	labelBackgroundColor: white.rgbString(),
	disabledLabelBackgroundColor: lighterestGrey.rgbString(),
	disabledLabelColor: lightGrey.rgbString(),
	labelColor: darkGrey.rgbString(),
	lightLabelColor: darkestGrey.rgbString(),
	labelHoverBackgroundColor: red200.rgbString(),
	labelHeaderBackgroundColor: lightestGrey.rgbString(),
	selectedLabelBackgroundColor: red300.rgbString(),
	selectedLabelColor: white.rgbString(),
	labelHoverColor: white.rgbString(),

	linkHover: blue500.rgbString(),

	buttonBoxShadow: '0 2px 5px 0 rgba(0,0,0,.26)',
	darkBorder: `1px solid ${darkBorder.rgbString()}`,
	lightBorder: `1px solid ${lightBorder.rgbString()}`,

	dimBackground: dark300.rgbString(),
	popoverBackground: dark800.rgbString(),

	black: black.rgbString(),
	textBlack: textBlack.rgbString(),
	textWhite: white.rgbString(),
	redText: red500.rgbString(),
	softWhite: softWhite.rgbString(),

	guestPage: {
		background: blue300.rgbString(),
	},

	card: {
		light: {
			divider: `1px solid ${lighterGrey.rgbString()}`,
		},
	},

	input: {
		background: lighterestGrey.rgbString(),
		hover: {
			background: lightestGrey.rgbString(),
		},
		focus: {
			background: lighterGrey.rgbString(),
		},
	},

	button: {
		group: {
			border: `1px solid ${darkBorder.rgbString()}`
		},
		dark: {
			flat: {
				hover: {
					background: light200.rgbString(),
				},
				active: {
					background: light500.rgbString()
				},
				disabled: {
					color: light300.rgbString()
				},
				primary: {
					color: red500.rgbString()
				},
				default: {
					color: white.rgbString()
				},
				success: {
					color: green500.rgbString()
				},
				yellow: {
					color: yellow500.rgbString(),
				}
			},
			raised: {
				hover: {
					background: light100.rgbString(),
				},
				active: {
					background: light500.rgbString()
				},
				disabled: {
					color: light300.rgbString()
				},
				primary: {
					color: red500.rgbString(),
				},
				default: {
					color: white.rgbString()
				},
				success: {
					color: green500.rgbString()
				},
				yellow: {
					color: yellow500.rgbString(),
				}
			},
			plain: {
				hover: {
					background: light100.rgbString(),
				},
				active: {
					background: light500.rgbString()
				},
				disabled: {
					color: light300.rgbString()
				},
				primary: {
					color: red500.rgbString()
				},
				default: {
					color: white.rgbString()
				},
				success: {
					color: green500.rgbString()
				}
			}
		},
		light: {
			flat: {
				hover: {
					background: dark100.rgbString(),
				},
				active: {
					background: dark500.rgbString()
				},
				focus: {
					background: dark100.rgbString()
				},
				disabled: {
					color: dark300.rgbString()
				},
				primary: {
					color: red500.rgbString()
				},
				default: {
					color: textBlack.rgbString()
				},
				success: {
					color: green500.rgbString()
				}
			},
			raised: {
				hover: {
					background: light100.rgbString(),
				},
				active: {
					background: light500.rgbString()
				},
				disabled: {
					color: light300.rgbString()
				},
				primary: {
					color: red500.rgbString()
				},
				default: {
					color: white.rgbString()
				},
				success: {
					color: green500.rgbString()
				}
			},
			plain: {
				hover: {
					background: light100.rgbString(),
				},
				active: {
					background: light500.rgbString()
				},
				disabled: {
					color: light300.rgbString()
				},
				primary: {
					color: red500.rgbString()
				},
				default: {
					color: white.rgbString()
				},
				success: {
					color: green500.rgbString()
				}
			}
		}
	},

	colors: {
		primary: {
			main: red500.rgbString(),
			shadow: red700.rgbString(),
			hover: red600.rgbString(),
			active: red700.rgbString(),
			disabled: red800.rgbString(),
		},
		secondary: {
			main: brown500.rgbString(),
			shadow: brown700.rgbString(),
			hover: brown600.rgbString(),
			active: brown700.rgbString(),
			disabled: brown800.rgbString(),
		},
		tertiary: {
			main: green500.rgbString(),
			shadow: green700.rgbString(),
			hover: green600.rgbString(),
			active: green700.rgbString(),
			disabled: green800.rgbString(),
		},
		fourthary: {
			main: lime500.rgbString(),
			shadow: lime700.rgbString(),
			hover: lime600.rgbString(),
			active: lime700.rgbString(),
			disabled: lime800.rgbString(),
		},
		fifthary: {
			main: yellow500.rgbString(),
			shadow: yellow700.rgbString(),
			hover: yellow600.rgbString(),
			active: yellow700.rgbString(),
			disabled: yellow800.rgbString(),
		},
		default: {
			main: white.rgbString(),
			shadow: lightestGrey.rgbString(),
			hover: lighterGrey.rgbString(),
			active: lightGrey.rgbString(),
		},
		success: {
			main: green500.rgbString(),
			shadow: green800.rgbString(),
			hover: green600.rgbString(),
			active: green700.rgbString(),
		},
		yellow: {
			main: yellow500.rgbString(),
		}
	},

	calendar: {
		background: white.rgbString(),
		border: `1px solid ${darkBorder.rgbString()}`,
		title: {
			background: red500.rgbString(),
			color: white.rgbString(),
		},
		footer: {
			green50: red500.rgbString(),
			color: white.rgbString(),
		},
		header: {
			background: red500.rgbString(),
			color: white.rgbString(),
			withTitle: {
				background: 'none',
				color: textBlack.rgbString(),
			}
		},
		body: {
			day: {
				hover: {
					background: red200.rgbString(),
					color: white.rgbString()
				},
				inactive: {
					background: grey.clone().lighten(0.82).rgbString(),
					color: grey.rgbString()
				},
				selected: {
					background: red300.rgbString(),
					color: white.rgbString()
				}
			},
			today: {
				border: `1px solid ${blue500.rgbString()}`,
				background: blue300.rgbString(),
			}
		},
		event: {
			background: purple600.rgbString(),
			color: white.rgbString(),
			potential: {
				background: purple400.rgbString(),
				color: white.rgbString(),
			},
			hover: {
				background: purple400.rgbString(),
				color: white.rgbString(),
			}
		}
	},

	table: {
		headerBackground: white.clone().darken(0.6).rgbString(),
		oddBackground: 'white',
		evenBackground: red50.rgbString(),
		hoverBackground: red100.rgbString(),
		dark: {
			evenBackground: white.clone().darken(0.73).rgbString(),
			oddBackground: white.clone().darken(0.69).rgbString(),
			hoverBackground: white.clone().darken(0.62).rgbString(),
			selectedBackground: blue500.rgbString(),
		}
	},

	pagination: {
		background: grey.rgbString(),
		hoveredBackground: darkGrey.rgbString()
	},

	checkbox: {
		uncheckedColor: textBlack.rgbString(),
		checkedColor: 'white',
		disabledColor: lightGrey.rgbString(),
	},
	permissions: {
		noIdSelectedHeader: {
			background: red500.clone().clearer(0.4).rgbString(),
			border: `1px solid ${red500.rgbString()}`,
		}
	},
}