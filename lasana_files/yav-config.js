/***********************************************************************
 * YAV - Yet Another Validator  v2.0                                   *
 * Copyright (C) 2005-2008                                             *
 * Author: Federico Crivellaro <f.crivellaro@gmail.com>                *
 * WWW: http://yav.sourceforge.net                                     *
 ***********************************************************************/

var yav_config = {

// CHANGE THESE VARIABLES FOR YOUR OWN SETUP

// if you want yav to highligh fields with errors
inputhighlight : true,
// if you want to use multiple class names
multipleclassname : true,
// classname you want for the error highlighting
inputclasserror : 'inputError',
// classname you want for your fields without highlighting
inputclassnormal : 'inputNormal',
// classname you want for the inner error highlighting
innererror : 'innerError',
// classname you want for the inner help highlighting
innerhelp : 'innerHelp',
// div name where errors (and help) will appear (or where jsVar variable is dinamically defined)
errorsdiv : 'errorsDiv',
// if you want yav to alert you for javascript errors (only for developers)
debugmode : false,
// if you want yav to trim the strings
trimenabled : true,

// change to set your own decimal separator and your date format
DECIMAL_SEP : '.',
THOUSAND_SEP : ',',
DATE_FORMAT : 'yyyy-MM-dd',

// change to set your own rules based on regular expressions
alphabetic_regex : "^[A-Za-z]*$",
alphanumeric_regex : "^[A-Za-z0-9]*$",
alnumhyphen_regex : "^[A-Za-z0-9\-_]*$",
alnumhyphenat_regex : "^[A-Za-z0-9\-_@]*$",
alphaspace_regex : "^[A-Za-z0-9\-_ \n\r\t]*$",
email_regex : "^(([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z\.]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}){0,1}$",

// change to set your own rule separator
RULE_SEP : '|',

// change these strings for your own translation (do not change {n} values!)
HEADER_MSG : '',
FOOTER_MSG : '',
DEFAULT_MSG : '入力値が不正です。',
REQUIRED_MSG : '入力してください。',
ALPHABETIC_MSG : '「A-Za-z」のみ入力できます。',
ALPHANUMERIC_MSG : '「A-Za-z0-9」のみ入力できます。',
ALNUMHYPHEN_MSG : '「A-Za-z0-9\-_」のみ入力できます。',
ALNUMHYPHENAT_MSG : '「A-Za-z0-9\-_@」のみ入力できます。',
ALPHASPACE_MSG : '「A-Za-z0-9\-_半角スペース」のみ入力できます。',
MINLENGTH_MSG : '{2}文字以上入力してください。',
MAXLENGTH_MSG : '{2}文字以下しか入力できません。',
NUMRANGE_MSG : '{2}の値までの値にしてください。',
DATE_MSG : 'yyyy-MM-dd のフォーマットで入力してください。',
NUMERIC_MSG : '数値のみ入力できます。',
INTEGER_MSG : '整数値のみ入力できます。。',
DOUBLE_MSG : '十進数でなければなりません。',
REGEXP_MSG : '{2}のフォーマットで入力してください。',
EQUAL_MSG : '{2}は同じ値である必要があります。',
NOTEQUAL_MSG : ' {2}の値は違う必要があります。',
DATE_LT_MSG : '{2}より前の値である必要があります。',
DATE_LE_MSG : '{2}と同じか、それより前の値である必要があります。',
EMAIL_MSG : 'メールアドレスを入れてください。',
EMPTY_MSG : '空白である必要があります。'

}//end