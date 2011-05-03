
function MediaplexFlashAOL(){
var mp_swver = 0, mp_html = "";

if( navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin ) {
  if( navigator.plugins && navigator.plugins["Shockwave Flash"] ) {
    mp_swver = (navigator.plugins["Shockwave Flash"].description.split( " " ))[2];
  }
} else if ( navigator.userAgent && navigator.userAgent.indexOf("MSIE") >= 0 && ( navigator.userAgent.indexOf("Windows") >= 0 ) ) {
var mp_axo,e;
  for( var mp_i = 11; mp_i > 6; mp_i-- ) {
    try {
    mp_axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + mp_i );
    mp_swver = mp_i;
    break;
    } catch (e) {}
  }
}
if( mp_swver >= 6 ) {
  mp_html =  "<OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" ";
  mp_html += " codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0\" id=\"6246635\" NAME=\"movie6246635\" WIDTH=\"300\" HEIGHT=\"250\">";
  if( mp_swver > 5 ) {
    mp_html += "<PARAM NAME=\"FlashVars\" VALUE=\"clickTAG=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161&clickTag=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161&clickTag1=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161\">";
    mp_html += "<PARAM NAME=\"movie\" VALUE=\"http://img-cdn.mediaplex.com/0/16653/Booth_ban_300x250_YGSN_CS3.swf\">";
    mp_html += "<PARAM NAME=\"wmode\" VALUE=\"opaque\">";
    mp_html += "<PARAM NAME=\"allowscriptaccess\" VALUE=\"always\">";
  } else
    mp_html += "<PARAM NAME=\"movie\" VALUE=\"http://img-cdn.mediaplex.com/0/16653/Booth_ban_300x250_YGSN_CS3.swf?clickTAG=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161&clickTag=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161&clickTag1=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161\">";
  mp_html += "<PARAM NAME=wmode VALUE='opaque'>";
  mp_html += "<PARAM NAME=\"allowscriptaccess\" VALUE=\"always\">";
  if( mp_swver > 5 )
    mp_html += "<EMBED wmode=\"opaque\" allowscriptaccess=\"always\" NAME=\"6246635\" src=\"http://img-cdn.mediaplex.com/0/16653/Booth_ban_300x250_YGSN_CS3.swf\" FlashVars=\"clickTAG=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161&clickTag=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161&clickTag1=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161\"";
  else
    mp_html += "<EMBED wmode=\"opaque\" allowscriptaccess=\"always\" NAME=\"6246635\" src=\"http://img-cdn.mediaplex.com/0/16653/Booth_ban_300x250_YGSN_CS3.swf?clickTAG=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161&clickTag=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161&clickTag1=http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com%2Fad%2Fck%2F16653-122625-14296-0%3Fmpt%3D3351161\"";
  mp_html += " swLiveConnect=\"FALSE\" WIDTH=\"300\" HEIGHT=\"250\" TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"\">";
  mp_html += "</EMBED>";
  mp_html += "</OBJECT>";
  if( window.DocumentWrite )
    DocumentWrite( mp_html );
  else
    document.write( mp_html );
} else if( !( navigator.appName && navigator.appName.indexOf("Netscape") >= 0 && navigator.appVersion.indexOf("2.") >= 0 ) ) {
  document.write("<a href=\"http://ad.doubleclick.net/click;h=v8/3afa/3/0/*/p;228703581;0-0;1;47327277;4307-300/250;40952273/40970060/1;u=14gn1Wr3lai6FGk4B4imlh;~sscs=?http://altfarm.mediaplex.com/ad/ck/16653-122625-14296-0?mpt=3351161\" target=\"_blank\"><img src=\"http://img-cdn.mediaplex.com/0/16653/Booth_ban_300x250_YGSN_CS3.gif\" width=\"300\" height=\"250\" border=\"0\" alt=\"\"></a>");
}
}
MediaplexFlashAOL();
//-->

