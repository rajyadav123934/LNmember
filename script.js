document.addEventListener("DOMContentLoaded", function () {

const memberId = "LNHSS-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);

document.getElementById("memberId").value = memberId;

document.getElementById("date").valueAsDate = new Date();

document.getElementById("previewBtn").addEventListener("click", function () {

document.getElementById("r_id").innerText =
document.getElementById("memberId").value;

document.getElementById("r_name").innerText =
document.getElementById("name").value;

document.getElementById("r_father").innerText =
document.getElementById("father").value;

document.getElementById("r_mobile").innerText =
document.getElementById("mobile").value;

document.getElementById("r_email").innerText =
document.getElementById("email").value;

document.getElementById("r_address").innerText =
document.getElementById("address").value;

document.getElementById("r_type").innerText =
document.getElementById("type").options[
document.getElementById("type").selectedIndex
].text;

document.getElementById("r_date").innerText =
document.getElementById("date").value;

document.getElementById("receipt").style.display = "block";

});

document.getElementById("downloadBtn").addEventListener("click", function () {

const { jsPDF } = window.jspdf;

const pdf = new jsPDF();

pdf.setFontSize(18);

pdf.text("Lakshmi Narayan Harikripa Sewa Sansthan", 10, 15);

pdf.setFontSize(14);

pdf.text("Membership Receipt", 10, 25);

pdf.setFontSize(11);

pdf.text("Membership ID : " + document.getElementById("memberId").value,10,40);

pdf.text("Name : " + document.getElementById("name").value,10,50);

pdf.text("Father/Husband : " + document.getElementById("father").value,10,60);

pdf.text("Mobile : " + document.getElementById("mobile").value,10,70);

pdf.text("Email : " + document.getElementById("email").value,10,80);

pdf.text("Address : " + document.getElementById("address").value,10,90);

pdf.text("Membership : " +
document.getElementById("type").options[
document.getElementById("type").selectedIndex
].text,10,100);

pdf.text("Date : " + document.getElementById("date").value,10,110);

pdf.save("Membership_Receipt.pdf");

});

});
