function validateForm() {
	let isValid = true;

	// Tài khoản: 4-6 ký số
	let tk = document.getElementById("tknv").value.trim();
	let regexTK = /^\d{4,6}$/;
	if (!regexTK.test(tk)) {
		document.getElementById("tbTKNV").innerText = "Tài khoản phải 4-6 ký số";
		isValid = false;
	} else {
		document.getElementById("tbTKNV").innerText = "";
	}

	// Họ tên: chỉ chứa chữ
	let ten = document.getElementById("name").value.trim();
	let regexTen = /^[a-zA-ZÀ-ỹ\s]+$/;
	if (!regexTen.test(ten)) {
		document.getElementById("tbTen").innerText = "Tên phải là chữ";
		isValid = false;
	} else {
		document.getElementById("tbTen").innerText = "";
	}

	// Email
	let email = document.getElementById("email").value.trim();
	let regexEmail = /^\S+@\S+\.\S+$/;
	if (!regexEmail.test(email)) {
		document.getElementById("tbEmail").innerText = "Email không hợp lệ";
		isValid = false;
	} else {
		document.getElementById("tbEmail").innerText = "";
	}

	// Mật khẩu
	let mk = document.getElementById("password").value;
	let regexMK = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
	if (!regexMK.test(mk)) {
		document.getElementById("tbMatKhau").innerText = "Mật khẩu 6-10 ký tự, ít nhất 1 số, 1 chữ hoa, 1 ký tự đặc biệt";
		isValid = false;
	} else {
		document.getElementById("tbMatKhau").innerText = "";
	}

	// Ngày làm (mm/dd/yyyy)
	let ngay = document.getElementById("datepicker").value.trim();
	let regexNgay = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
	if (!regexNgay.test(ngay)) {
		document.getElementById("tbNgay").innerText = "Định dạng mm/dd/yyyy";
		isValid = false;
	} else {
		document.getElementById("tbNgay").innerText = "";
	}

	// Lương cơ bản
	let luong = +document.getElementById("luongCB").value;
	if (isNaN(luong) || luong < 1000000 || luong > 20000000) {
		document.getElementById("tbLuongCB").innerText = "Lương phải từ 1tr đến 20tr";
		isValid = false;
	} else {
		document.getElementById("tbLuongCB").innerText = "";
	}

	// Chức vụ
	let chucVu = document.getElementById("chucvu").value;
	if (["Giám đốc", "Trưởng phòng", "Nhân viên"].indexOf(chucVu) === -1) {
		document.getElementById("tbChucVu").innerText = "Chọn chức vụ hợp lệ";
		isValid = false;
	} else {
		document.getElementById("tbChucVu").innerText = "";
	}

	// Giờ làm
	let gio = +document.getElementById("gioLam").value;
	if (isNaN(gio) || gio < 80 || gio > 200) {
		document.getElementById("tbGiolam").innerText = "Giờ làm 80 - 200";
		isValid = false;
	} else {
		document.getElementById("tbGiolam").innerText = "";
	}

	return isValid;
}
