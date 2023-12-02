function form()
{
var a
document.this_form.name.value;
if(a==null || a=="")
{
alert("please write your name")
return false;
}
var b
document.this_form.address.value;
if(b==null || b=="")
{

alert("please write your address")
return false;
}
var c
document.this_form.age.value;
if(c==null || c=="")
{

alert("please write your age")
return false;
}
var data
document.this_form.email.value;
var j = data.indexOf ("@")
var i = data.indexOf (".")
var diff = parseInt(i) + paraseInt(j)
var k = parseInt(j) + 1
var c = data.chart(k)
if (i<1|| diff<=1 || c=="")
{

alert("invalid e-mail address")
document.this_form.email.focus();
}
if((this-form.gender.checked==false)&&
(this-form.gender.checked==false))
{
alert("please select your gender")
}
}
