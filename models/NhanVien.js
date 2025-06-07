class NhanVien{
    constructor(
        _taiKhoan,
        _hoTen,
        _email,
        _matKhau,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLam,
        _tongLuong,
        _loaiNhanVien
    ){
        this.taikhoan=_taiKhoan;
        this.hoTen=_hoTen;
        this.email=_email;
        this.matKhau=_matKhau;
        this.ngayLam=_ngayLam;
        this.luongCoBan=_luongCoBan;
        this.chucVu=_chucVu;
        this.gioLam=_gioLam;
        this.tongLuong=_tongLuong;
           this.loaiNhanVien=_loaiNhanVien;
    }
    tinhTongLuong() {
		let heSo = 1;
		if (this.chucVu === "Giám đốc") heSo = 3;
		else if (this.chucVu === "Trưởng phòng") heSo = 2;
		else if (this.chucVu === "Nhân viên") heSo = 1;
		return this.luongCoBan * heSo;
	}

	xepLoai() {
		if (this.gioLam >= 192) return "Xuất sắc";
		else if (this.gioLam >= 176) return "Giỏi";
		else if (this.gioLam >= 160) return "Khá";
		else return "Trung bình";
	}
    
}
export default NhanVien