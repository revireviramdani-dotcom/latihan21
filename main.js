//array global untuk menyimpan data barang 
//sekarang akan menyimpan 
//[nama, harga], [nama, harga], dst...
let dataBarang = []

// fungsi format rupiah 1.000.000
function rupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// fungsi untuk menambah barang ke dalam keranjang
function tambah() {
  //mengambil data nama dari elemen input data id "hargainput"
 let nama = document.getElementById("namabaranginput").value
 
  //mengambil data harga dari elemen input dengan id "hargainput"
  //dan mengubah menjadi angka
  let harga = Number(document.getElementById("hargainput").value)
  
  //masukkan data harga ke dalam array dataBarang
  dataBarang.push([nama,harga])
  //kosokan input nama setelah ditamabahkan 
  document.getElementById("hargainput").value = ""
    //kosokan input nama setelah ditamabahkan 
  document.getElementById("namabaranginput").value = ""
  
  //tampilkan data harga barang
  tampilkan()
}

function tampilkan() {
  let total = 0
  let output = ""

  //loop input harga barang dari array global data barang
  for (let i = 0; i < dataBarang.length; i++) {
    //dataBarang[i][0] adalah nama barang
    //dataBarang[i][1]adalah harga barang
    let nama = dataBarang[i][0]
    let harga = dataBarang[i][1]
    total += harga
    
    output += (i + 1) + "."+ nama +" : Rp " + rupiah(harga) 
    + "<button onclick='hapusIndex("+i+")' class='hapus2'>hapus</button>"
    
    +"<br>"
  }
  
  output += "<hr>Total: Rp" + rupiah(total)
  
  document.getElementById("hasil").innerHTML = output
}
// fungsi untuk mengahapus barang terakhir dari keranjang
function hapus() {
  dataBarang.pop()
  tampilkan()
}
// fungsi untuk mereset keranjang
function reset() {
  dataBarang = []
  tampilkan()
}
// fungsi untuk mengedit harga barang berdasarkan nomor barang
function edit() {
  // ubah nomor barang manjadi index arrey dengan mengurangi 1
  let index = Number(document.getElementById("nomor").value) -1
  //ambil nama edit dari input
  let nama = document.getElementById("namabarangedit").value  // ambil harga edit dari input
  let harga = Number(document.getElementById("hargaedit").value) 
  
  // periksa apakah index valid
  if (index >= 0 && index < dataBarang.length) {
    // update haraga barang di array dataBarang
    dataBarang[index][0] = nama
    dataBarang[index][1] =harga
} else {
  //jika nomor barang tidak valid,tampilkan alert
  alert("Nomor barang tidak valid")
}

tampilkan()
//kosongkan input nomor dan harta edit setelah diedit
document.getElementById("nomor").value =""
document.getElementById("hargaedit"). value=""
 document.getElementById("namabarangedit"). value=""
}
//fungsi untuk menghapus barang berdasarkan nomor barang
function hapusNomor() {
  //ubah nomor barang menjadi index arry dengan mengurangi 1
  let index = Number(document.getElementById.length("nomorhapus").value)-1
 
 //periksa apakah index valid
 if (index >= 0 && index < dataBarang.length) {
   //hapus barang dari arry dataBarang menggunakan splice
   dataBarang.splice(index, 1) 
 } else {
   //jika nomer barang tidak valid, tampilkan alert
   alert("Nomor barang tidak valid")
 }
 tampilkan()
//kosongkan input nomor hapus setelah dihapus
document.getElementById("nomorHapus").value =""
}
//fungsi untuk menghapus barang berdasarkan index
function hapusIndex(index) {
  

  //periksa apakah index valid
 if (index >= 0 && index < dataBarang.length) {
   //hapus barang dari arry dataBarang menggunakan splice
   dataBarang.splice(index, 1) 
 } else {
   //jika nomer barang tidak valid, tampilkan alert
   alert("Nomor barang tidak valid")
 }
 tampilkan()
 }
 