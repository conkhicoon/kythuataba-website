# Website Công ty TNHH Kỹ thuật ABA

Website tĩnh (HTML/CSS/JS thuần), không cần cài đặt hay build. Toàn bộ website nằm trong thư mục `public/`.

## Cấu trúc
- `public/index.html` Trang chủ
- `public/chung-thu.html` Chứng thư đại lý
- `public/san-pham.html` Sản phẩm và hình ảnh
- `public/tu-van-ky-thuat.html` Tư vấn kỹ thuật, từ khóa
- `public/lien-he.html` Liên hệ, yêu cầu báo giá
- `public/css/style.css` Giao diện (màu sắc ở đầu file, biến `--blue`, `--orange`, `--navy`)
- `public/js/main.js` Xem ảnh chứng thư phóng to, form báo giá (gửi qua email)
- `public/images/` Ảnh. Thay ảnh bằng cách giữ nguyên tên file.

## Xem thử trên máy
Mở file `public/index.html` bằng trình duyệt.

## Sửa nội dung
Mở file `.html` tương ứng bằng Notepad hoặc VS Code, sửa chữ, lưu lại, rồi đẩy lên GitHub. Cloudflare Pages tự cập nhật sau khoảng 1 phút.

## Deploy lên Cloudflare Pages
- Framework preset: None
- Build command: để trống
- Build output directory: `public`

## Việc cần làm khi đưa lên thật
- Đổi tên miền trong `public/sitemap.xml`, `public/robots.txt` và các thẻ canonical nếu dùng tên miền khác `kythuataba.vn`.
- Form báo giá hiện mở phần mềm email của khách (mailto). Muốn nhận trực tiếp, dùng Cloudflare Pages Functions hoặc dịch vụ form như Formspree.
- Thông tin công ty (địa chỉ, điện thoại, email) nằm trong header, footer và `lien-he.html`.
