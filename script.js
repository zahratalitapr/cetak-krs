function kirim(){
    let matkulPilih = [];
    let jmlhSks = 0;
    let checkboxes = document.querySelectorAll('.sks-checkbox');

    checkboxes.forEach(function(checkbox) {
        if(checkbox.checked){
            let row = checkbox.parentNode.parentNode;
            let kode = row.cells[0].innerText;
            let mataKuliah = row.cells[1].innerText;
            let sks = parseInt(row.cells[2].innerText);
            matkulPilih.push({kode: kode, mataKuliah: mataKuliah, sks: sks });
            jmlhSks += sks;
        }
    });


    if (jmlhSks > 10){
        alert("Anda relah memilih lebih dari 10 SKS");
        return;
    };

    let cetakKrs= window.open('', '_blank');
    cetakKrs.document.write('<html><head><title>Mata Kuliah Dipilih</title></head><body>');
    cetakKrs.document.write('<h1>Mata Kuliah Dipilih</h1>');
    cetakKrs.document.write('<table border="1"><thead><tr><th>Kode</th><th>Mata Kuliah</th><th>SKS</th></tr></thead><tbody>');

    matkulPilih.forEach(function(matkul){
        cetakKrs.document.write('<tr><td>' + matkul.kode + '</td><td>'
            + matkul.mataKuliah + '</td><td>' + matkul.sks + '</td></tr>');
    });

    cetakKrs.document.write('</tbody></table></body></html>');
    cetakKrs.document.close();
}
     
