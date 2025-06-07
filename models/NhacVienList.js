class listNhanVien {
    constructor() {
        this.arr = [];
    }

    addNhanVien(nhanVien) {
        this.arr.push(nhanVien);
    }

    findIndexNhanVien(taikhoan) {
        return this.arr.findIndex(nv => nv.taikhoan === taikhoan);
    }

    deleteNhanVien(taikhoan) {
        const index = this.findIndexNhanVien(taikhoan);
        if (index !== -1) {
            this.arr.splice(index, 1);
            return true;
        }
        return false;
    }

    updateNhanVien(updatedNV) {
        const index = this.findIndexNhanVien(updatedNV.taikhoan);
        if (index !== -1) {
            this.arr[index] = updatedNV;
            return true;
        }
        return false;
    }
}

export default listNhanVien;