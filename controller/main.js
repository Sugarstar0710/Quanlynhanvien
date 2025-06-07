import listNhanVien from "../models/NhacVienList";

import NhanVien from "../models/nhanVien";

//tạo đối tượng 

const listNhanVien = new NhanVienList();

export const getEle =(id)=>{
    return document.getElementById(id);
};
const getValue = () => {
    const taikhoan = getEle("tknv").value;
    const hoTen = getEle("name").value;
    const email = getEle("email").value;
    const matKhau = getEle("password").value;
    const ngayLam = getEle("datepicker").value;
    const luongCoBan = parseFloat(getEle("luongCB").value);
    const chucVu = getEle("chucvu").value;
    const gioLam = parseInt(getEle("gioLam").value);

    const nhanVien = new NhanVien(taikhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);
    nhanVien.tongLuong = nhanVien.tinhTongLuong();
    nhanVien.loaiNhanVien = nhanVien.xepLoai();
    return nhanVien;
};
const renderemploylist = (data) =>{
     /**
   * Hiển thị danh sách nhân viênviên
   * 0. Tạo biến contentHTML = ""
     1. Duyệt qua mảng arr
        1.1. lấy được nhanvien từ mảng arr (nhanviennhanvien = arr[i]) 
        1.2. Tạo dòng & cột => Tích luỹ vào contentHTML
            contentHTML += `
                <tr>
                    <td></td>
                </tr>
            `
    2. Dom tới tbody gán contenHTML vào
   */
   let contentHTML = "";
    for (let i = 0; i < data.length; i++) {
        const nv = data[i];
        contentHTML += `
            <tr>
                <td>${nv.taikhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loaiNhanVien}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taikhoan}')">Xóa</button>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${nv.taikhoan}')">Sửa</button>
                </td>
            </tr>
        `;
    }
    getEle("tableDanhSach").innerHTML = contentHTML;
};
// Gắn vào window để dùng trong HTML
window.xoaNhanVien = (taikhoan) => {
    listNhanVien.deleteNhanVien(taikhoan);
    renderemploylist(listNhanVien.arr);
};
window.suaNhanVien = (taikhoan) => {
    const index = listNhanVien.findIndexNhanVien(taikhoan);
    if (index !== -1) {
        const nv = listNhanVien.arr[index];
        getEle("tknv").value = nv.taikhoan;
        getEle("name").value = nv.hoTen;
        getEle("email").value = nv.email;
        getEle("password").value = nv.matKhau;
        getEle("datepicker").value = nv.ngayLam;
        getEle("luongCB").value = nv.luongCoBan;
        getEle("chucvu").value = nv.chucVu;
        getEle("gioLam").value = nv.gioLam;

        getEle("tknv").disabled = true;
        getEle("btnCapNhat").style.display = "inline-block";
        getEle("btnThemNV").style.display = "none";
    }
};
// add nhan vienvien
getEle("btnThemNV").onclick = () => {
    const nv = getValue();
    listNhanVien.addNhanVien(nv);
    renderemploylist(listNhanVien.arr);
};
// update nhan vienvien
getEle("btnCapNhat").onclick = () => {
    const nv = getValue();
    listNhanVien.updateNhanVien(nv);
    renderemploylist(listNhanVien.arr);
    getEle("tknv").disabled = false;
    getEle("btnCapNhat").style.display = "none";
    getEle("btnThemNV").style.display = "inline-block";
    document.querySelector("form").reset();
};
