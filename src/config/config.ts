export const verification_code_retry_interval = 60;
// 手机号正则
export const mobilephone_regx = /^1[3456789]\d{9}$/;
export const phone_regx = /^[0-9]{3,4}-[0-9]{7,8}$/;
export const nonnegative_number = /^(?!(\d+)$)(?![\u4e00-\u9fff]+$)(?!(\-+)$)(?!(_+)$)[\u4e00-\u9fffa-zA-Z\d\-_]{4,20}$/;
// 身份证号正则
export const IDCard_regx = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;

export const CMB_regx = /(^(402658|410062|468203|512425|524011|622580|622588|622598|622609|95555|621286|621483|621485|621486|621299)\d{10}$|(^(690755)\d{9}$)|(^(690755)\d{12}$))/;

export const selectRule = /^[0-9]\d*$/;

export const date_format = 'YYYY-MM-DD';
export const date_format2 = 'YYYYMMDDhhmmss';
export const datetime_format = 'YYYY-MM-DD HH:mm';
export const time_format2 = 'HH:mm:ss';
export const time_format = 'HH:mm';
export const email_regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const dateFormat = 'YYYY-MM-DD';
export const monthFormat = 'YYYY-MM';
