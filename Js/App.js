function Calc() {
    var v_məbləğ = document.getElementById("məbləğ").value;
    var v_müddət = document.getElementById("müddət").value;
    var v_faiz = document.getElementById("faiz").value;

    var məbləğ = Number(v_məbləğ);
    var müddət = Number(v_müddət);
    var faiz = Number(v_faiz);

    document.getElementById("illik").innerHTML = (məbləğ*faiz / 100) + məbləğ;
    document.getElementById("aylıq").innerHTML = ((məbləğ*faiz / 100) + məbləğ) / müddət;
}