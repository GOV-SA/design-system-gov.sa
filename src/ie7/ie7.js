/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'govsa\'">' + entity + '</span>' + html;
	}
	var icons = {
		'govsa--24': '&#xe900;',
		'govsa--alert': '&#xe901;',
		'govsa--arrowdown': '&#xe902;',
		'govsa--arrowleft': '&#xe903;',
		'govsa--arrowright': '&#xe904;',
		'govsa--arrowup': '&#xe905;',
		'govsa--black_white_documents': '&#xe921;',
		'govsa--black_white_payment': '&#xe92b;',
		'govsa--black_white_regulations': '&#xe942;',
		'govsa--black_white_setting': '&#xe943;',
		'govsa--black_white_statistics': '&#xe94b;',
		'govsa--bookmark': '&#xe96f;',
		'govsa--chat': '&#xe970;',
		'govsa--close': '&#xe972;',
		'govsa--closed': '&#xe973;',
		'govsa--closeTag': '&#xe974;',
		'govsa--Color': '&#xe976;',
		'govsa--colored_backgrounds_vs_colored_element_documents': '&#xe994;',
		'govsa--colored_backgrounds_vs_colored_element_payment': '&#xe9a3;',
		'govsa--colored_backgrounds_vs_colored_element_regulations': '&#xe9bd;',
		'govsa--colored_backgrounds_vs_colored_element_setting': '&#xe9c4;',
		'govsa--colored_backgrounds_vs_colored_element_statistics': '&#xe9cd;',
		'govsa--contact': '&#xe9e9;',
		'govsa--delete': '&#xe9ea;',
		'govsa--download': '&#xe9eb;',
		'govsa--download-white': '&#xe9ec;',
		'govsa--edit': '&#xe9ed;',
		'govsa--error': '&#xe9ee;',
		'govsa--export': '&#xe9f0;',
		'govsa--external': '&#xe9f1;',
		'govsa--eye': '&#xe9f2;',
		'govsa--favourite': '&#xe9f3;',
		'govsa--Filled_payment': '&#xea2a;',
		'govsa--Filled_regulations': '&#xea4b;',
		'govsa--Filled_statistics': '&#xea5f;',
		'govsa--home': '&#xea8f;',
		'govsa--image': '&#xea90;',
		'govsa--info-copy': '&#xea91;',
		'govsa--info': '&#xea93;',
		'govsa--info-blue': '&#xea94;',
		'govsa--left': '&#xea96;',
		'govsa--lock': '&#xea97;',
		'govsa--mail': '&#xea98;',
		'govsa--menu': '&#xea99;',
		'govsa--Monochrome_documents': '&#xeaaf;',
		'govsa--Monochrome_payment': '&#xeabc;',
		'govsa--Monochrome_regulations': '&#xead4;',
		'govsa--Monochrome_setting': '&#xead5;',
		'govsa--Monochrome_statistics': '&#xeadd;',
		'govsa--notification': '&#xeaf7;',
		'govsa--options': '&#xeaf8;',
		'govsa--Path': '&#xeaf9;',
		'govsa--plus': '&#xeafa;',
		'govsa--renew': '&#xeafb;',
		'govsa--right': '&#xeafc;',
		'govsa--setting': '&#xeaff;',
		'govsa--star': '&#xeb00;',
		'govsa--success': '&#xeb01;',
		'govsa--upload': '&#xeb05;',
		'govsa--user': '&#xeb06;',
		'govsa--white_background_vs_colored_elements_documents': '&#xeb1d;',
		'govsa--white_background_vs_colored_elements_payment': '&#xeb29;',
		'govsa--white_background_vs_colored_elements_regulations': '&#xeb41;',
		'govsa--white_background_vs_colored_elements_setting': '&#xeb47;',
		'govsa--white_background_vs_colored_elements_statistics': '&#xeb4f;',
		'govsa--zoom': '&#xeb6a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/govsa--[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
